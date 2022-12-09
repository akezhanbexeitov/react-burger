import { BASE_URL_AUTH } from "../../constants/constants"

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED'

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

export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
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
            setCookie('accessToken', accessToken)
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
            setCookie('accessToken', accessToken)
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

export const getUserInfo = () => dispatch => {
    dispatch({ type: GET_USER_REQUEST })
    const url = `${BASE_URL_AUTH}/user`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie('accessToken')
        },
    }
    fetch(url, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })})
        .catch(error => dispatch({ type: GET_USER_FAILED }) && console.log(error))
}

export const updateUserInfo = (name, email) => dispatch => {
    dispatch({ type: UPDATE_USER_REQUEST })
    const url = `${BASE_URL_AUTH}/user`
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
    fetch(url, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {
                    user: data.user
                }
            })})
        .catch(error => dispatch({ type: UPDATE_USER_FAILED }) && console.log(error))
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
                deleteCookie('accessToken')
                localStorage.removeItem('refreshToken')
                dispatch({ type: LOGOUT_USER })
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(error => console.log(error))
}
