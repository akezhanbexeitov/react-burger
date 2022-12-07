import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useMemo, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import withOverlay from '../modal-overlay/with-overlay'
import LoadingSpinner from '../loading-spinner/loading-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_INGREDIENTS_FROM_CONSTRUCTOR } from '../../services/actions/burger-constructor'
import { postOrder } from '../../services/actions/order-details'
import { useHistory } from 'react-router-dom'

const WithOverlayModal = withOverlay(Modal)

const BurgerConstructor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isLoading = useSelector(store => store.orderDetails.orderRequest)
    const bun = useSelector(store => store.ingredientsConstructor.bun)
    const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
    const dispatch = useDispatch()
    const orderNumber = useSelector(store => store.orderDetails.orderNumber)
    const user = useSelector(store => store.auth.user)
    const history = useHistory()

    const modal = (
        <WithOverlayModal setIsOpen={setIsOpen}>
            {isLoading ? <LoadingSpinner /> : <OrderDetails orderNumber={orderNumber}/>}
        </WithOverlayModal>
    )

    const calculateTotalPrice = (bunPrice = 0, ingredients) => {
        let total = bunPrice * 2
        ingredients.map(item => total += item.price)
        return total
    }

    const clickHandler = () => {
        if (user) {
            setIsOpen(true)
            dispatch(postOrder(bun, ingredients))
            dispatch({ type: RESET_INGREDIENTS_FROM_CONSTRUCTOR })
        } else { 
            history.push('/login')
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
            </div>
            {isOpen && modal}
        </section>
    )
}

export default BurgerConstructor;
