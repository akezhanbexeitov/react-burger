import { TIngredient } from './../../utils/types';
import { BASE_URL } from "../../constants/constants";
import { request } from "../../utils/server-requests";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    payload: {
        ingredients: Array<TIngredient>
    }
}

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TIngredientsListActions = 
    | IGetIngredientsRequestAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction

// @ts-ignore
export const getIngredients = () => dispatch => {
    dispatch({ type: GET_INGREDIENTS_REQUEST })
    const url = `${BASE_URL}/ingredients`
    // @ts-ignore
    request(url)
        .then(actualData => {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                payload: {
                    ingredients: actualData.data
                }
            })
        })
        .catch(error => {
            dispatch({ type: GET_INGREDIENTS_FAILED }) 
            console.log(error)
        })
}
