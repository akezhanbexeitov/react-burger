import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import { useDrop } from 'react-dnd'
import { addIngredientToConstructor, MOVE_INGREDIENT_IN_CONSTRUCTOR } from '../../services/actions/burger-constructor'
import ConstructorItem from './constructor-item'
import { useCallback, FC } from 'react'
import { DND_TYPES } from '../../constants/constants'
import { useDispatch, useSelector } from '../../utils/types'

type TIngredientShort = {
  name: string
  image: string
  price: number
  _id: string
  key: string
  type: string
}

const IngredientConstructor: FC = () => {
  const bun = useSelector(store => store.ingredientsConstructor.bun)
  const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
  const dispatch = useDispatch()
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: DND_TYPES.ingredient,
    drop: (ingredient: TIngredientShort) => {
      dispatch(addIngredientToConstructor(ingredient))
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  let backgroundColor = ''
  const isActive = canDrop && isOver
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = '#4c4cff'
  }

  const moveIngredient = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: MOVE_INGREDIENT_IN_CONSTRUCTOR,
      payload: {
        fromIndex: dragIndex,
        toIndex: hoverIndex
      }
    })
  }, [dispatch])

  return (
    <ul ref={dropRef} className={burgerConstructorStyles.list}>
      {Object.keys(bun).length > 0 
        ? <li className={burgerConstructorStyles.bun}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        : <li className={burgerConstructorStyles.emptyTop} style={{ backgroundColor }}>
            <p>Выберите булку</p>
          </li>
      }
      <div className={burgerConstructorStyles.ingredients}>
        {ingredients.length > 0
          ? ingredients.map((item, index) => {
              return (
                <ConstructorItem 
                  index={index}
                  ingredient={item} 
                  key={item.key} 
                  moveIngredient={moveIngredient} 
                />
              )})
          : <li className={burgerConstructorStyles.empty} style={{ backgroundColor }}>
              <p>Выберите начинку</p>
            </li>
        }
      </div>
      {Object.keys(bun).length > 0 
        ? <li className={burgerConstructorStyles.bun}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        : <li className={burgerConstructorStyles.emptyBottom} style={{ backgroundColor }}>
            <p>Выберите булку</p>
          </li>
      }
    </ul>
  )
}

export default IngredientConstructor;
