import React from "react"
import "../../assets/css/login.css"
import LoginBox from "./LoginBox"
// import RegisterBox from "./RegisterBox"
export default function Login(props) {
    return (
        <div id='login_boxWrap'>
            <h2 className="login_register"><span>登录&amp;注册</span></h2>
            <div className="login_register_box">
                <div className='box'>
                    <LoginBox />
                    {/* <RegisterPage /> */}
                </div>
            </div>
        </div>
    )
}