import React, { useEffect, useRef, useState } from 'react'
import BScroll from "better-scroll"
import { useInnerHeight } from '../hooks'
import Header from './Header'
import Menu from './Menu'
import '../assets/css/reset.css'
import '../assets/css/common.css'
export default function Frame(props) {
    const [showMenu, setShowMenu] = useState(false)
    const innerHeight = useInnerHeight()
    let pageScroll = null;
    const wrap = useRef(null);
    function changeShow() {
        setShowMenu(!showMenu)
    }
    function menuHide() {
        setShowMenu(false)
    }
    useEffect(() => {
        pageScroll = new BScroll(wrap.current);
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