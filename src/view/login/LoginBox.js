import React, { useEffect, useState } from 'react'
import useLogin from '../../redux/store/actions/login'
import { Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { useBack } from '../../hooks'
export default withRouter(function LoginBox(props) {
    const { registerUserName, registerPassword } = props
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [vcode, setVcode] = useState('')
    const [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?' + Date.now())
    const login = useLogin();
    const goBack = useBack(props.history)
    const { setDeg } = props
    useEffect(() => {
        setUser(registerUserName)
        setPwd(registerPassword)
    }, [registerUserName, registerPassword])
    function toLogon() {
        login(user, pwd, vcode).then((data) => {
            if (data.code !== 0) {
                Toast.fail(data.msg)
                setVcodeSrc('/miaov/user/verify?' + Date.now())
            } else {
                Toast.success(data.msg)
                goBack()
            }
        })
    }
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require("../../assets/images/user_img.png").default} alt="" />
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
                <p className="form_tip">没有帐号？<span onClick={() => {
                    setDeg(-180)
                }}>立即注册</span></p>
            </div>
        </div>
    )
})