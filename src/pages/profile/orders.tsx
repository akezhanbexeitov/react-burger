import { FC, useEffect } from 'react'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import Order from '../../components/order/order'
import { TOrder } from '../../services/reducers/web-socket'
import { useDispatch, useSelector } from '../../utils/types'
import profileStyles from './profile.module.css'

const Orders: FC = () => {
    const message = useSelector(store => store.feed.message)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'WS_CONNECTION_START' })

        return () => {
            dispatch({ type: 'WS_CONNECTION_CLOSE' })
        }
    }, [dispatch])

    return (
        <section className={`${profileStyles.orders} mt-20`}>
            {message.orders 
                ? message.orders.map((order: TOrder, index: number) => {
                    return (
                        <Order key={index} orderId={order.number} orderNumber={order.number} time={order.createdAt} name={order.name} ingredientsIds={order.ingredients} status={order.status}/>
                    )
                }) 
                : <LoadingSpinner />
            }
        </section>
    )
}

export default Orders