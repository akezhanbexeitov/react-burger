import burgerConstructorStyles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DELETE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/burger-constructor'
import { useDrag, useDrop } from 'react-dnd'
import { DND_TYPES } from '../../constants/constants'
import { useRef, FC } from 'react'
import { TIngredientWithKey, useDispatch } from '../../utils/types'

type ConstructorItemProps = {
    ingredient: TIngredientWithKey
    moveIngredient: (dragIndex: number, hoverIndex: number) => void
    index: number
}

const ConstructorItem: FC<ConstructorItemProps> = (props) => {
    const { ingredient, moveIngredient, index } = props
    const dispatch = useDispatch()
    const ref = useRef<HTMLLIElement>(null)

    const [{ isDragging }, drag] = useDrag({
        type: DND_TYPES.burgerConstructor,
        item: () => {
            return { index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    // @ts-ignore
    const [{ handlerId }, drop] = useDrop<{id: number, index: number}>({
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
            // Determine mouse positions
            const clientOffset = monitor.getClientOffset()!
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

export default ConstructorItem
