import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'

const Sauce = (props) => {
    const { sauce } =  props
    return (
        <>
            <li className={burgerIngredientsStyles.listItem}>
                <Counter count={1} size="default" />
                <div className='ml-4 mr-4'>
                    <img src={sauce.image} alt='bun'/>
                </div>
                <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default pr-2">{sauce.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={burgerIngredientsStyles.description}>{sauce.name}</p>
            </li>
        </>
    )
}

Sauce.propTypes = {
    bun: ingredientType
}

export default Sauce;