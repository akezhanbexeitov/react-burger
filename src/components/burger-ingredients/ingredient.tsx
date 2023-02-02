import { useDrag } from 'react-dnd'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import { TIngredientLong, TIngredientsConstructorBun, TIngredientsConstructorIngredients } from '../../utils/types'
import { DND_TYPES } from '../../constants/constants'
import { useMemo, FC } from 'react'

type TIngredientProps = {
    ingredient: TIngredientLong
}

const Ingredient: FC<TIngredientProps> = ({ ingredient }) => {
    const bun = useSelector((store: TIngredientsConstructorBun) => store.ingredientsConstructor.bun)
    const ingredients = useSelector((store: TIngredientsConstructorIngredients) => store.ingredientsConstructor.ingredients)
    const [{ isDragging }, dragRef] = useDrag({
        type: DND_TYPES.ingredient,
        item: ingredient,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const memoizedCountIngredient = useMemo(() => {
        return ingredients.reduce((accumulator, currenValue) => currenValue.name === ingredient.name ? accumulator += 1 : accumulator += 0, 0)
    }, [ingredients, ingredient.name])

    return (
        <li ref={dragRef} style={{opacity: isDragging ? 0.5 : 1}} className={burgerIngredientsStyles.listItem}>
            { ingredient.name === bun.name ? (bun.count > 0 ? <Counter count={bun.count} size="default" /> : null) : (memoizedCountIngredient > 0 ? <Counter count={memoizedCountIngredient} size="default" /> : null)}
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
