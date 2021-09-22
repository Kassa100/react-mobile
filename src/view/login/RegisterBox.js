import React, { useState } from 'react'
import useRegister from '../../redux/store/actions/register'
import { Toast } from 'antd-mobile'
export default function RegisterPage(props) {
    const [vcode, setVcode] = useState('')
    const [vcodeSrc, setVcodeSrc] = useState('/miaov/user/verify?' + Date.now())
    const { setDeg, setRegisterPassword, setRegisterUserName } = props
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const register = useRegister()
    function toRegister() {
        let data = {
            username,
            password,
            repassword,
            verify: vcode
        }
        register(data).then(res => {
            if (res.code === 0) {
                Toast.success(res.msg, 1, () => {
                    setDeg(0)
                    setRegisterUserName(username)
                    setRegisterPassword(password)
                })
            } else {
                Toast.fail(res.msg, 1, () => {
                    setVcodeSrc('/miaov/user/verify?' + Date.now())
                    setVcode('')
                })
            }
        })
    }
    return (
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
                <p>
                    <input type="text" value={username} onChange={(e) => {
                        setUserName(e.target.value)
                    }} placeholder="用户名" />
                </p>
                <p>
                    <input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder="设置密码" />
                </p>
                <p>
                    <input type="password" value={repassword} onChange={(e) => {
                        setRePassword(e.target.value)
                    }} placeholder="确定密码" />
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
                <button className="form_btn" onClick={() => {
                    toRegister()
                }}>马上注册</button>
                <p className="form_tip">已有帐号？<span onClick={() => {
                    setDeg(0)
                }}>立即登录</span></p>
            </div>
        </div>
    )
}