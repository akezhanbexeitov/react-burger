import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR'
export const RESET_INGREDIENTS_FROM_CONSTRUCTOR = 'RESET_INGREDIENTS_FROM_CONSTRUCTOR'

export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = 'DELETE_INGREDIENT_FROM_CONSTRUCTOR'

export const addIngredientToConstructor = (ingredient) => {
    return {
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        payload: {
            image: ingredient.image,
            name: ingredient.name,
            price: ingredient.price,
            type: ingredient.type,
            id: ingredient['_id'],
            key: uuidv4()
        }
    }
}
