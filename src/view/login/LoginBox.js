import React, { useState } from 'react'
import useLogin from '../../redux/store/actions/login'
import Login from './Login'

export default function LoginBox(props) {
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [vcode, setVcode] = useState('')
    const [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?' + Date.now())
    const login = useLogin();
    function toLogon() {
        login(user, pwd, vcode).then((data) => {
            if (data.code !== 0) {
                alert(data.msg)
            } else {

            }
        })
    }
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require("../../assets/images/user_img.png")} alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text" placeholder="用户名" value={user} onChange={(e) => {
                        setUser(e.target.value)
                    }} />
                </p>
                <p>
                    <input type="password" placeholder="请输入密码" value={pwd} onChange={(e) => {
                        setPwd(e.target.value)
                    }} />
                </p>
                <p className="clearfix">
                    <input type="text" placeholder='验证码' className='verifyCode' value={vcode}
                        onChange={(e) => {
                            setVcode(e.target.value)
                        }}

                    />
                    <img className='verify'
                        onClick={
                            () => {
                                setVcodeSrc('/miaov/user/verify?' + Date.now())
                            }
                        } src={vcodeSrc} alt='' />
                </p>
                {/* <p className="mima clearfix">
                    <span>
                        <input id="rem" type="checkbox" />
                        <label htmlFor="rem"></label>记住密码
                    </span>
                    <a >忘记密码？</a>
                </p> */}
                <button className="form_btn" onClick={toLogon}>登录</button>
                <p className="form_tip">没有帐号？<a href='#'>立即注册</a></p>
            </div>
        </div>
    )
}