import * as ingredientsConstructor from "../actions/ingredients-constructor";

const initialState = {
    bun: {},
    ingredients: []
  };

const ingredientsConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR:
        if (action.payload.type === 'bun') {
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
          bun: {},
          ingredients: []
        }
      case ingredientsConstructor.DELETE_INGREDIENT_FROM_CONSTRUCTOR: 
        return {
          ...state,
          ingredients: state.ingredients.filter(item => item.key !== action.payload.key)
        }
      case ingredientsConstructor.MOVE_INGREDIENT_IN_CONSTRUCTOR:
        const ingredients = [...state.ingredients];
        return {
          ...state,
          ingredients: ingredients.splice(action.payload.toIndex, 0, ingredients.splice(action.payload.fromIndex, 1)[0])
        }
      default:
        return state;
    }
  }
  
export default ingredientsConstructorReducer