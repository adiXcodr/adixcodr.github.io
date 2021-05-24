
const initialState = {
    userData: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER':
            return state.userData
        case 'SET_USER':
            return { ...state, userData: action.payload }
        default:
            return state
    }
}