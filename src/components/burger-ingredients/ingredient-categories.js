import { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredientsStyles from './burger-ingredients.module.css'

const IngredientsCategories = ({ bunsRef, saucesRef, mainsRef }) => {
    const [current, setCurrent] = useState('one')

    const scrollView = (ingredientTypeRef) => {
      ingredientTypeRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
      <div className={burgerIngredientsStyles.categories}>
        <Tab value="one" active={current === 'one'} onClick={() => {setCurrent('one'); scrollView(bunsRef)}}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={() => {setCurrent('two'); scrollView(saucesRef)}}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={() => {setCurrent('three'); scrollView(mainsRef)}}>
          Начинки
        </Tab>
      </div>
    )
}

export default IngredientsCategories;
