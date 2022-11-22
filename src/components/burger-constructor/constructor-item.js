import burgerConstructorStyles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DELETE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/burger-constructor'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import propTypes from 'prop-types'

const ConstructorItem = (props) => {
    const { id, ingredient, moveIngredient, findIngredient } = props
    const dispatch = useDispatch()
    const originalIndex = findIngredient(ingredient.key).index 
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ingredientConstructorType',
        item: { id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item 
            const didDrop = monitor.didDrop()
            if (!didDrop) {
                moveIngredient(droppedId, originalIndex)
            }
        },
    }))

    const [, drop] = useDrop(() => ({
        accept: 'ingredientConstructorType',
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findIngredient(id)
                moveIngredient(draggedId, overIndex)
            }
            },
    }))

    const opacity = isDragging ? 0 : 1

    return (
        <li ref={(node) => drag(drop(node))} style={{ opacity }} className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => dispatch({
                    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
                    payload: {
                        key: ingredient.key
                    }
            })}
            />
        </li>
    )
}

const ingredientType = propTypes.shape({
    id: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    key: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired
})

ConstructorItem.propTypes = {
    findIngredient: propTypes.func.isRequired,
    id: propTypes.string.isRequired,
    ingredient: ingredientType.isRequired,
    moveIngredient: propTypes.func.isRequired,
}

export default ConstructorItem
