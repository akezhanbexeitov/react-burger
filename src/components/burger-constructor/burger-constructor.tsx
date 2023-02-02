import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useMemo, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../../services/actions/order-details'
import { Link, useLocation } from 'react-router-dom'
import { TAuthUser, TIngredientLong, TIngredientsConstructorBun, TIngredientsConstructorIngredients } from '../../utils/types'

const BurgerConstructor: FC = () => {
    const bun = useSelector((store: TIngredientsConstructorBun) => store.ingredientsConstructor.bun)
    const ingredients = useSelector((store: TIngredientsConstructorIngredients) => store.ingredientsConstructor.ingredients)
    const dispatch = useDispatch()
    const user = useSelector((store: TAuthUser) => store.auth.user)
    const location = useLocation()

    const calculateTotalPrice = (bunPrice: number = 0, ingredients: TIngredientLong[]) => {
        let total = bunPrice * 2
        ingredients.map(item => total += item.price)
        return total
    }

    const clickHandler = () => {
        if (user) {
            // @ts-ignore
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
