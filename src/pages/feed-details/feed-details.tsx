import feedDetailsStyles from './feed-details.module.css'
import { FC, useEffect, useState } from 'react'
import { useSelector } from '../../utils/types'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useParams } from 'react-router-dom'
import { TOrder } from '../../services/reducers/web-socket'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import { request } from '../../utils/server-requests'

type TParams = { id: string } 

const FeedDetails: FC = () => {
    const params = useParams<TParams>()
    const orders = useSelector(store => store.feed.message.orders)
    const ingredients = useSelector(store => store.ingredientsList.ingredients)
    const order = orders && orders.find((item: TOrder) => item.number === +params.id)
    const [alternativeOrder, setAlternativeOrder] = useState<TOrder | null>(null)
    let price = 0

    let orderStatus
    let statusColor = '#AAA'
    if ((order && order.status === 'created') || (alternativeOrder && alternativeOrder.status === 'created')) {
        orderStatus = 'Создан'
        statusColor = '#AAA'
    } else if ((order && order.status === 'pending') || (alternativeOrder && alternativeOrder.status === 'pending')) {
        orderStatus = 'Готовится'
        statusColor = '#FFCC66'
    } else if ((order && order.status === 'done') || (alternativeOrder && alternativeOrder.status === 'done')) {
        orderStatus = 'Выполнен'
        statusColor = '#00CCCC'
    }

    type TAccumulator = {
        [key: string]: number
    }

    const countIdOccurrences = (array: Array<string>) => {
        let count = array.reduce((accumulator: TAccumulator, current: string) => {
            accumulator[current] = (accumulator[current] || 0) + 1;
            return accumulator;
        }, {});
        return Object.keys(count).map(id => ({ id, count: count[id] }));
    }

    const orderIngredients = order && countIdOccurrences(order.ingredients)
    const alternativeOrderIngredients = alternativeOrder && countIdOccurrences(alternativeOrder.ingredients)

    useEffect(() => {
        if (!orders) {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            request(`https://norma.nomoreparties.space/api/orders/${params.id}`, requestOptions)
                .then(data => setAlternativeOrder(data.orders[0]))
        }
    }, [orders, params.id])

    return (
        <main className={feedDetailsStyles.wrapper}>
            {order
            ? <>
                <p className={`${feedDetailsStyles.orderNumber} text text_type_digits-default mb-5`}>#{order && order.number}</p>
                <p className="text text_type_main-medium mb-3">{order && order.name}</p>
                <p className='text text_type_main-default mb-5' style={{ color: statusColor }}>{orderStatus}</p>
                <p className='text text_type_main-medium mb-6'>Состав:</p>
                <div className={`${feedDetailsStyles.ingredients} pr-6 mb-10`}>
                    {order &&
                        orderIngredients!.map((ingredient, index) => {
                            const currentIngredient = ingredients.find(item => item._id === ingredient.id)
                            price += currentIngredient!.price * ingredient.count
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
                                            <p className='text text_type_digits-default mr-2'>{ingredient.count === 1 ? currentIngredient!.price : `${ingredient.count} x ${currentIngredient!.price}`}</p>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* Keeping this code here if the above code is not correct */}
                    {/* {order && order.ingredients.map((ingredient: string, index: number) => {
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
                    })} */}
                </div>
                <div className={feedDetailsStyles.total}>
                    <p className="text text_type_main-default text_color_inactive">{order && <FormattedDate date={new Date(order.createdAt)}/>}</p>
                    <div className={feedDetailsStyles.total_price}>
                        <p className='text text_type_digits-default mr-2'>{price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </>
            : alternativeOrder 
            ? 
                <>
                    <p className={`${feedDetailsStyles.orderNumber} text text_type_digits-default mb-10 mt-20`}>#{alternativeOrder && alternativeOrder.number}</p>
                    <p className="text text_type_main-medium mb-3">{alternativeOrder && alternativeOrder.name}</p>
                    <p className='text text_type_main-default mb-15' style={{ color: statusColor }}>{orderStatus}</p>
                    <p className='text text_type_main-medium mb-6'>Состав:</p>
                    <div className={`${feedDetailsStyles.ingredients} pr-6 mb-10`}>
                        {alternativeOrder &&
                            alternativeOrderIngredients!.map((ingredient, index) => {
                                const currentIngredient = ingredients.find(item => item._id === ingredient.id)
                                price += currentIngredient!.price * ingredient.count
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
                                                <p className='text text_type_digits-default mr-2'>{ingredient.count === 1 ? currentIngredient!.price : `${ingredient.count} x ${currentIngredient!.price}`}</p>
                                                <CurrencyIcon type="primary" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`${feedDetailsStyles.total} mb-20`}>
                        <p className="text text_type_main-default text_color_inactive">{alternativeOrder && <FormattedDate date={new Date(alternativeOrder.createdAt)}/>}</p>
                        <div className={feedDetailsStyles.total_price}>
                            <p className='text text_type_digits-default mr-2'>{price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </>
            : <LoadingSpinner />
            }
        </main>
    )
}

export default FeedDetails
