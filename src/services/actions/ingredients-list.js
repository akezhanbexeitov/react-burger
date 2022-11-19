import { BASE_URL } from "../../constants/constants";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => dispatch => {
    dispatch({ type: GET_INGREDIENTS_REQUEST })
    const url = `${BASE_URL}/ingredients`
    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            dispatch({ type: GET_INGREDIENTS_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(actualData => {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                payload: {
                    ingredients: actualData.data
                }
            })
        })
}
