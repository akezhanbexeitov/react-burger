import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useReducer, useState } from 'react';
import 'normalize.css'
import IngredientContext from '../../contexts/ingredient-context';
import * as constants from '../../constants/constants'
import request from '../../utils/server-requests';

const ingredientConstructorInitialState = {
  bun: {},
  ingredients: []
};

function ingredientConstructorReducer(state, action) {
  switch (action.type) {
    case 'add':
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
    case 'reset':
      return {
        bun: {},
        ingredients: []
      }
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [data, setData] = useState(null)
  const [ingredientConstructorState, ingredientConstructorDispatch] = useReducer(ingredientConstructorReducer, ingredientConstructorInitialState)

  useEffect(() => {
    const url = `${constants.BASE_URL}/ingredients`

    request(url)
      .then(actualData => setData(actualData.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <AppHeader />
      <IngredientContext.Provider value={{data, ingredientConstructorDispatch, ingredientConstructorState}}>
        <main className="text text_type_main-default">
          <div className={appStyles.container}>
            {data && <BurgerIngredients />}
            {data && <BurgerConstructor />}
          </div>
        </main>
      </IngredientContext.Provider>
    </>
  );
}

export default App;
