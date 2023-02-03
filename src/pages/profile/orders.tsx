import { FC } from 'react'
import Order from '../../components/order/order'
import profileStyles from './profile.module.css'

const Orders: FC = () => {
    const ingredientsIds1 = [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733cc",
        "60d3b41abdacab0026a733d0"
    ]

    const ingredientsIds2 = [
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733cc',
        '60d3b41abdacab0026a733d0',
        '60d3b41abdacab0026a733d2',
        '60d3b41abdacab0026a733d4'
    ]

    const ingredientsIds3 = [
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733cc',
        '60d3b41abdacab0026a733ca'
    ]

    const ingredientsIds4 = [
        '60d3b41abdacab0026a733c6',
        '60d3b41abdacab0026a733cb',
        '60d3b41abdacab0026a733ce',
        '60d3b41abdacab0026a733d1'
    ]

    return (
        <section className={`${profileStyles.orders} mt-20`}>
            <Order orderId={1} orderNumber='034535' time='Сегодня, 16:20 i-GMT+3' name='Death Star Starship Main бургер' ingredientsIds={ingredientsIds1} status='created'/>
            <Order orderId={2} orderNumber='034534' time='Сегодня, 13:20 i-GMT+3' name='Interstellar бургер' ingredientsIds={ingredientsIds2} status='pending'/>
            <Order orderId={3} orderNumber='034533' time='Вчера, 13:50 i-GMT+3' name='Black Hole Singularity острый бургер' ingredientsIds={ingredientsIds3} status='done'/>
            <Order orderId={4} orderNumber='034532' time='2 дня назад, 21:53 i-GMT+3' name='Supernova Infinity бургер' ingredientsIds={ingredientsIds4} status='done'/>
        </section>
    )
}

export default Orders