import { BASE_URL } from "../../constants/constants"
import { request } from "../../utils/server-requests"
import { RESET_INGREDIENTS_FROM_CONSTRUCTOR } from "./burger-constructor"

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
    request(url, requestOptions)
        .then(actualData => {
            dispatch({
                type: POST_ORDER_SUCCESS,
                payload: {
                    orderNumber: actualData.order.number
                }
            })
        })
        .then(() => dispatch({ type: RESET_INGREDIENTS_FROM_CONSTRUCTOR }))
        .catch(error => {
            dispatch({ type: POST_ORDER_FAILED })
            console.log(error)
        })
}
