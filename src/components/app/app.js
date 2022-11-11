import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useReducer, useState } from 'react';
import 'normalize.css'
import IngredientContext from '../contexts/ingredient-context';

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
              id: action.payload.id
            }
          ]
        }
      }
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [data, setData] = useState(null)
  const [ingredientConstructorState, ingredientConstructorDispatch] = useReducer(ingredientConstructorReducer, ingredientConstructorInitialState)

  useEffect(() => {
    const url = 'https://norma.nomoreparties.space/api/ingredients'
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
      .then(actualData => setData(actualData.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <AppHeader />
      <IngredientContext.Provider value={{data, ingredientConstructorDispatch, ingredientConstructorState}}>
        <main className="text text_type_main-default">
          <div className={appStyles.container}>
            <section className='mr-5'>
              {data && <BurgerIngredients />}
            </section>
            <section className='ml-5'>
              {data && <BurgerConstructor />}
            </section>
          </div>
        </main>
      </IngredientContext.Provider>
    </>
  );
}

export default App;
