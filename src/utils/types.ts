import { TOrderDetailsActions } from './../services/actions/order-details';
import { TIngredientsListActions } from './../services/actions/ingredients-list';
import { TBurgerConstructorActions } from './../services/actions/burger-constructor';
import { TAuthActions } from './../services/actions/auth';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux"
import rootReducer from "../services/reducers"
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type TIngredient = {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
}

export type TBun = {
    image: string
    name: string
    price: number
    type: string
    id: string
    key: string
}

export type TUser = {
    email: string
    name: string
}

// Application actions
type TAppActions = 
    | TAuthActions
    | TBurgerConstructorActions
    | TIngredientsListActions
    | TOrderDetailsActions

// Typescript for store
export type RootState = ReturnType<typeof rootReducer>

// Typescript for useDispatch()
export type AppDispatch = ThunkDispatch<RootState, never, TAppActions>
export const useDispatch = () => dispatchHook<AppDispatch>()

// Typescript for useSelector()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

// Typescript for Redux Thunk
export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, never, TAppActions>
