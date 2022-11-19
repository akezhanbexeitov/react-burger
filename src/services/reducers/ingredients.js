import * as ingredients from '../actions/ingredients'

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ingredients.GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            }
        }
        case ingredients.GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
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