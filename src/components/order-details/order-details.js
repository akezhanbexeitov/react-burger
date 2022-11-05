import orderAcceptedImage from '../../images/graphics.svg'
import orderDetailsStyles from './order-details.module.css'

const OrderDetails = () => {
    return (
        <div className={orderDetailsStyles.main}>
            <h2 className="text text_type_digits-large mb-8">034536</h2>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img src={orderAcceptedImage} alt="Order accepted"/>
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;
