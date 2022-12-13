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
import { useLocation, useHistory } from 'react-router-dom'
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import withOverlay from '../modal-overlay/with-overlay'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(store => store.ingredientsList.ingredients)
  const location = useLocation();
  const history = useHistory();
  const background = location.state && location.state.background;
  const WithOverlayModal = withOverlay(Modal)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleModalClose = () => {
    history.goBack();
  };

  return (
    <>
      <AppHeader />
      <main className="text text_type_main-default">
        <div className={appStyles.container}>
          <Switch location={background || location}>
            <Route exact path='/'>
              <DndProvider backend={HTML5Backend}>  
                {data && <BurgerIngredients />}
                {data && <BurgerConstructor />}
              </DndProvider>
            </Route>
            <Route exact path='/ingredients/:ingredientId'>
              <IngredientDetails />
            </Route>
            <ProtectedRoute onlyUnAuth={true} exact path='/login'>
              <Login />
            </ProtectedRoute>
            <ProtectedRoute onlyUnAuth={true} exact path='/register'>
              <Register />
            </ProtectedRoute>
            <ProtectedRoute onlyUnAuth={true} exact path='/forgot-password'>
              <ForgotPassword />
            </ProtectedRoute>
            <ProtectedRoute onlyUnAuth={true} exact path='/reset-password'>
              <ResetPassword />
            </ProtectedRoute>
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
          {background && (
              <Route path='/ingredients/:ingredientId'>
                <WithOverlayModal header="Детали ингредиента" handleModalClose={handleModalClose}>
                  <IngredientDetails />
                </WithOverlayModal>
              </Route>
            )}
        </div>
      </main>
    </>
  );
}

export default App;
