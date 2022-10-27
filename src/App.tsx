import React from 'react';
import './App.css';
import data from './utils/data'
import AppHeader from './components/appHeader/AppHeader';
import BurgerIngredients from './components/burgerIngredients/BurgerIngredients';

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
              Constructor
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
