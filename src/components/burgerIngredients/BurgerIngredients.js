// import propTypes from 'prop-types'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './IngredientCategories'
import Buns from './Buns'
import Sauces from './Sauces'
import Mains from './Mains'

const BurgerIngredients = (props) => {
    const {data} = props
    console.log(data)

    return (
        <div className={burgerIngredientsStyles.container}>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <IngredientsCategories />
            <Buns data={data}/>
            <Sauces data={data}/>
            <Mains data={data}/>
        </div>
    )
}

// const dataStructure = propTypes.shape({
//     "_id": propTypes.string,
//     "name": propTypes.string,
//     "type": propTypes.string,
//     "proteins": propTypes.number,
//     "fat": propTypes.number,
//     "carbohydrates": propTypes.number,
//     "calories": propTypes.number,
//     "price": propTypes.number,
//     "image": propTypes.string,
//     "image_mobile": propTypes.string,
//     "image_large": propTypes.string,
//     "__v": propTypes.number
// })
// BurgerIngredients.propTypes = propTypes.arrayOf(dataStructure)

export default BurgerIngredients