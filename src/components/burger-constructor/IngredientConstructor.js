import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'
import propTypes from 'prop-types'

const IngredientConstructor = (props) => {
  const { data } = props

  return (
    <>
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
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
          <li className={burgerConstructorStyles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Филе Люминесцентного тетраодонтимформа"
              price={50}
              thumbnail={data[12].image}
            />
          </li>
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
    </>
  )
}

const dataStructure = propTypes.shape({
  _id: propTypes.string,
  name: propTypes.string,
  types: propTypes.string,
  proteins: propTypes.number,
  fat: propTypes.number,
  carbohydrates: propTypes.number,
  calories: propTypes.number,
  price: propTypes.number,
  image: propTypes.string,
  image_mobile: propTypes.string,
  image_large: propTypes.string,
  __v: propTypes.number
})

IngredientConstructor.propTypes = {
  data: propTypes.arrayOf(dataStructure)
}

export default IngredientConstructor;