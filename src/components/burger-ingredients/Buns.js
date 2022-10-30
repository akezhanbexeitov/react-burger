import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'

const Buns = (props) => {
    const { data, title } = props
    return (
        <>
            <h2 className='mt-10 mb-6'>{title}</h2>
            <ul className={burgerIngredientsStyles.list}>
                {data.filter(item => {
                    if (item.type === 'bun') {
                        return item
                    } else {
                        return null
                    }
                }).map(item => {
                    return (
                        <li className={burgerIngredientsStyles.listItem} key={item['_id']}>
                            <Counter count={1} size="default" />
                            <div className='ml-4 mr-4'>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                                <p className="text text_type_digits-default pr-2">{item.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={burgerIngredientsStyles.description}>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

Buns.propTypes = {
    data: propTypes.arrayOf(ingredientType).isRequired
}

export default Buns;