export default function good(state = {
    goodStatus: false,
    goodId: ''
}, action) {
    switch (action.type) {
        case 'GOOD':
            return {
                goodStatus: true,
                goodId: action.goodId,
            }
        case 'CANCEL_GOOD':
            return {
                goodStatus: false,
                goodId: '',
            }
        case 'RESET_GOOD':
            return {
                goodStatus: false,
                goodId: '',
            }
        default:
            return state
    }
}

