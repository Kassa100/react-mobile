export default function works(state = {
    loading: false,
    loadEnd: false,
    data: [],
}, action) {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                loading: true
            }
        case 'LOADOVER':
            return {
                ...state,
                loading: false,
                data: state.data.concat(action.data)
            }

        case 'LOADEND':
            return {
                ...state,
                loadEnd: true,
            }
        case 'LEAVEINDEX':
            return {
                ...state,
                data: [],
            }
        default:
            return state;
    }
}