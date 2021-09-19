import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useLogin() {
    let dispatch = useDispatch()
    return async function (username = '', password = '', verify = '') {
        const res = await HTTP.post('/user/login', { username, password, verify })
        if (res.data.code === 0) {
            dispatch({
                type: 'LOGIN',
                user: username
            })
        }
        return res.data
    }
}