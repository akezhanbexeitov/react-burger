import feedStyles from './feed.module.css'
import { FC, useEffect } from 'react'
import Order from '../../components/order/order'
import { useDispatch, useSelector } from '../../utils/types'
import { TOrder } from '../../services/reducers/web-socket'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'

const Feed: FC = () => {
    const dispatch = useDispatch()
    const message = useSelector(store => store.feed.message)
    console.log(message)

    useEffect(() => {
        dispatch({ type: 'WS_CONNECTION_START' })

        return () => {
            dispatch({ type: 'WS_CONNECTION_CLOSE' })
        }
    }, [dispatch])
    return (
        <div className={feedStyles.wrapper}>
            <section className={`${feedStyles.container_left} mr-15`}>
                <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
                <div className={`${feedStyles.feed} pr-2`}>
                    {message.orders ? message.orders.map((order: TOrder, index: number) => {
                        return (
                            <Order key={index} orderId={order.number} orderNumber={order.number} time={order.createdAt} name={order.name} ingredientsIds={order.ingredients}/>
                        )
                    }) : <LoadingSpinner />}
                </div>
            </section>
            <section className={`${feedStyles.container_right} mt-25`}>
                <div className={`${feedStyles.orders} mb-15`}>
                    <div className={`${feedStyles.completed} mr-9`}>
                        <h3 className={`${feedStyles.orders_heading} mb-6`}>Готовы:</h3>
                        <div className={feedStyles.done_numbers}>
                            {message.orders && message.orders.map((order, index) => {
                                if (order.status === 'done') {
                                    if (index <= 9) {
                                        return (
                                            <p key={order.number} className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>{order.number}</p>
                                        )
                                    } else {
                                        return null
                                    }
                                } else {
                                    index -= 1
                                    return null
                                }
                            })}
                        </div>
                    </div>
                    <div className={feedStyles.in_progress}>
                        <h3 className={`${feedStyles.orders_heading} mb-6`}>В работе:</h3>
                        <div className={feedStyles.pending_numbers}>
                            {message.orders && message.orders.map((order, index) => {
                                    if (order.status === 'pending') {
                                        if (index <= 9) {
                                            return (
                                                <p key={order.number} className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>{order.number}</p>
                                            )
                                        } else {
                                            return null
                                        }
                                    } else {
                                        index -= 1
                                        return null
                                    }
                                })}
                        </div>
                    </div>
                </div>
                <div className={`${feedStyles.all_time_completed} mb-15`}>
                    <p className='text text_type_main-medium'>Выполнено за все время:</p>
                    <p className={`${feedStyles.number} text text_type_digits-large`}>{message.total ? message.total : 0}</p>
                </div>
                <div className={feedStyles.today_completed}>
                <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                    <p className={`${feedStyles.number} text text_type_digits-large`}>{message.totalToday ? message.totalToday : 0}</p>
                </div>
            </section>
        </div>
    )
}

export default Feed
