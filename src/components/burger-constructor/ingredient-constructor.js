import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import { useContext } from 'react'
import IngredientContext from '../../contexts/ingredient-context'

const IngredientConstructor = () => {
  const { ingredientConstructorState } = useContext(IngredientContext)
  const { bun, ingredients } = ingredientConstructorState

  return (
    <ul className={burgerConstructorStyles.list}>
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
