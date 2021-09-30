export default function lectures(state = {
    loading: true,
    data: [],
}, action) {
    switch (action.type) {

        case 'LOADEND_LECTURES':
            return {
                ...state,
                data: action.data,
                loading: false
            }

        default:
            return state;
    }
}