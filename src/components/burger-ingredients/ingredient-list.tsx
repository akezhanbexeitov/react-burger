import burgerIngredientsStyles from './burger-ingredients.module.css'
import { forwardRef } from 'react'
import Ingredient from './ingredient'
import { useLocation, Link } from 'react-router-dom'
import { TIngredient } from '../../utils/types'

type TIngredientListProps = {
    ingredientType: Array<TIngredient>
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

export default IngredientList;
