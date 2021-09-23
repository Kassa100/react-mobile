import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../router/router_config'
export default function Menu(props) {
    const { menuHide } = props
    return (
        <nav id="menu">
            {nav.map((item, index) => {
                return <NavLink
                    key={index}
                    className={item.className}
                    to={item.path}
                    onTouchEnd={
                        menuHide
                    }
                    exact={item.exact}
                    activeClassName={"active"}
                >{item.name}</NavLink>

            })}
        </nav>
    )
}