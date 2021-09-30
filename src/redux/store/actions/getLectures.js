import HTTP from "./http"
import { useDispatch } from 'react-redux'
export default function useGetLectures() {
    let dispatch = useDispatch()
    return async function () {

        const res = await HTTP.post('/lecturer/lists?page=1&rows=100', { order: 'desc', sort: 'sort', category_id: 2 })
        dispatch({
            type: 'LOADEND_LECTURES',
            data: res.data
        })

    }
}