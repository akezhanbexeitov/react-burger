import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'
import { useContext } from 'react'
import IngredientContext from '../contexts/ingredient-context'

const IngredientConstructor = () => {
  const { ingredientState, bunState } = useContext(IngredientContext)
  console.log(bunState)

  return (
    <ul className={burgerConstructorStyles.list}>
      {Object.keys(bunState).length > 0 
        ? <li className={burgerConstructorStyles.bun}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunState.name} (верх)`}
              price={bunState.price}
              thumbnail={bunState.image}
            />
          </li>
        : <li className={burgerConstructorStyles.emptyTop}>
            <p>Выберите булку</p>
          </li>
      }
      <div className={burgerConstructorStyles.ingredients}>
        {ingredientState.length > 0
          ? ingredientState.map((item, index) => {
              return (
                <li className={burgerConstructorStyles.item} key={index}>
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
      {Object.keys(bunState).length > 0 
        ? <li className={burgerConstructorStyles.bun}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunState.name} (низ)`}
              price={bunState.price}
              thumbnail={bunState.image}
            />
          </li>
        : <li className={burgerConstructorStyles.emptyBottom}>
            <p>Выберите булку</p>
          </li>
      }
    </ul>
  )
}

IngredientConstructor.propTypes = {
  data: propTypes.arrayOf(ingredientType)
}

export default IngredientConstructor;
