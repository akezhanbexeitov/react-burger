import * as ingredientsConstructor from "../actions/burger-constructor";
import burgerConstructorReducer from "./burger-constructor"

const initialState = {
    bun: {},
    ingredients: []
};

const testIngredient1 = {
    name: 'Bun test name',
    type: 'bun',
    image: 'Test image 1',
    price: 1234,
    id: '12211221'
}

const testIngredient2 = {
    name: 'Main test name',
    type: 'main',
    image: 'Test image 2',
    price: 2345,
    id: '23322332',
    key: 'kdwao123o1i2j'
}

const testIngredient3 = {
    name: 'Sauce test name',
    type: 'sauce',
    image: 'Test image 3',
    price: 3456,
    id: '34433443',
    key: 'dnjkalwn12dnaklj87'
}

const testIngredient4 = {
    name: 'Main test name',
    type: 'main',
    image: 'Test image 4',
    price: 4567,
    id: '45544554',
    key: 'jndalw190bjk23'
}

describe('Burger constructor reducer', () => {
    it('should return initial state', () => {
        expect(burgerConstructorReducer(undefined, {}))
            .toEqual(initialState)
    })

    it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR action and add bun correctly', () => {
        expect(burgerConstructorReducer(initialState, {
            type: ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: testIngredient1
        })).toEqual({
            ...initialState,
            bun: {
                name: 'Bun test name',
                image: 'Test image 1',
                price: 1234,
                id: '12211221',
                count: 2
            }
        })
    })

    it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR action and add main correctly', () => {
        expect(burgerConstructorReducer(initialState, {
            type: ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: testIngredient2
        })).toEqual({
            ...initialState,
            ingredients: [
                {
                    name: 'Main test name',
                    image: 'Test image 2',
                    price: 2345,
                    id: '23322332',
                    key: 'kdwao123o1i2j'
                }
            ]
        })
    })

    it('should handle ADD_INGREDIENT_TO_CONSTRUCTOR action and add sauce correctly', () => {
        expect(burgerConstructorReducer(initialState, {
            type: ingredientsConstructor.ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: testIngredient3
        })).toEqual({
            ...initialState,
            ingredients: [
                {
                    name: 'Sauce test name',
                    image: 'Test image 3',
                    price: 3456,
                    id: '34433443',
                    key: 'dnjkalwn12dnaklj87'
                }
            ]
        })
    })

    it('should handle RESET_INGREDIENTS_FROM_CONSTRUCTOR action', () => {
        expect(burgerConstructorReducer({
            bun: {
                name: 'Bun test name',
                image: 'Test image 1',
                price: 1234,
                id: '12211221',
                count: 2
            },
            ingredients: [
                {
                    name: 'Sauce test name',
                    image: 'Test image 3',
                    price: 3456,
                    id: '34433443',
                    key: 'dnjkalwn12dnaklj87'
                }
            ]
        }, { type: ingredientsConstructor.RESET_INGREDIENTS_FROM_CONSTRUCTOR }))
            .toEqual({
                bun: {},
                ingredients: []
            })
    })

    it('should handle DELETE_INGREDIENT_FROM_CONSTRUCTOR action', () => {
        expect(burgerConstructorReducer({
            ...initialState,
            ingredients: [
                {
                    name: 'Main test name',
                    image: 'Test image 2',
                    price: 2345,
                    id: '23322332',
                    key: 'kdwao123o1i2j'
                },
                {
                    name: 'Sauce test name',
                    image: 'Test image 3',
                    price: 3456,
                    id: '34433443',
                    key: 'dnjkalwn12dnaklj87'
                }
            ]
        }, {
            type: ingredientsConstructor.DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: {
                key: 'dnjkalwn12dnaklj87'
            }
        })).toEqual({
            ...initialState,
            ingredients: [
                {
                    name: 'Main test name',
                    image: 'Test image 2',
                    price: 2345,
                    id: '23322332',
                    key: 'kdwao123o1i2j'
                }
            ]
        })
    })

    it ('should handle MOVE_INGREDIENT_IN_CONSTRUCTOR action', () => {
        expect(burgerConstructorReducer({
            ingredients: [
                {
                    name: 'Main test name',
                    image: 'Test image 2',
                    price: 2345,
                    id: '23322332',
                    key: 'kdwao123o1i2j'
                },
                {
                    name: 'Sauce test name',
                    image: 'Test image 3',
                    price: 3456,
                    id: '34433443',
                    key: 'dnjkalwn12dnaklj87'
                },
                {
                    name: 'Main test name',
                    image: 'Test image 4',
                    price: 4567,
                    id: '45544554',
                    key: 'jndalw190bjk23'
                }
            ]
        }, {
            type: ingredientsConstructor.MOVE_INGREDIENT_IN_CONSTRUCTOR,
            payload: {
                fromIndex: 1,
                toIndex: 0
            }
        })).toEqual({
            ingredients: [
                {
                    name: 'Sauce test name',
                    image: 'Test image 3',
                    price: 3456,
                    id: '34433443',
                    key: 'dnjkalwn12dnaklj87'
                },
                {
                    name: 'Main test name',
                    image: 'Test image 2',
                    price: 2345,
                    id: '23322332',
                    key: 'kdwao123o1i2j'
                },
                {
                    name: 'Main test name',
                    image: 'Test image 4',
                    price: 4567,
                    id: '45544554',
                    key: 'jndalw190bjk23'
                }
            ]
        })
    })
})
