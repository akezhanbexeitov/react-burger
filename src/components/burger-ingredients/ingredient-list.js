import burgerIngredientsStyles from './burger-ingredients.module.css'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'
import { forwardRef } from 'react'
import Ingredient from './ingredient'
import { useLocation, Link } from 'react-router-dom'

const IngredientList = forwardRef((props, ref) => {
    const { ingredientType, title } = props
    const location = useLocation();
    
    return (
        <>
            <h2 ref={ref} className='mt-10 mb-6'>{title}</h2>
            <ul className={burgerIngredientsStyles.list}>
                {ingredientType.map(item => {
                    return (
                        <Link
                            key={item['_id']}
                            to={{
                                pathname: `/ingredients/${item['_id']}`,
                                state: { background: location },
                            }}
                            className={burgerIngredientsStyles.link}
                        >
                            <Ingredient ingredient={item} key={item['_id']}/>
                        </Link>
                    )
                })}
            </ul>
        </>
    )
})

IngredientList.propTypes = {
    ingredientType: propTypes.arrayOf(ingredientType).isRequired,
    title: propTypes.string.isRequired
}

export default IngredientList;
