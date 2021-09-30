export default function work(state = {
    loading: true,
    data: {},
}, action) {
    switch (action.type) {
        case 'WORK_RESET':
            return {
                data: {},
                loading: true
            }
        case 'WORK_LOADOVER':
            return {
                loading: false,
                data: action.data
            }


        default:
            return state;
    }
}