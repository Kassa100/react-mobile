import React from "react"
import { connect } from "react-redux"
import login from "../../redux/store/actions/login"

function Index(props) {
    return (
        <>
            <h3>首页</h3>
            <button onClick={() => {
                props.dispatch(login())
            }}>登录</button>
        </>
    )
}
export default connect(res => {
    return res
})(Index)