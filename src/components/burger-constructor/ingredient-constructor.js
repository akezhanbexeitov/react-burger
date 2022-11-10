import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'
import { useContext } from 'react'
import IngredientContext from '../contexts/ingredient-context'

const IngredientConstructor = () => {
  const { data, ingredientState } = useContext(IngredientContext)

  return (
    <ul className={burgerConstructorStyles.list}>
      <li className={burgerConstructorStyles.bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
        />
      </li>
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
      <li className={burgerConstructorStyles.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={data[0].image}
        />
      </li>
    </ul>
  )
}

IngredientConstructor.propTypes = {
  data: propTypes.arrayOf(ingredientType)
}

export default IngredientConstructor;
