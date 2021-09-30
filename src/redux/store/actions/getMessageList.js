import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useGetMessageList() {
    let dispatch = useDispatch()
    return async function (page, id) {
        dispatch({
            type: 'LOADING_MESSAGE'
        })
        const res = await HTTP.post(`/lecturer/getcomment?page=${page}&rows=10`, { article_id: id })
        if (!res.data.length) {
            dispatch({
                type: 'LOADEND_MESSAGE',
            })
            return false
        } else {
            dispatch({
                type: 'LOADOVER_MESSAGE',
                messageData: res.data
            })
            return true
        }

    }
}