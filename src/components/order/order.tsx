import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from '../../utils/types'
import orderStyles from './order.module.css'

type TOrderProps = {
    orderId: number
    orderNumber: string
    time: string
    name: string
    ingredientsIds: string[]
    status?: string
}

const Order: FC<TOrderProps> = ({ orderId, orderNumber, time, name, ingredientsIds, status }) => {
    let zIndex = 99
    let totalPrice = 0
    const ingredients = useSelector(store => store.ingredientsList.ingredients)
    console.log(ingredients)

    return (
        <Link
            key={orderId}
            to={{ pathname: `/feed/${orderNumber}` }}
            className={orderStyles.link}
        >
            <div className={`${orderStyles.box} p-6 mb-5`}>
                <span className={`${orderStyles.box_top} mb-6`}>
                    <p className='text text_type_digits-default'>#{orderNumber}</p>
                    <p className='text text_type_main-default text_color_inactive'>{time}</p>
                </span>

                <h3 className='text text_type_main-medium'>{name}</h3>

                {status ? <p className='mt-2'>Создан</p> : null}

                <div className={`${orderStyles.box_bottom} mt-6`}>
                    <div className={orderStyles.images}>
                        {ingredientsIds.map((id, index) => {
                            const ingredient = ingredients.find(ingredient => ingredient._id === id)
                            totalPrice += ingredient!.price
                            return (
                                <div key={index} className={orderStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                    <div className={orderStyles.ingredient_image_inner}>
                                        <img src={ingredient!.image} alt={ingredient!.name}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <span className={`${orderStyles.price} ml-6`}>
                        <p className='text text_type_digits-default mr-2'>{totalPrice}</p>
                        <CurrencyIcon type="primary" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Order
