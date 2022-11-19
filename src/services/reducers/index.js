import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients-list';
import { ingredientsConstructorReducer } from './ingredients-constructor';

const rootReducer = combineReducers({
  ingredientsList: ingredientsReducer,
  ingredientsConstructor: ingredientsConstructorReducer
})

export default rootReducer
