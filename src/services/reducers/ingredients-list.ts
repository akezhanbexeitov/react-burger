import { TIngredientsListActions } from './../actions/ingredients-list';
import { TIngredientLong } from './../../utils/types';
import * as ingredients from '../actions/ingredients-list'

type TIngredientsListState = {
    ingredients: Array<TIngredientLong>
    ingredientsRequest: boolean
    ingredientsFailed: boolean
}

const initialState: TIngredientsListState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

const ingredientsReducer = (state = initialState, action: TIngredientsListActions) => {
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
