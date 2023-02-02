import { TIngredientLong, TBun } from './../../utils/types';
import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT_TO_CONSTRUCTOR: 'ADD_INGREDIENT_TO_CONSTRUCTOR' = 'ADD_INGREDIENT_TO_CONSTRUCTOR'
export const RESET_INGREDIENTS_FROM_CONSTRUCTOR: 'RESET_INGREDIENTS_FROM_CONSTRUCTOR' = 'RESET_INGREDIENTS_FROM_CONSTRUCTOR'

export const DELETE_INGREDIENT_FROM_CONSTRUCTOR: 'DELETE_INGREDIENT_FROM_CONSTRUCTOR' = 'DELETE_INGREDIENT_FROM_CONSTRUCTOR'
export const MOVE_INGREDIENT_IN_CONSTRUCTOR: 'MOVE_INGREDIENT_IN_CONSTRUCTOR' = 'MOVE_INGREDIENT_IN_CONSTRUCTOR'

export interface IAddIngredientToConstructorAction {
    readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
    payload: TBun
}

export interface IResetIngredientsFromConstructorAction {
    readonly type: typeof RESET_INGREDIENTS_FROM_CONSTRUCTOR
}

export interface IDeleteIngredientFromConstructorAction {
    readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR
    payload: {
        key: string
    }
}

export interface IMoveIngredientInConstructorAction {
    readonly type: typeof MOVE_INGREDIENT_IN_CONSTRUCTOR
    payload: { 
        fromIndex: number
        toIndex: number
    }
}

export interface IAddIngredientToConstructor {
    readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
    payload: TBun
}

export type TBurgerConstructorActions = 
    | IAddIngredientToConstructorAction
    | IResetIngredientsFromConstructorAction
    | IDeleteIngredientFromConstructorAction
    | IMoveIngredientInConstructorAction
    | IAddIngredientToConstructor

export const addIngredientToConstructor = (ingredient: TIngredientLong): IAddIngredientToConstructor => {
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
