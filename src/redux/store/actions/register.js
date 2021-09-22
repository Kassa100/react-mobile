import HTTP from "./http"

export default function useLogin() {
    return async function (data) {
        const res = await HTTP.post('/user/register', data)
        return res.data
    }
}