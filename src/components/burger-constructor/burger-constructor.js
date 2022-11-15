import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useContext, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import withOverlay from '../modal-overlay/with-overlay'
import IngredientContext from '../../contexts/ingredient-context'

const WithOverlayModal = withOverlay(Modal)

const BurgerConstructor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { ingredientConstructorState } = useContext(IngredientContext)
    const { bun, ingredients } = ingredientConstructorState

    const modal = (
        <WithOverlayModal setIsOpen={setIsOpen}>
            <OrderDetails />
        </WithOverlayModal>
    )

    const calculateTotalPrice = (bun, ingredients) => {
        let total = bun.price * 2
        ingredients.map(item => total += item.price)
        return total
    }

    return (
        <>
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
                <div onClick={() => setIsOpen(true)}>
                    <Button className='button button_type_primary button_size_medium ml-10' type="primary" size="medium" htmlType='submit'>
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {isOpen && modal}
        </>
    )
}

export default BurgerConstructor;
