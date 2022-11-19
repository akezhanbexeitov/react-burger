import { ADD_INGREDIENT_TO_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'
import { ADD_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details'
import { useDrag } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import burgerIngredientsStyles from './burger-ingredients.module.css'

const Ingredient = ({ setIsOpen, ingredient }) => {
    const dispatch = useDispatch()
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <li ref={dragRef} style={{opacity: isDragging ? 0.5 : 1}} className={burgerIngredientsStyles.listItem} onClick={() => {
            setIsOpen(true)
            dispatch({
                type: ADD_INGREDIENT_TO_CONSTRUCTOR,
                payload: {
                    image: ingredient.image,
                    name: ingredient.name,
                    price: ingredient.price,
                    type: ingredient.type,
                    id: ingredient['_id'],
                    key: uuidv4()
                }
            })
            dispatch({
                type: ADD_INGREDIENT_DETAILS,
                payload: {
                    name: ingredient.name,
                    image_large: ingredient.image_large,
                    calories: ingredient.calories,
                    proteins: ingredient.proteins,
                    fat: ingredient.fat,
                    carbohydrates: ingredient.carbohydrates
                }
            })
        }}>
            <Counter count={1} size="default" />
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