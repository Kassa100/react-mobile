import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useGetWorks() {
    let dispatch = useDispatch()
    return async function (page) {
        dispatch({
            type: 'LOAD'
        })
        const res = await HTTP.post(`/lecturer/lists?page=${page}&rows=8`, { order: 'desc', sort: 'sort', category_id: 1, recommend: 1 })
        if (!res.data.length) {
            dispatch({
                type: 'LOADEND',
            })
            return false
        } else {
            dispatch({
                type: 'LOADOVER',
                data: res.data
            })
            return true
        }

    }
}