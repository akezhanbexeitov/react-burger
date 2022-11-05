import propTypes from 'prop-types'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './ingredient-categories'
import IngredientList from './ingredient-list'
import ingredientType from '../../utils/types'

const BurgerIngredients = (props) => {
    const {data} = props
    const buns = data.filter(item => item.type === 'bun' ? item : null)
    const sauces = data.filter(item => item.type === 'sauce' ? item : null)
    const mains = data.filter(item => item.type === 'main' ? item : null)

    return (
        <div className={burgerIngredientsStyles.container}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <IngredientsCategories />
            <div className={burgerIngredientsStyles.ingredients}>
                <IngredientList data={buns} title='Булки'/>
                <IngredientList data={sauces} title='Соусы'/>
                <IngredientList data={mains} title='Начинки'/>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: propTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients;
