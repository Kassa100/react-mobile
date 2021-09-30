import HTTP from "./http"
import { useDispatch } from "react-redux"

function useIsGood() {
    let dispatch = useDispatch()
    return async function (id) {
        const res = await HTTP.post('/lecturer/getgood', { article_id: id })
        if (res.data.code === 0) {
            dispatch({
                type: 'GOOD',
                goodId: res.data.gooid
            })
        } else {
            dispatch({
                type: 'CANCEL_GOOD'
            })
        }

    }
}


function useSetGood() {
    const getGood = useIsGood()
    return async function (id) {
        const res = await HTTP.post('/lecturer/good', { article_id: id })
        if (res.data.code === 0) {
            getGood(id)
            return true
        }
    }
}
function useCancelGood() {
    let dispatch = useDispatch()
    return async function (id, goodId) {
        const res = await HTTP.post('/lecturer/cancelgood', { article_id: id, goodid: goodId })

        if (res.data.code === 0) {
            dispatch({
                type: 'CANCEL_GOOD'
            })
            return true
        }
    }
}

export {
    useIsGood,
    useSetGood,
    useCancelGood
}