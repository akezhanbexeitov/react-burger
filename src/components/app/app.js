import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect } from 'react';
import 'normalize.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIngredients } from '../../services/actions/ingredients-list';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(store => store.ingredientsList.ingredients)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <main className="text text_type_main-default">
        <div className={appStyles.container}>
          <DndProvider backend={HTML5Backend}>        
            {data && <BurgerIngredients />}
            {data && <BurgerConstructor />}
          </DndProvider>
        </div>
      </main>
    </>
  );
}

export default App;
