import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useIsLogin() {
    let dispatch = useDispatch()
    return function () {
        HTTP.post('/user/islogin').then(res => {
            if (res.data.code === 0) {
                dispatch({
                    type: 'LOGIN',
                    user: res.data.username
                })
            }
        })
    }
}