import { TIngredientsListActions } from './../actions/ingredients-list';
import * as ingredients from '../actions/ingredients-list'
import { TIngredient } from '../../utils/types';

type TIngredientsListState = {
    ingredients: Array<TIngredient>
    ingredientsRequest: boolean
    ingredientsFailed: boolean
}

export const initialState: TIngredientsListState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

const ingredientsReducer = (state = initialState, action: TIngredientsListActions): TIngredientsListState => {
    switch (action.type) {
        case ingredients.GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            }
        }
        case ingredients.GET_INGREDIENTS_SUCCESS: {
            return {
                ingredientsRequest: false,
                ingredientsFailed: false,
                ingredients: action.payload.ingredients
            }
        }
        case ingredients.GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsFailed: true,
                ingredientsRequest: false
            }
        }
        default: {
            return state
        }
    }
}

export default ingredientsReducer
