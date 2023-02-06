import { FC, useEffect } from 'react'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import Order from '../../components/order/order'
import { WS_BASE_URL } from '../../constants/constants'
import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../../services/actions/web-socket'
import { getCookie } from '../../utils/cookies'
import { useDispatch, useSelector } from '../../utils/types'
import profileStyles from './profile.module.css'

const Orders: FC = () => {
    const message = useSelector(store => store.feed.message)
    const dispatch = useDispatch()
    const accessToken = getCookie('accessToken')

    useEffect(() => {
        dispatch({ 
            type: WS_CONNECTION_START,
            payload: {
                url: `${WS_BASE_URL}?token=${accessToken}`
            }
        })

        return () => {
            dispatch({ type: WS_CONNECTION_CLOSE })
        }
    }, [dispatch, accessToken])

    return (
        <section className={`${profileStyles.orders} mt-20`}>
            {message.orders 
                ? message.orders.slice().reverse().map((order, index) => {
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