import { AppThunk, AppDispatch } from './../../utils/types';
import { BASE_URL } from "../../constants/constants";
import { request } from "../../utils/server-requests";
import { TIngredient } from "../../utils/types";

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

export const getIngredients = (): AppThunk => (dispatch: AppDispatch)=> {
    dispatch({ type: GET_INGREDIENTS_REQUEST })
    const url = `${BASE_URL}/ingredients`
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    request(url, requestOptions)
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
