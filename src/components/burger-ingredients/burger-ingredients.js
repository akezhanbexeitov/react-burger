import propTypes from 'prop-types'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './ingredient-categories'
import Buns from './buns'
import Sauces from './sauces'
import Mains from './mains'
import ingredientType from '../../utils/types'

const BurgerIngredients = (props) => {
    const {data} = props

    return (
        <div className={burgerIngredientsStyles.container}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <IngredientsCategories />
            <div className={burgerIngredientsStyles.ingredients}>
                <Buns data={data}/>
                <Sauces data={data}/>
                <Mains data={data}/>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: propTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients;