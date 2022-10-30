import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'

const Main = (props) => {
    const { main } = props
    return (
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
    )
}

Main.propTypes = {
    bun: ingredientType
};

export default Main;