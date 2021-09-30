import { Toast } from 'antd-mobile'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import usePutMessage from '../../redux/store/actions/putMessage'

export default function Message(props) {
    let { show, setShowMessage, id } = props
    const [messageInfo, setMessageInfo] = useState('')
    const [put, setPut] = useState(true)
    const putMessage = usePutMessage();
    const user = useSelector(state => state.getUser);
    const dispatch = useDispatch()
    return (
        <>
            <div className="message_warp" style={{ transform: `translateY(${show ? 0 : "100%"})` }}>
                <textarea onChange={e => {
                    setMessageInfo(e.target.value)
                }} value={messageInfo} />
                <footer className={"miiapv_footer " + (put ? '' : 'put')} onTouchEnd={() => {
                    if (messageInfo) {
                        if (put) {
                            setPut(false)
                            putMessage({ article_id: id, content: messageInfo }).then(res => {
                                if (res.code !== 0) {
                                    Toast.fail(res.message)
                                    setPut(false)
                                }
                                Toast.success('评论成功')
                                setPut(true)
                                setShowMessage(false)
                                dispatch({
                                    type: 'ADD_MESSAGE',
                                    messageInfo: {
                                        content: messageInfo,
                                        create_time: Date.now(),
                                        username: user
                                    }
                                })
                                setMessageInfo('')
                            })
                        }
                    } else {
                        Toast.info('评论内容不能为空')
                    }
                }}>
                    发表评论
                </footer>
            </div>
        </>
    )
}