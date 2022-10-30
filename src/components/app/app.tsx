import React from 'react';
import appStyles from './app.module.css';
import data from '../../utils/data'
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <main className="text text_type_main-default">
        <div className={appStyles.container}>
          <section className='mr-5'>
            <BurgerIngredients data={data}/>
          </section>
          <section className='ml-5'>
              <BurgerConstructor data={data}/>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
