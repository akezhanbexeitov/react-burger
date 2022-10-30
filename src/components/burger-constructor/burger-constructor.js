import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import propTypes from 'prop-types'

const BurgerConstructor = (props) => {
    const { data } = props

    return (
        <>
            <div className={`${burgerConstructorStyles.container} pt-25 pb-10`}>
                <IngredientConstructor data={data}/>
            </div>
            <div className={`${burgerConstructorStyles.price} pl-4 pr-4`}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary" />
                <Button className='button button_type_primary button_size_medium ml-10' type="primary" size="medium" htmlType='submit'>
                    Оформить заказ
                </Button>
            </div>
        </>
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

BurgerConstructor.propTypes = {
    data: propTypes.arrayOf(dataStructure)
}

export default BurgerConstructor;