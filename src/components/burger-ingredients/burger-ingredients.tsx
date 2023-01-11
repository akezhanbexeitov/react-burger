import { useMemo, memo, useRef, useState } from 'react'
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientList from './ingredient-list'
import { useSelector } from 'react-redux'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { TIngredientList } from '../../utils/types'

const BurgerIngredients = () => {
    const data = useSelector((store: TIngredientList) => store.ingredientsList.ingredients)
    const [current, setCurrent] = useState('buns')
    const tabsRef = useRef<HTMLDivElement>(null)
    const bunsRef = useRef<HTMLHeadingElement>(null)
    const saucesRef = useRef<HTMLHeadingElement>(null)
    const mainsRef = useRef<HTMLHeadingElement>(null)
    const buns = useMemo(() => data.filter(item => item.type === 'bun' ? item : null), [data])
    const sauces = useMemo(() => data.filter(item => item.type === 'sauce' ? item : null), [data])
    const mains = useMemo(() => data.filter(item => item.type === 'main' ? item : null), [data])

    const scrollView = (ingredientTypeRef: HTMLElement) => {
        ingredientTypeRef.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScrollGroups = () => {
        const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom
        const bunsTop = bunsRef.current?.getBoundingClientRect().top;
        const saucesTop = saucesRef.current?.getBoundingClientRect().top;
        const mainsTop = mainsRef.current?.getBoundingClientRect().top;
    
        if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
            return;
        }
    
        const bunsDelta = Math.abs(bunsTop - tabsBottom);
        const saucesDelta = Math.abs(saucesTop - tabsBottom);
        const mainsDelta = Math.abs(mainsTop - tabsBottom);
    
        const min = Math.min(bunsDelta, saucesDelta, mainsDelta);
    
        const newTab =
            min === bunsDelta ? "buns" : min === saucesDelta ? "sauces" : "mains";
    
        if (newTab !== current) {
            setCurrent(newTab);
        }
      };

    return (
        <section className='mr-5'>
            <div className={burgerIngredientsStyles.container}>
                <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
                <div ref={tabsRef} className={burgerIngredientsStyles.categories}>
                    <Tab value="buns" active={current === 'buns'} onClick={() => {setCurrent('buns'); scrollView(bunsRef.current!)}}>
                        Булки
                    </Tab>
                    <Tab value="sauces" active={current === 'sauces'} onClick={() => {setCurrent('sauces'); scrollView(saucesRef.current!)}}>
                        Соусы
                    </Tab>
                    <Tab value="mains" active={current === 'mains'} onClick={() => {setCurrent('mains'); scrollView(mainsRef.current!)}}>
                        Начинки
                    </Tab>
                </div>
                <div onScroll={handleScrollGroups} className={burgerIngredientsStyles.ingredients}>
                    <IngredientList ref={bunsRef} ingredientType={buns} title='Булки'/>
                    <IngredientList ref={saucesRef} ingredientType={sauces} title='Соусы'/>
                    <IngredientList ref={mainsRef} ingredientType={mains} title='Начинки'/>
                </div>
            </div>
        </section>

    )
}

export default memo(BurgerIngredients);
