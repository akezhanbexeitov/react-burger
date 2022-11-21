import { BASE_URL } from "../../constants/constants"

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST'
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS'
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED'

export const postOrder = (bun, ingredients) => dispatch => {
    dispatch({ type: POST_ORDER_REQUEST })
    const url = `${BASE_URL}/orders`
    const body = { ingredients: [] }
    body.ingredients.push(bun.id)
    ingredients.map(item => body.ingredients.push(item.id))
    body.ingredients.push(bun.id)
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
            dispatch({ type: POST_ORDER_FAILED })
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .then(actualData => {
            dispatch({
                type: POST_ORDER_SUCCESS,
                payload: {
                    orderNumber: actualData.order.number
                }
            })
        })
        .catch(error => console.log(error.message))
}
