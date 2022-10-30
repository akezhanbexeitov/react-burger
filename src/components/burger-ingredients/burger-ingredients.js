import propTypes from 'prop-types'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './ingredient-categories'
import Buns from './buns'
import Sauces from './sauces'
import Mains from './mains'

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

const dataStructure = propTypes.shape({
    _id: propTypes.string,
    name: propTypes.string,
    types: propTypes.string,
    proteins: propTypes.number,
    fat: propTypes.number,
    carbohydrates: propTypes.number,
    calories: propTypes.number,
    price: propTypes.number,
    image: propTypes.string,
    image_mobile: propTypes.string,
    image_large: propTypes.string,
    __v: propTypes.number
})

BurgerIngredients.propTypes = {
    data: propTypes.arrayOf(dataStructure)
}

export default BurgerIngredients;