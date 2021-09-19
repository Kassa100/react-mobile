import React from 'react'
import { Link } from "react-router-dom"
export default function Header(props) {

    return (
        <header id="header">
            <nav className="menu">
                <a href="/">导航</a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login"></Link>
        </header>
    )
}