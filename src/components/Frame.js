import React, { useEffect, useRef, useState } from 'react'
import BScroll from "@better-scroll/core"
import PullUp from "@better-scroll/pull-up"
import { useInnerHeight } from '../hooks'
import Header from './Header'
import Menu from './Menu'
import '../assets/css/reset.css'
import '../assets/css/common.css'
export default function Frame(props) {
    const [showMenu, setShowMenu] = useState(false)
    const innerHeight = useInnerHeight()
    const wrap = useRef(null);
    const { pullUp, getData } = props
    function changeShow() {
        setShowMenu(!showMenu)
    }
    function menuHide() {
        setShowMenu(false)
    }
    useEffect(() => {
        BScroll.use(PullUp)
        let pageScroll = new BScroll(wrap.current, {
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
            },
            pullUpLoad: pullUp ? {
                threshold: 200
            } : false
        });
        if (pullUp) {
            pageScroll.on('pullingUp', () => {
                getData().then(res => {
                    if (res) {
                        pageScroll.finishPullUp()
                        pageScroll.refresh()
                    } else {
                        pageScroll.closePullUp()
                    }

                });
            })
        }
        return () => {
            pageScroll = null
        }
    }, [])
    return (
        <div>
            <Header changeShow={changeShow} />
            <Menu menuHide={menuHide} />
            <div id='main'
                onTouchStart={() => {
                    menuHide()
                }}
                style={{ transform: `translateX(${showMenu ? 4.5 : 0}rem)`, height: innerHeight }}
            >
                <div className='pageWrap' ref={wrap} >
                    <div> {props.children}</div>
                </div>
            </div>
        </div>
    )
}