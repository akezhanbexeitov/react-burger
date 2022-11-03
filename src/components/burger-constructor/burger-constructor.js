import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './ingredient-constructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'
import { useState } from 'react'
import Modal from '../modal/Modal'
import OrderDetails from '../order-details/order-details'

const BurgerConstructor = (props) => {
    const { data } = props
    const [isOpen, setIsOpen] = useState(false)

    const modal = (
        <Modal setIsOpen={setIsOpen}>
            <OrderDetails />
        </Modal>
    )

    return (
        <>
            <div className={`${burgerConstructorStyles.container} pt-25 pb-10`}>
                <IngredientConstructor data={data}/>
            </div>
            <div className={`${burgerConstructorStyles.price} pl-4 pr-4`}>
                <p className="text text_type_digits-medium mr-2">610</p>
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

BurgerConstructor.propTypes = {
    data: propTypes.arrayOf(ingredientType)
}

export default BurgerConstructor;