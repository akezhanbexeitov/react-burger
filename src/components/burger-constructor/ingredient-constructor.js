import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import { useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { ADD_INGREDIENT_TO_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'

const IngredientConstructor = () => {
  const bun = useSelector(store => store.ingredientsConstructor.bun)
  const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
  const dispatch = useDispatch()
  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch({
        type: ADD_INGREDIENT_TO_CONSTRUCTOR,
        payload: {
          image: ingredient.image,
          name: ingredient.name,
          price: ingredient.price,
          type: ingredient.type,
          id: ingredient['_id'],
          key: uuidv4()
        }})
    }
  })
  

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
                <li className={burgerConstructorStyles.item} key={item.key}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
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
