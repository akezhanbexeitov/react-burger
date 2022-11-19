import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients-list';
import ingredientsConstructorReducer from './ingredients-constructor';
import ingredientDetailsReducer from './ingredient-details';
import orderDetailsReducer from './order-details';

const rootReducer = combineReducers({
  ingredientsList: ingredientsReducer,
  ingredientsConstructor: ingredientsConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
})

export default rootReducer