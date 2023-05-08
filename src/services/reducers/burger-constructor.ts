import { TBurgerConstructorActions } from './../actions/burger-constructor';
import { INGREDIENT_TYPE } from "../../constants/constants";
import * as ingredientsConstructor from "../actions/burger-constructor";

type TIngredient = {
  name: string
  image: string
  price: number
  id: string
  key: string
}

type TBun = {
  name: string
  image: string
  price: number
  id: string
  count: number
}

type TBurgerConstructorState = {
  bun: TBun
  ingredients: Array<TIngredient>
}

export const initialState: TBurgerConstructorState = {
    bun: {} as TBun,
    ingredients: []
};

const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
    switch (action.type) {
      case ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR:
        if (action.payload.type === INGREDIENT_TYPE) {
          return {
            ...state,
            bun: {
              name: action.payload.name,
              image: action.payload.image,
              price: action.payload.price,
              id: action.payload.id,
              count: 2
            }
          }
        } else {
          return {
            ...state,
            ingredients: [
              ...state.ingredients,
              {
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price,
                id: action.payload.id,
                key: action.payload.key,
              }
            ]
          }
        }
      case ingredientsConstructor.RESET_INGREDIENTS_FROM_CONSTRUCTOR:
        return {
          bun: {} as TBun,
          ingredients: []
        }
      case ingredientsConstructor.DELETE_INGREDIENT_FROM_CONSTRUCTOR: 
        return {
          ...state,
          ingredients: state.ingredients.filter(item => item.key !== action.payload.key)
        }
      case ingredientsConstructor.MOVE_INGREDIENT_IN_CONSTRUCTOR:
        const ingredients = [...state.ingredients];
        ingredients.splice(action.payload.toIndex, 0, ingredients.splice(action.payload.fromIndex, 1)[0])
        return {
          ...state,
          ingredients
        }
      default:
        return state;
    }
  }
  
export default burgerConstructorReducer
