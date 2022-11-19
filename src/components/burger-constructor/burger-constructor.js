import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import withOverlay from '../modal-overlay/with-overlay'
import * as constants from '../../constants/constants'
import request from '../../utils/server-requests'
import LoadingSpinner from '../loading-spinner/loading-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_INGREDIENTS_FROM_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'

const WithOverlayModal = withOverlay(Modal)

const BurgerConstructor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const bun = useSelector(store => store.ingredientsConstructor.bun)
    const ingredients = useSelector(store => store.ingredientsConstructor.ingredients)
    const dispatch = useDispatch()
    const [orderNumber, setOrderNumber] = useState(0)
    const [isLoading, setIsLoading] = useState(false);

    const modal = (
        <WithOverlayModal setIsOpen={setIsOpen}>
            {isLoading ? <LoadingSpinner /> : <OrderDetails orderNumber={orderNumber}/>}
        </WithOverlayModal>
    )

    const sendOrder = () => {
        setIsLoading(true)
        const url = `${constants.BASE_URL}/orders`

        const body = {
            ingredients: []
        }
        ingredients.map(item => body.ingredients.push(item.id))

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        request(url, requestOptions)
            .then(result => {
                setOrderNumber(result.order.number)
                setIsLoading(false)
            })
            .then(dispatch({ type: RESET_INGREDIENTS_FROM_CONSTRUCTOR }))
            .catch(error => console.log(error.message));
    }

    const calculateTotalPrice = (bun, ingredients) => {
        let total = bun.price * 2
        ingredients.map(item => total += item.price)
        return total
    }

    return (
        <section className='ml-5'>
            <div className={`${burgerConstructorStyles.container} pt-25 pb-10`}>
                <IngredientConstructor />
            </div>
            <div className={`${burgerConstructorStyles.price} pl-4 pr-4`}>
                <p className="text text_type_digits-medium mr-2">{
                        (Object.keys(bun).length > 0 || ingredients.length > 0) 
                        ? calculateTotalPrice(bun, ingredients) 
                        : 0
                    }
                </p>
                <CurrencyIcon type="primary" />
                <Button 
                    className='button button_type_primary button_size_medium ml-10' 
                    type="primary" 
                    size="medium" 
                    htmlType='submit' 
                    onClick={() => {
                        setIsOpen(true)
                        sendOrder()
                    }} 
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
