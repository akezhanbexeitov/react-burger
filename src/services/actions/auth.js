import { BASE_URL_AUTH } from "../../constants/constants"

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'

export const setCookie = (name, value, props = {}) => {
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

export const getCookie = (name) => {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
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
                // Set access token in cookies
                let accessToken;
                res.headers.forEach(header => {
                    if (header.indexOf('Bearer') === 0) {
                        accessToken = header.split('Bearer ')[1]
                    }
                })
                if (accessToken) {
                    setCookie('token', accessToken)
                }
                return res.json()
            }
            dispatch({ type: REGISTER_USER_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
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
                // Set access token in cookies
                let accessToken;
                res.headers.forEach(header => {
                    if (header.indexOf('Bearer') === 0) {
                        accessToken = header.split('Bearer ')[1]
                    }
                })
                if (accessToken) {
                    setCookie('token', accessToken)
                }
                return res.json()
            }
            dispatch({ type: LOGIN_USER_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(data => {
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
