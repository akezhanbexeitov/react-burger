import burgerConstructorStyles from './burger-constructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DELETE_INGREDIENT_FROM_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'

const ConstructorItem = ({ id, ingredient, moveIngredient, findIngredient }) => {
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

export default ConstructorItem







// export const Card = memo(function Card({ id, text, moveCard, findCard }) {
//   const originalIndex = findCard(id).index
  
//   return (
//     <div >
//       {text}
//     </div>
//   )
// })
