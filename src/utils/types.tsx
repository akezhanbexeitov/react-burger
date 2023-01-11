import propTypes from 'prop-types'

export const ingredientType = propTypes.shape({
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    proteins: propTypes.number.isRequired,
    fat: propTypes.number.isRequired,
    carbohydrates: propTypes.number.isRequired,
    calories: propTypes.number.isRequired,
    price: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
    image_mobile: propTypes.string.isRequired,
    image_large: propTypes.string.isRequired,
    __v: propTypes.number.isRequired
})

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

export type TIngredientList = {
    ingredientsList: { ingredients: TIngredient[] }
}

export type TIngredientsConstructorBun = {
    ingredientsConstructor: {
        bun: {
            name: string
            image: string
            price: number
            id: string
            count: number
        }
    }
}

export type TIngredientsConstructorIngredients = {
    ingredientsConstructor: { ingredients: TIngredient[] }
}
