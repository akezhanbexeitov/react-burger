import burgerConstructorStyles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DELETE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/burger-constructor'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import propTypes from 'prop-types'
import { DND_TYPES } from '../../constants/constants'
import { useRef } from 'react'

const ConstructorItem = (props) => {
    const { id, ingredient, moveIngredient, index } = props
    const dispatch = useDispatch()
    const ref = useRef()

    const [{ isDragging }, drag] = useDrag({
        type: DND_TYPES.burgerConstructor,
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    const [{ handlerId }, drop] = useDrop({
        accept: DND_TYPES.burgerConstructor,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveIngredient(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <li ref={ref} style={{ opacity }} className={burgerConstructorStyles.item} data-handler-id={handlerId}>
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
    index: propTypes.number.isRequired,
    ingredient: ingredientType.isRequired,
    moveIngredient: propTypes.func.isRequired,
}

export default ConstructorItem
