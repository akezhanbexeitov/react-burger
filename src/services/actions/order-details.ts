import { AppThunk, AppDispatch } from './../../utils/types';
import { BASE_URL } from "../../constants/constants"
import { request } from "../../utils/server-requests"
import { RESET_INGREDIENTS_FROM_CONSTRUCTOR } from "./burger-constructor"

export const POST_ORDER_REQUEST: 'POST_ORDER_REQUEST' = 'POST_ORDER_REQUEST'
export const POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS' = 'POST_ORDER_SUCCESS'
export const POST_ORDER_FAILED: 'POST_ORDER_FAILED' = 'POST_ORDER_FAILED'

export interface IPostOrderRequestAction { 
    readonly type: typeof POST_ORDER_REQUEST
}

export interface IPostOrderSuccessAction { 
    readonly type: typeof POST_ORDER_SUCCESS
    payload: {
        orderNumber: number
    }
}

export interface IPostOrderFailedAction { 
    readonly type: typeof POST_ORDER_FAILED
}

export type TOrderDetailsActions = 
    | IPostOrderRequestAction
    | IPostOrderSuccessAction
    | IPostOrderFailedAction

type TPostOrderBody = {
    ingredients: Array<string>
}

type TIngredientShort = {
    name: string
    image: string
    key: string
    id: string
    price: number
}

export type TBun = {
    image: string
    name: string
    price: number
    id: string
}

export const postOrder = (bun: TBun, ingredients: Array<TIngredientShort>): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: POST_ORDER_REQUEST })
    const url = `${BASE_URL}/orders`
    const body: TPostOrderBody = { ingredients: [] }
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
