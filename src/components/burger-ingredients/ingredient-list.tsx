import burgerIngredientsStyles from './burger-ingredients.module.css'
import { ingredientType, TIngredient } from '../../utils/types'
import propTypes from 'prop-types'
import { forwardRef } from 'react'
import Ingredient from './ingredient'
import { useLocation, Link } from 'react-router-dom'

type TIngredientListProps = {
    ingredientType: TIngredient[]
    title: string
}

const IngredientList = forwardRef<HTMLHeadingElement, TIngredientListProps>((props, ref) => {
    const { ingredientType, title } = props
    const location = useLocation();
    
    return (
        <>
            <h2 ref={ref} className='mt-10 mb-6'>{title}</h2>
            <ul className={burgerIngredientsStyles.list}>
                {ingredientType.map(item => {
                    const ingredientId = item['_id']
                    return (
                        <Link
                            key={ingredientId}
                            to={{
                                pathname: `/ingredients/${ingredientId}`,
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
    // @ts-ignore
    ingredientType: propTypes.arrayOf(ingredientType).isRequired,
    title: propTypes.string.isRequired
}

export default IngredientList;
