import { wsReducer } from './web-socket';
import { combineReducers } from 'redux'
import ingredientsReducer from './ingredients-list';
import burgerConstructorReducer from './burger-constructor';
import orderDetailsReducer from './order-details';
import authReducer from './auth';

const rootReducer = combineReducers({
  ingredientsList: ingredientsReducer,
  ingredientsConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  auth: authReducer,
  feed: wsReducer
})

export default rootReducer
