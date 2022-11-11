import orderAcceptedImage from '../../images/graphics.svg'
import orderDetailsStyles from './order-details.module.css'
import { useContext, useEffect, useState } from 'react'
import IngredientContext from '../contexts/ingredient-context'

const OrderDetails = () => {
    const { ingredientConstructorState } = useContext(IngredientContext)
    const { ingredients } = ingredientConstructorState
    const [orderNumber, setOrderNumber] = useState(0)

    useEffect(() => {
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

        const url = 'https://norma.nomoreparties.space/api/orders'

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setOrderNumber(result.order.number))
            .catch(error => console.log(error.message));
    }, [ingredients])


    return (
        <div className={orderDetailsStyles.main}>
            <h2 className="text text_type_digits-large mb-8">{orderNumber}</h2>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img src={orderAcceptedImage} alt="Order accepted"/>
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;
