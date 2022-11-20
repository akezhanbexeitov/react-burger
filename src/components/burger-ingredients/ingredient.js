import { addIngredientDetails } from '../../services/actions/ingredient-details'
import { useDrag } from 'react-dnd'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import burgerIngredientsStyles from './burger-ingredients.module.css'

const Ingredient = ({ setIsOpen, ingredient }) => {
    const dispatch = useDispatch()
    const bun = useSelector(store => store.ingredientsConstructor.bun)
    const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const countIngredient = () => {
        let count = 0
        ingredients.map(item => ingredient.name === item.name ? count += 1 : null)
        return count
    }

    return (
        <li ref={dragRef} style={{opacity: isDragging ? 0.5 : 1}} className={burgerIngredientsStyles.listItem} onClick={() => {
            setIsOpen(true)
            dispatch(addIngredientDetails(ingredient))
        }}>
            { ingredient.name === bun.name ? (bun.count > 0 ? <Counter count={bun.count} size="default" /> : null) : (countIngredient() > 0 ? <Counter count={countIngredient()} size="default" /> : null)}
            {  }
            <div className='ml-4 mr-4'>
                <img src={ingredient.image} alt={ingredient.name}/>
            </div>
            <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={burgerIngredientsStyles.description}>{ingredient.name}</p>
        </li>
    )
}

export default Ingredient