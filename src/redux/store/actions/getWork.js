import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useGetWork() {
    let dispatch = useDispatch()
    return async function (id) {
        const res = await HTTP.post('/lecturer/info', { article_id: id })
        dispatch({
            type: 'WORK_LOADOVER',
            data: res.data
        })

    }
}