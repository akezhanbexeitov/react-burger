import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import { useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { addIngredientToConstructor, MOVE_INGREDIENT_IN_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'
import ConstructorItem from './constructor-item'
import { useCallback } from 'react'

const IngredientConstructor = () => {
  const bun = useSelector(store => store.ingredientsConstructor.bun)
  const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
  const dispatch = useDispatch()
  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch(addIngredientToConstructor(ingredient))
    }
  })

  const findIngredient = useCallback(key => {
    const ingredient = ingredients.filter(item => item.key === key)[0]
    return { 
      index: ingredients.indexOf(ingredient)
    }
  }, [ingredients])

  const moveIngredient = useCallback((key, atIndex) => {
    const { index } = findIngredient(key)
    dispatch({
      type: MOVE_INGREDIENT_IN_CONSTRUCTOR,
      payload: {
        fromIndex: atIndex,
        toIndex: index
      }
    })
  }, [findIngredient, dispatch])

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
        : <li className={burgerConstructorStyles.emptyTop}>
            <p>Выберите булку</p>
          </li>
      }
      <div className={burgerConstructorStyles.ingredients}>
        {ingredients.length > 0
          ? ingredients.map(item => {
              return (
                <ConstructorItem ingredient={item} key={item.key} id={item.key} moveIngredient={moveIngredient} findIngredient={findIngredient}/>
              )})
          : <li className={burgerConstructorStyles.empty}>
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
        : <li className={burgerConstructorStyles.emptyBottom}>
            <p>Выберите булку</p>
          </li>
      }
    </ul>
  )
}

export default IngredientConstructor;
