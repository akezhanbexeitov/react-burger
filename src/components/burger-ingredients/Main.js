import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import propTypes from 'prop-types'

const Main = (props) => {
    const { main } = props
    return (
        <>
            <li className={burgerIngredientsStyles.listItem}>
                <Counter count={1} size="default" />
                <div className='ml-4 mr-4'>
                    <img src={main.image} alt='bun'/>
                </div>
                <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default pr-2">{main.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={burgerIngredientsStyles.description}>{main.name}</p>
            </li>
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

Main.propTypes = dataStructure;

export default Main;