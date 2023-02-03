import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useMemo, FC } from 'react'
import { postOrder } from '../../services/actions/order-details'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from '../../utils/types'

type TIngredientShort = {
    name: string
    image: string
    key: string
    id: string
    price: number
    type?: string
}

const BurgerConstructor: FC = () => {
    const bun = useSelector(store => store.ingredientsConstructor.bun)
    const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
    const dispatch = useDispatch()
    const user = useSelector(store => store.auth.user)
    const location = useLocation()

    const calculateTotalPrice = (bunPrice: number = 0, ingredients: Array<TIngredientShort>) => {
        let total = bunPrice * 2
        ingredients.map(item => total += item.price)
        return total
    }

    const clickHandler = () => {
        if (user) {
            dispatch(postOrder(bun, ingredients))
        }
    }

    const memoizedTotalPrice = useMemo(() => calculateTotalPrice(bun.price, ingredients), [bun.price, ingredients])

    return (
        <section className='ml-5'>
            <div className={`${burgerConstructorStyles.container} pt-25 pb-10`}>
                <IngredientConstructor />
            </div>
            <div className={`${burgerConstructorStyles.price} pl-4 pr-4`}>
                <p className="text text_type_digits-medium mr-2">
                    {
                        (Object.keys(bun).length > 0 || ingredients.length > 0) 
                        ? memoizedTotalPrice
                        : 0
                    }
                </p>
                <CurrencyIcon type="primary" />
                <Link
                    to={{
                        pathname: user ? `/order` : '/login',
                        state: user ? { background: location } : null,
                    }}
                >
                    <Button 
                        className='button button_type_primary button_size_medium ml-10' 
                        type="primary" 
                        size="medium" 
                        htmlType='button' 
                        onClick={clickHandler} 
                        disabled={!(Object.keys(bun).length > 0 && ingredients.length > 0)}
                    >
                        Оформить заказ
                    </Button>   
                </Link>
            </div>
        </section>
    )
}

export default BurgerConstructor;
