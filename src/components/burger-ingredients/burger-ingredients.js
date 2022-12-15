import { useMemo, memo } from 'react'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsCategories from './ingredient-categories'
import IngredientList from './ingredient-list'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'

const BurgerIngredients = () => {
    const data = useSelector(store => store.ingredientsList.ingredients)
    const { ref: bunsRef, inView: bunsInView } = useInView()
    const { ref: saucesRef, inView: saucesInView } = useInView()
    const { ref: mainsRef, inView: mainsInView } = useInView()
    const buns = useMemo(() => data.filter(item => item.type === 'bun' ? item : null), [data])
    const sauces = useMemo(() => data.filter(item => item.type === 'sauce' ? item : null), [data])
    const mains = useMemo(() => data.filter(item => item.type === 'main' ? item : null), [data])

    return (
        <section className='mr-5'>
            <div className={burgerIngredientsStyles.container}>
                <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                <IngredientsCategories 
                    bunsInView={bunsInView} 
                    saucesInView={saucesInView} 
                    mainsInView={mainsInView} 
                    bunsRef={bunsRef} 
                    saucesRef={saucesRef} 
                    mainsRef={mainsRef}
                />
                <div className={burgerIngredientsStyles.ingredients}>
                    <IngredientList ref={bunsRef} ingredientType={buns} title='Булки'/>
                    <IngredientList ref={saucesRef} ingredientType={sauces} title='Соусы'/>
                    <IngredientList ref={mainsRef} ingredientType={mains} title='Начинки'/>
                </div>
            </div>
        </section>

    )
}

export default memo(BurgerIngredients);
