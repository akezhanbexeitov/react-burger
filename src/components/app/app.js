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
import { Switch, Route } from 'react-router-dom'
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import Feed from '../../pages/feed/feed';
import NotFound from '../../pages/404-not-found/not-found';
import ProtectedRoute from '../protected-route/protected-route';

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
          <Switch>
            <Route exact path='/'>
              <DndProvider backend={HTML5Backend}>  
                {data && <BurgerIngredients />}
                {data && <BurgerConstructor />}
              </DndProvider>
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/forgot-password'>
              <ForgotPassword />
            </Route>
            <Route exact path='/reset-password'>
              <ResetPassword />
            </Route>
            <ProtectedRoute exact path='/profile'>
              <Profile />
            </ProtectedRoute>
            <Route exact path='/feed'>
              <Feed />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
