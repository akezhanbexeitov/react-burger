import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null)

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
      <main className="text text_type_main-default">
        <div className={appStyles.container}>
          <section className='mr-5'>
            {data && <BurgerIngredients data={data}/>}
          </section>
          <section className='ml-5'>
            {data && <BurgerConstructor data={data}/>}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
