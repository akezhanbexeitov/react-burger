export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS'
export const RESET_INGREDIENT_DETAILS = 'RESET_INGREDIENT_DETAILS'

export const addIngredientDetails = (ingredient) => {
    return {
        type: ADD_INGREDIENT_DETAILS,
        payload: {
            name: ingredient.name,
            image_large: ingredient.image_large,
            calories: ingredient.calories,
            proteins: ingredient.proteins,
            fat: ingredient.fat,
            carbohydrates: ingredient.carbohydrates
        }
    }
}
