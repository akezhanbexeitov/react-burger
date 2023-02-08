import { AppThunk, AppDispatch } from './../../utils/types';
import { BASE_URL } from "../../constants/constants"
import { getCookie, setCookie, deleteCookie } from "../../utils/cookies"
import { request, fetchWithRefresh } from "../../utils/server-requests"

export const REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST' = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS' = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED: 'REGISTER_USER_FAILED' = 'REGISTER_USER_FAILED'

export const LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST' = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS' = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED: 'LOGIN_USER_FAILED' = 'LOGIN_USER_FAILED'

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS'
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED'

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED'

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST'

export const AUTH_CHECKED: 'AUTH_CHECKED' = 'AUTH_CHECKED'

export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER'

export interface IRegisterUserRequestAction {
    readonly type: typeof REGISTER_USER_REQUEST
}

export interface IRegisterUserSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS
    payload: {
        user: {
            name: string
            email: string
        }
    }
}

export interface IRegisterUserFailedAction {
    readonly type: typeof REGISTER_USER_FAILED
}

export interface ILoginUserRequestAction {
    readonly type: typeof LOGIN_USER_REQUEST
}

export interface ILoginUserSuccessAction {
    readonly type: typeof LOGIN_USER_SUCCESS
    payload: {
        user: {
            name: string
            email: string
        }
    }
}

export interface ILoginUserFailedAction {
    readonly type: typeof LOGIN_USER_FAILED
}

export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS
    payload: {
        user: {
            name: string
            email: string
        }
    }
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED
}

export interface IUpdateUserRequestAction {
    readonly type: typeof UPDATE_USER_REQUEST
}

export interface IUpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS
    payload: {
        user: {
            name: string
            email: string
        }
    }
}

export interface IForgotPasswordRequestSentAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST
}

export interface IUpdateUserFailedAction {
    readonly type: typeof UPDATE_USER_FAILED
}

export interface IAuthCheckedAction {
    readonly type: typeof AUTH_CHECKED
}

export interface ILogoutUserAction {
    readonly type: typeof LOGOUT_USER
}

export type TAuthActions = 
    | IRegisterUserRequestAction
    | IRegisterUserSuccessAction
    | IRegisterUserFailedAction
    | ILoginUserRequestAction
    | ILoginUserSuccessAction
    | ILoginUserFailedAction
    | IGetUserRequestAction
    | IGetUserSuccessAction
    | IGetUserFailedAction
    | IUpdateUserRequestAction
    | IUpdateUserSuccessAction
    | IUpdateUserFailedAction
    | IForgotPasswordRequestSentAction
    | IAuthCheckedAction
    | ILogoutUserAction

export const checkUserAuth = (): AppThunk => (dispatch: AppDispatch) => {
    if (getCookie('accessToken')) {
        dispatch(getUserInfo())
    } else {
        dispatch({ type: AUTH_CHECKED })
    }
}

export const registerUser = (email: string, password: string, name: string): AppThunk => (dispatch: AppDispatch)  => {
    dispatch({ type: REGISTER_USER_REQUEST })
    const url = `${BASE_URL}/auth/register`
    const body = {
        email: email,
        password: password, 
        name: name
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    request(url, requestOptions)
        .then(data => {
            let accessToken
            accessToken = data.accessToken.split('Bearer ')[1]
            setCookie('accessToken', accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })
        })
        .catch(error => {
            dispatch({ type: REGISTER_USER_FAILED }) 
            console.log(error)
        })
}

export const loginUser = (email: string, password: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST })
    const url = `${BASE_URL}/auth/login`
    const body = {
        email: email,
        password: password
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    request(url, requestOptions)
        .then(data => {
            let accessToken
            accessToken = data.accessToken.split('Bearer ')[1]
            setCookie('accessToken', accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })
        })
        .catch(error => {
            dispatch({ type: LOGIN_USER_FAILED }) 
            console.log(error)
        })
}

export const getUserInfo = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    const url = `${BASE_URL}/auth/user`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie('accessToken')
        },
    }
    fetchWithRefresh(url, requestOptions)
        .then(data => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })})
        .finally(() => {
            dispatch({ type: AUTH_CHECKED })
        })
        .catch(error => {
            dispatch({ type: GET_USER_FAILED }) 
            console.log(error)
        })
}

export const updateUserInfo = (name: string, email: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST })
    const url = `${BASE_URL}/auth/user`
    const body = {
        name: name,
        email: email
    }
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify(body)
    }
    fetchWithRefresh(url, requestOptions)
        .then(data => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })})
        .catch(error => {
            dispatch({ type: UPDATE_USER_FAILED }) 
            console.log(error)
        })
}

export const refreshToken = () => {
    const url = `${BASE_URL}/auth/token`
    const body = {
        token: localStorage.getItem("refreshToken")
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    }
    return request(url, requestOptions)
}

export const logoutUser = (): AppThunk => (dispatch: AppDispatch) => {
    const url = `${BASE_URL}/auth/logout`
    const body = { token: localStorage.getItem('refreshToken') }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    request(url, requestOptions)
        .then(() => {
            deleteCookie('accessToken')
            localStorage.removeItem('refreshToken')
            dispatch({ type: LOGOUT_USER })
        })
        .catch(error => console.log(error))
}
