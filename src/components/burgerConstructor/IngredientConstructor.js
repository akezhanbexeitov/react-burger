import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css'

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

export default IngredientConstructor;