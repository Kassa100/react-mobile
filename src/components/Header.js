import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import { useBack } from '../hooks'
import useIsLogin from '../redux/store/actions/isLogin'
import { Popover, } from "antd-mobile"
import useLoginOut from '../redux/store/actions/loginOut'
function getUser(pathName, user, visible, setVisible, loginOut, history) {
    if (pathName === '/login') {
        return ''
    }
    if (user) {
        return (
            <Popover
                mask
                visible={visible}
                onSelect={() => { setVisible(false); loginOut(); history.push('/login') }}
                overlay={[
                    (<Popover.Item key="0"  >退出登录</Popover.Item>),

                ]}
            >
                <span className='header-btn-right header-user'>{user}</span>
            </Popover>)
    }
    return <Link className="user" to="/login"></Link>
}
export default withRouter(function Header(props) {
    const user = useSelector(state => state.getUser)
    const [visible, setVisible] = useState(false)
    const pathName = props.location.pathname
    const { changeShow, history } = props
    const goBack = useBack(props.history)
    const isLogin = useIsLogin()
    const loginOut = useLoginOut()
    useEffect(() => {
        isLogin()
    }, [])
    return (
        <header id="header">
            <nav className="menu">
                {/* 返回按钮*/}
                {pathName === '/login' ?
                    <div onClick={() => { goBack() }} className="header-btn-left iconfont icon-back"></div> :
                    <div onClick={() => { changeShow() }} className="header-btn-left iconfont icon-hycaidan"></div>}

                {/* 菜单按钮 */}
                {/*  */}
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser(pathName, user, visible, setVisible, loginOut, history)}
        </header>
    )
})