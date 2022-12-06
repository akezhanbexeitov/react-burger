import { BASE_URL_AUTH } from "../../constants/constants"

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const register = (email, password, name) => dispatch => {
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
        .then(actualData => {
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    accessToken: actualData.accessToken,
                    refreshToken: actualData.refreshToken,
                    user: actualData.user
                }
            })
        })
        .catch(error => dispatch({ type: REGISTER_USER_FAILED }) && console.log(error))
}
