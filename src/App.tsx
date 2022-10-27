import React from 'react';
import './App.css';
import data from './utils/data'
import AppHeader from './components/appHeader/AppHeader';
import BurgerIngredients from './components/burgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/burgerConstructor/BurgerConstructor';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <main className="text text_type_main-default">
        <div className='container'>
          <section className='mr-10'>
            <BurgerIngredients data={data}/>
          </section>
          <section>
              <BurgerConstructor data={data}/>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
