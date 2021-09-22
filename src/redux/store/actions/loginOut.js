import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useLoginOut() {
    let dispatch = useDispatch()
    return function () {
        HTTP.post('/user/logout').then(res => {
            if (res.data.code === 0) {
                dispatch({
                    type: 'LOGOUT',
                })
            }
        })
    }
}