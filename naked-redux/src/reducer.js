export default function (state, action) {
    switch (action.type) {
        case 'SET_STATE_MANAGEMENT_TECH':
            return {
                ...state,
                lang: action.text
            }
        default:
            return state;
    }    
}