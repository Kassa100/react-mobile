import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { useIsGood, useSetGood, useCancelGood } from '../../redux/store/actions/good'
function Good(props) {

    const { num, id, history } = props
    const { goodStatus, goodId } = useSelector(state => state.good);
    const user = useSelector(state => state.getUser);
    const getGood = useIsGood();
    const setGood = useSetGood();
    const cancelGood = useCancelGood()
    const [goodCount, setGoodCount] = useState(parseInt(num))
    useEffect(() => {
        getGood(id)
    }, [user])
    let point = {
        x: '',
        y: ''
    }
    return (
        <p className='miiaov_zan'>
            <span>有{goodCount}人觉得很赞</span>
            <span
                className={"iconfont icon-tuijian1 " + (goodStatus ? 'good' : '')}
                onTouchEnd={
                    (e) => {
                        let nowTouch = e.changedTouches[0];
                        let nowPoint = {
                            x: nowTouch.pageX,
                            y: nowTouch.pageY
                        }
                        if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
                            if (user) {
                                if (goodStatus) {
                                    cancelGood(id, goodId).then(res => {
                                        if (res) {
                                            setGoodCount(goodCount - 1)
                                        }
                                    })
                                } else {
                                    setGood(id).then(res => {
                                        if (res) {
                                            setGoodCount(goodCount + 1)
                                        }
                                    })
                                }
                            } else {
                                history.push('/login')
                            }
                        }

                    }
                }
                onTouchStart={
                    (e) => {
                        let touch = e.changedTouches[0];
                        point.x = touch.pageX;
                        point.y = touch.pageY;
                    }
                }
            ></span>
        </p>
    )
}

export default withRouter(Good)