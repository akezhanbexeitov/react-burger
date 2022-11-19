import { ADD_INGREDIENT_DETAILS, RESET_INGREDIENT_DETAILS } from "../actions/ingredient-details"

const initialState = {
    name: '',
    image_large: '',
    calories: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0
}

const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS: {
            return {
                name: action.payload.name,
                image_large: action.payload.image_large,
                calories: action.payload.calories,
                proteins: action.payload.proteins,
                fat: action.payload.fat,
                carbohydrates: action.payload.carbohydrates,
            }
        }
        case RESET_INGREDIENT_DETAILS: {
            return {
                name: '',
                image_large: '',
                calories: 0,
                proteins: 0,
                fat: 0,
                carbohydrates: 0
            }
        }
        default: {
            return state
        }
    }
}

export default ingredientDetailsReducer