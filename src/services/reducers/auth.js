import * as auth from '../actions/auth'

const initialState = {
    isAuthChecked: false,

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

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.REGISTER_USER_REQUEST: {
            return {
                ...state,
                registerUserRequest: true,
                registerUserFailed: false
            }
        }
        case auth.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                isAuthChecked: true,
                registerUserRequest: false,
                user: action.payload.user,
            }
        }
        case auth.REGISTER_USER_FAILED: {
            return {
                ...state,
                registerUserFailed: true,
                registerUserRequest: false
            }
        }
        case auth.LOGIN_USER_REQUEST: {
            return {
                ...state,
                loginUserRequest: true,
                loginUserFailed: false
            }
        }
        case auth.LOGIN_USER_SUCCESS: {
            return {
                ...state,
                isAuthChecked: true,
                loginUserRequest: false,
                user: action.payload.user,
            }
        }
        case auth.LOGIN_USER_FAILED: {
            return {
                ...state,
                loginUserFailed: true,
                loginUserRequest: false
            }
        }
        case auth.LOGOUT_USER: {
            return {
                ...state,
                user: null,
                isAuthChecked: false
            }
        }
        default: {
            return state
        }
    }
}

export default authReducer