import { TAuthActions } from './../actions/auth';
import * as auth from '../actions/auth'

type TUser = {
    email: string
    name: string
}

type TAuthState = {
    isAuthChecked: boolean
    user: TUser
    registerUserRequest: boolean
    registerUserFailed: boolean
    loginUserRequest: boolean
    loginUserFailed: boolean
    getUserRequest: boolean
    getUserFailed: boolean
    updateUserRequest: boolean
    updateUserFailed: boolean
    forgotPasswordRequest: boolean
}

export const initialState: TAuthState = {
    isAuthChecked: false,

    user: {} as TUser,

    registerUserRequest: false,
    registerUserFailed: false,

    loginUserRequest: false,
    loginUserFailed: false,
    
    getUserRequest: false,
    getUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,

    forgotPasswordRequest: false
}

const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
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
        case auth.GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                getUserFailed: false
            }
        }
        case auth.GET_USER_SUCCESS: {
            return {
                ...state,
                isAuthChecked: true,
                getUserRequest: false,
                user: action.payload.user,
            }
        }
        case auth.GET_USER_FAILED: {
            return {
                ...state,
                getUserFailed: true,
                getUserRequest: false
            }
        }
        case auth.UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateUserRequest: true,
                updateUserFailed: false
            }
        }
        case auth.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isAuthChecked: true,
                updateUserRequest: false,
                user: action.payload.user,
            }
        }
        case auth.UPDATE_USER_FAILED: {
            return {
                ...state,
                updateUserFailed: true,
                updateUserRequest: false
            }
        }
        case auth.FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true
            }
        }
        case auth.AUTH_CHECKED: {
            return {
                ...state,
                isAuthChecked: true
            }
        }
        case auth.LOGOUT_USER: {
            return {
                ...state,
                user: {} as TUser,
                isAuthChecked: false
            }
        }
        default: {
            return state
        }
    }
}

export default authReducer