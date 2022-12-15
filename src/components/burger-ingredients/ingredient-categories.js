import { useEffect, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerIngredientsStyles from './burger-ingredients.module.css'

const IngredientsCategories = ({ bunsInView, saucesInView, mainsInView, bunsRef, saucesRef, mainsRef }) => {
    const [current, setCurrent] = useState('buns')

    const scrollView = (ingredientTypeRef) => {
      console.log(ingredientTypeRef)
      ingredientTypeRef.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
      if (bunsInView && saucesInView) {
        setCurrent('buns')
      } else if (saucesInView) {
        setCurrent('sauces')
      } else if (mainsInView) {
        setCurrent('mains')
      }
    }, [mainsInView, saucesInView, bunsInView])

    return (
      <div className={burgerIngredientsStyles.categories}>
        <Tab value="buns" active={current === 'buns'} onClick={() => {setCurrent('one'); scrollView(bunsRef)}}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={() => {setCurrent('two'); scrollView(saucesRef)}}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === 'mains'} onClick={() => {setCurrent('three'); scrollView(mainsRef)}}>
          Начинки
        </Tab>
      </div>
    )
}

export default IngredientsCategories;
