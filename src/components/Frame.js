import React from 'react'
import Header from './Header'
import Menu from './Menu'
import '../assets/css/reset.css'
import '../assets/css/common.css'
export default function Frame(props) {
    return (
        <div>
            <Header />
            <Menu />
            <div id='main'>
                {props.children}
            </div>
        </div>
    )
}