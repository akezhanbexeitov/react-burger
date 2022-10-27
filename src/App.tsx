import React from 'react';
import './App.css';
import data from './utils/data'
import AppHeader from './components/appHeader/AppHeader';
import BurgerIngredients from './components/burgerIngredients/BurgerIngredients';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <BurgerIngredients data={data}/>
    </React.Fragment>
  );
}

export default App;
