import React, { useState } from "react"
import "../../assets/css/login.css"
import Frame from "../../components/Frame"
import LoginBox from "./LoginBox"
import RegisterBox from "./RegisterBox"
export default function Login(props) {
    const [deg, setDeg] = useState(0)
    const [registerUserName, setRegisterUserName] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    return (
        <Frame bounce={false}>
            <div id='login_boxWrap'>
                <h2 className="login_register"><span>登录&amp;注册</span></h2>
                <div className="login_register_box">
                    <div className='box' style={{ transform: `rotateY(${deg}deg)` }}>
                        <LoginBox registerUserName={registerUserName} registerPassword={registerPassword} setDeg={setDeg} />
                        <RegisterBox setRegisterUserName={setRegisterUserName} setRegisterPassword={setRegisterPassword} setDeg={setDeg} />
                    </div>
                </div>
            </div>
        </Frame>
    )
}