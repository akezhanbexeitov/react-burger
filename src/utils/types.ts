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

export type TIngredientWithKey = TIngredient & { key: string }

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

export type TAuthUser = {
    auth: { user: TUser }
}
