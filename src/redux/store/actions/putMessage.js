import HTTP from "./http"
export default function usePutMessage() {
    return async function (info) {
        const res = await HTTP.post('/lecturer/addcomment', info)
        return res.data
    }
}