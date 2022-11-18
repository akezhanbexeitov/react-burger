import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useState } from 'react';
import 'normalize.css'
import IngredientContext from '../../contexts/ingredient-context';
import * as constants from '../../constants/constants'
import request from '../../utils/server-requests';


function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const url = `${constants.BASE_URL}/ingredients`

    request(url)
      .then(actualData => setData(actualData.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <AppHeader />
        <IngredientContext.Provider value={{data}}>
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
