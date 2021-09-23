import React from "react";


import Index from '../view/index/Index'
import Course from '../view/course/Course'
import Lecturer from "../view/lecturer/Lecturer"
import Work from '../view/work/Work'
import Login from '../view/login/Login'
const routeList = [
    {
        name: '首页',
        path: '/',
        exact: true,
        render(props) {
            return <Index {...props} />
        }
    }, {
        name: '课程安排',
        path: '/course',
        exact: true,
        render(props) {
            return <Course {...props} />
        }
    }, {
        name: '讲师团队',
        path: '/lecturer',
        exact: true,
        render(props) {
            return <Lecturer {...props} />
        }
    }, {
        name: '作品详情',
        path: '/work',
        exact: true,
        render(props) {
            return <Work {...props} />
        }
    }, {
        name: '登录',
        path: '/login',
        exact: true,
        render(props) {
            return <Login {...props} />
        }
    }
]



const nav = [
    {
        name: '首页',
        path: '/',
        exact: true,
        className: 'iconfont icon-home'
    }, {
        name: '课程安排',
        path: '/course',
        exact: true,
        className: 'iconfont icon-kecheng'
    }, {
        name: '讲师团队',
        path: '/lecturer',
        exact: true,
        className: 'iconfont icon-peixunjiangshi'
    }
]

export {
    routeList,
    nav
};