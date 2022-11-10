import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useReducer, useState } from 'react';
import 'normalize.css'
import IngredientContext from '../contexts/ingredient-context';

const initialState: any = [];

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return [
      ...state,
      {
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
      }]
    default: 
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [data, setData] = useState(null)
  const [ingredientState, ingredientDispatch] = useReducer(reducer, initialState)

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
      <IngredientContext.Provider value={{data, ingredientDispatch, ingredientState}}>
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
