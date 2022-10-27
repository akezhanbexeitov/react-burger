import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Sauce = (props) => {
    const { sauce } =  props
    return (
        <>
            <li className={burgerIngredientsStyles.listItem}>
                <div className='ml-4 mr-4'>
                    <img src={sauce.image} alt='bun'/>
                </div>
                <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default pr-2">{sauce.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className='pb-6'>{sauce.name}</p>
            </li>
        </>
    )
}

export default Sauce;