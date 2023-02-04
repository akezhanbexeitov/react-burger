import feedDetailsStyles from './feed-details.module.css'
import { FC } from 'react'
import { useSelector } from '../../utils/types'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useParams } from 'react-router-dom'
import { TOrder } from '../../services/reducers/web-socket'

type TParams = { id: string } 

const FeedDetails: FC = () => {
    const params = useParams<TParams>()
    const orders = useSelector(store => store.feed.message.orders)
    const ingredients = useSelector(store => store.ingredientsList.ingredients)
    const order = orders && orders.find((item: TOrder) => item.number === +params.id)
    let price = 0

    let orderStatus
    let statusColor = '#AAA'
    if (order!.status === 'created') {
        orderStatus = 'Создан'
        statusColor = '#AAA'
    } else if (order!.status === 'pending') {
        orderStatus = 'Готовится'
        statusColor = '#FFCC66'
    } else if (order!.status === 'done') {
        orderStatus = 'Выполнен'
        statusColor = '#00CCCC'
    }

    return (
        <main className={feedDetailsStyles.wrapper}>
            <p className={`${feedDetailsStyles.orderNumber} text text_type_digits-default mb-10`}>#{order!.number}</p>
            <p className="text text_type_main-medium mb-3">{order!.name}</p>
            <p className='text text_type_main-default mb-15' style={{ color: statusColor }}>{orderStatus}</p>
            <p className='text text_type_main-medium mb-6'>Состав:</p>
            <div className={`${feedDetailsStyles.ingredients} pr-6 mb-10`}>
                {order!.ingredients.map((ingredient: string, index: number) => {
                    const currentIngredient = ingredients.find(item => item._id === ingredient)
                    price += currentIngredient!.price
                    return (
                        <div key={index} className={`${feedDetailsStyles.ingredient} mb-4`}>
                            <div className={feedDetailsStyles.ingredient_left}>
                                <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                                    <div className={feedDetailsStyles.image_inner}>
                                        <img src={currentIngredient!.image} alt={currentIngredient!.name}/>
                                    </div>
                                </div>
                                <p className={`${feedDetailsStyles.name} mr-4`}>{currentIngredient!.name}</p>
                            </div>
                            <div className={feedDetailsStyles.ingredient_right}>
                                <div className={feedDetailsStyles.price}>
                                    <p className='text text_type_digits-default mr-2'>{currentIngredient!.price}</p>
                                    <CurrencyIcon type="primary" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={feedDetailsStyles.total}>
                <p className="text text_type_main-default text_color_inactive"><FormattedDate date={new Date(order!.createdAt)}/></p>
                <div className={feedDetailsStyles.total_price}>
                    <p className='text text_type_digits-default mr-2'>{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </main>
    )
}

export default FeedDetails
