import React, { useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import '../assets/css/reset.css'
import '../assets/css/common.css'
export default function Frame(props) {
    const [showMenu, setShowMenu] = useState(false)
    function changeShow() {
        setShowMenu(!showMenu)
    }
    function menuHide() {
        setShowMenu(false)
    }
    return (
        <div>
            <Header changeShow={changeShow} />
            <Menu />
            <div id='main' onTouchStart={() => {
                menuHide()
            }} style={{ transform: `translateX(${showMenu ? 4.5 : 0}rem)` }}>
                {props.children}
            </div>
        </div>
    )
}