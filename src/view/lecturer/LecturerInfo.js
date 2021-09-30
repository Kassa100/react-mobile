import React, { useEffect, useRef } from 'react'
import BScroll from "@better-scroll/core"
import ScrollBar from '@better-scroll/scroll-bar'
export default function LecturerInfo(props) {
    let { proupInfo, hideProupInfo } = props
    const wrap = useRef(null)
    let point = {
        x: '',
        y: ''
    }
    useEffect(() => {
        let bscroll = null
        BScroll.use(ScrollBar)
        bscroll = new BScroll(wrap.current, {
            scrollbar: true
        })
        return () => {
            bscroll = null
        }
    }, [])
    return (
        <aside className="elastic" onTouchStart={() => {
            hideProupInfo()
        }}>
            <div className="elastic_box" onTouchStart={
                (e) => {
                    e.stopPropagation()
                }
            }>
                <span className="close"
                    onTouchEnd={
                        (e) => {
                            let nowTouch = e.changedTouches[0];
                            let nowPoint = {
                                x: nowTouch.pageX,
                                y: nowTouch.pageY
                            }
                            if (Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
                                hideProupInfo()
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
                >关闭</span>
                <div className="elastic_img">
                    <img src={proupInfo.icon} alt="" />
                </div>
                <div className="elastic_txt">
                    <h3>{proupInfo.title}-妙味课堂 全职讲师</h3>
                    <div className="elastic_content" ref={wrap}>
                        <div dangerouslySetInnerHTML={{
                            __html: proupInfo.content
                        }}>

                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}