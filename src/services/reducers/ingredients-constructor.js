import * as ingredientsConstructor from "../actions/ingredients-constructor";

const initialState = {
    bun: {},
    ingredients: []
  };

export const ingredientsConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR:
        if (action.payload.type === 'bun') {
          return {
            ...state,
            bun: {
              name: action.payload.name,
              image: action.payload.image,
              price: action.payload.price
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
                key: action.payload.key
              }
            ]
          }
        }
      case ingredientsConstructor.RESET_INGREDIENTS_FROM_CONSTRUCTOR:
        return {
          bun: {},
          ingredients: []
        }
      default:
        return state;
    }
  }
  