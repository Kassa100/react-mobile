import React from 'react'
import Carousels from '../../components/Carousels'
export default function LecturerBanner(props) {
    const { newData, data, showProupInfo } = props
    return (
        <div className="teacher_banner">
            <h2>
                <span>妙味团队</span>
            </h2>
            {data.length > 0 ?
                <Carousels
                    data={newData}
                    render={(data) => {
                        let point = {
                            x: '',
                            y: ''
                        };
                        return (<ul className="lecture_list">
                            {
                                data.map(item => {
                                    return (<li
                                        key={item.id}
                                        onTouchEnd={
                                            (e) => {
                                                let nowTouch = e.changedTouches[0];
                                                let nowPoint = {
                                                    x: nowTouch.pageX,
                                                    y: nowTouch.pageY
                                                }
                                                if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
                                                    showProupInfo(item)
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
                                    >
                                        <img src={item.icon} alt="" />
                                        <p>{item.title}</p>
                                    </li>)
                                })
                            }
                        </ul>)
                    }}
                /> :
                ''
            }
        </div>
    )
}