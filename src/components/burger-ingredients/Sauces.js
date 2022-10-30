import burgerIngredientsStyles from './burger-ingredients.module.css'
import Sauce from './sauce'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'

const Sauces = (props) => {
    const { data } = props
    return (
        <>
            <h2 className='mt-10 mb-6'>Соусы</h2>
            <ul className={`${burgerIngredientsStyles.list} pl-4 pr-4`}>
                {data.filter(item => {
                    if (item.type === 'sauce') {
                        return item
                    } else {
                        return null
                    }
                }).map(item => <Sauce key={item['_id']} sauce={item}/>)}
            </ul>
        </>
    )
}

Sauces.propTypes = {
    data: propTypes.arrayOf(ingredientType)
}

export default Sauces;
    