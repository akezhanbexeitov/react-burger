import * as register from '../actions/auth'

const initialState = {
    isAuth: false,

    user: null,

    registerUserRequest: false,
    registerUserFailed: false,

    loginUserRequest: false,
    loginUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,

    getUserRequest: false,
    getUserFailed: false
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case register.REGISTER_USER_REQUEST: {
            return {
                ...state,
                registerUserRequest: true,
                registerUserFailed: false
            }
        }
        case register.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                registerUserRequest: false,
                user: action.payload.user,
            }
        }
        case register.REGISTER_USER_FAILED: {
            return {
                ...state,
                registerUserFailed: true,
                registerUserRequest: false
            }
        }
        default: {
            return state
        }
    }
}

export default registerReducer