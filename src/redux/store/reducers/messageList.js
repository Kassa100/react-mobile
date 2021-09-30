export default function messageList(state = {
    messageData: [],
    loading: false,
    loadEnd: false
}, action) {
    switch (action.type) {
        case 'LOADING_MESSAGE':
            return {
                ...state,
                loading: true
            }
        case 'LOADOVER_MESSAGE':
            return {
                ...state,
                loading: false,
                messageData: state.messageData.concat(action.messageData)
            }
        case 'LOADEND_MESSAGE':
            return {
                ...state,
                loadEnd: true
            }
        case 'RESET_MESSAGE':
            return {
                messageData: [],
                loading: false,
                loadEnd: false
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                messageData: [action.messageInfo, ...state.messageData],

            }
        default:
            return state
    }
}

