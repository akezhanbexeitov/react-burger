import * as ingredients from "../actions/ingredients-list"
import ingredientsReducer from "./ingredients-list"

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

const testIngredient1 = {
    _id: '123',
    name: 'Тестовый ингредиент 1'
}

const testIngredient3 = {
    _id: '456',
    name: 'Тестовый ингредиент 2'
}

const testIngredient2 = {
    _id: '789',
    name: 'Тестовый ингредиент 3'
}

describe('Ingredients list reducer', () => {
    it('should return initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle GET_INGREDIENTS_REQUEST action', () => {
        expect(ingredientsReducer(initialState, { type: ingredients.GET_INGREDIENTS_REQUEST }))
            .toEqual({
                ingredients: [],
                ingredientsRequest: true,
                ingredientsFailed: false
            })
    })

    it('should handle GET_INGREDIENTS_SUCCESS action', () => {
        expect(ingredientsReducer({
            ...initialState,
            ingredientsRequest: true
        }, { 
            type: ingredients.GET_INGREDIENTS_SUCCESS,
            payload: {
                ingredients: [
                    testIngredient1,
                    testIngredient2,
                    testIngredient3
                ]
            }
        })).toEqual({
            ingredients: [
                testIngredient1,
                testIngredient2,
                testIngredient3
            ],
            ingredientsRequest: false,
            ingredientsFailed: false
        })
    })

    it('should handle GET_INGREDIENTS_FAILED action', () => {
        expect(ingredientsReducer({
            ...initialState,
            ingredientsRequest: true
        }, { type: ingredients.GET_INGREDIENTS_FAILED }))
            .toEqual({
                ...initialState,
                ingredientsRequest: false,
                ingredientsFailed: true
            })
    })
})