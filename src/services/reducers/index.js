import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients-list';
import burgerConstructorReducer from './burger-constructor';
import ingredientDetailsReducer from './ingredient-details';
import orderDetailsReducer from './order-details';

const rootReducer = combineReducers({
  ingredientsList: ingredientsReducer,
  ingredientsConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
})

export default rootReducer
