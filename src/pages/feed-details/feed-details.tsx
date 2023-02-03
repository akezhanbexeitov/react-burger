import feedDetailsStyles from './feed-details.module.css'
import { FC } from 'react'
import { useSelector } from '../../utils/types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const FeedDetails: FC = () => {
    const ingredients = useSelector(store => store.ingredientsList.ingredients)

    return (
        <main className={feedDetailsStyles.wrapper}>
            <p className={`${feedDetailsStyles.orderNumber} text text_type_digits-default mb-10`}>#034533</p>
            <p className="text text_type_main-medium mb-3">Black Hole Singularity острый бургер</p>
            <p className={`${feedDetailsStyles.status} text text_type_main-default mb-15`}>Выполнен</p>
            <p className='text text_type_main-medium mb-6'>Состав:</p>
            <div className={`${feedDetailsStyles.ingredients} pr-6 mb-10`}>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[1].image} alt={ingredients[1].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[1].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>2 x {ingredients[1].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[3].image} alt={ingredients[3].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[3].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>1 x {ingredients[3].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[5].image} alt={ingredients[5].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[5].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>1 x {ingredients[5].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[7].image} alt={ingredients[7].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[7].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>1 x {ingredients[7].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[9].image} alt={ingredients[9].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[9].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>1 x {ingredients[9].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
                <div className={`${feedDetailsStyles.ingredient} mb-4`}>
                    <div className={feedDetailsStyles.ingredient_left}>
                        <div className={`${feedDetailsStyles.image_outer} mr-4`}>
                            <div className={feedDetailsStyles.image_inner}>
                                <img src={ingredients[11].image} alt={ingredients[11].name}/>
                            </div>
                        </div>
                        <p className={`${feedDetailsStyles.name} mr-4`}>{ingredients[11].name}</p>
                    </div>
                    <div className={feedDetailsStyles.ingredient_right}>
                        <div className={feedDetailsStyles.price}>
                            <p className='text text_type_digits-default mr-2'>1 x {ingredients[11].price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={feedDetailsStyles.total}>
                <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
                <div className={feedDetailsStyles.total_price}>
                    <p className='text text_type_digits-default mr-2'>510</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </main>
    )
}

export default FeedDetails
