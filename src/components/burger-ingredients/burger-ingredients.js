import { useContext } from 'react'
import IngredientContext from '../../contexts/ingredient-context'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './ingredient-categories'
import IngredientList from './ingredient-list'

const BurgerIngredients = () => {
    const { data } = useContext(IngredientContext)
    const buns = data.filter(item => item.type === 'bun' ? item : null)
    const sauces = data.filter(item => item.type === 'sauce' ? item : null)
    const mains = data.filter(item => item.type === 'main' ? item : null)

    return (
        <div className={burgerIngredientsStyles.container}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <IngredientsCategories />
            <div className={burgerIngredientsStyles.ingredients}>
                <IngredientList ingredientType={buns} title='Булки'/>
                <IngredientList ingredientType={sauces} title='Соусы'/>
                <IngredientList ingredientType={mains} title='Начинки'/>
            </div>
        </div>
    )
}

export default BurgerIngredients;
