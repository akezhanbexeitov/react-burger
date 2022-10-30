import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'

const IngredientConstructor = (props) => {
  const { data } = props

  return (
    <ul className={burgerConstructorStyles.list}>
      <li className={burgerConstructorStyles.bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[14].image}
        />
      </li>
      <div className={burgerConstructorStyles.ingredients}>
        {data.filter(item => {
                  if (item.type !== 'bun') {
                      return item
                  } else {
                      return null
                  }
              }).map((item, index) => {
                return(
                  <li className={burgerConstructorStyles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </li>
                )
            })}
      </div>
      <li className={burgerConstructorStyles.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={data[14].image}
        />
      </li>
    </ul>
  )
}

IngredientConstructor.propTypes = {
  data: propTypes.arrayOf(ingredientType)
}

export default IngredientConstructor;