import { BASE_URL_AUTH } from "../../constants/constants"

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'

export const LOGOUT_USER = 'LOGOUT_USER'

export function setCookie(name, value, props = {}) {
    props = {
        path: '/',
        ...props
    };
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      updatedCookie += '; ' + propName;
      const propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    document.cookie = updatedCookie;
} 

export const registerUser = (email, password, name) => dispatch => {
    dispatch({ type: REGISTER_USER_REQUEST })
    const url = `${BASE_URL_AUTH}/register`
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
    fetch(url, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            dispatch({ type: REGISTER_USER_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
            let accessToken
            accessToken = data.accessToken.split('Bearer ')[1]
            setCookie('token', accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })
        })
        .catch(error => dispatch({ type: REGISTER_USER_FAILED }) && console.log(error))
}

export const loginUser = (email, password) => dispatch => {
    dispatch({ type: LOGIN_USER_REQUEST })
    const url = `${BASE_URL_AUTH}/login`
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
    fetch(url, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            dispatch({ type: LOGIN_USER_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
            let accessToken
            accessToken = data.accessToken.split('Bearer ')[1]
            setCookie('token', accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })
        })
        .catch(error => dispatch({ type: LOGIN_USER_FAILED }) && console.log(error))
}

export const logoutUser = () => dispatch => {
    const url = `${BASE_URL_AUTH}/logout`
    const body = { token: localStorage.getItem('refreshToken') }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    fetch(url, requestOptions)
        .then(res => {
            if (res.ok) {
                dispatch({ type: LOGOUT_USER })
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(error => console.log(error))
}
