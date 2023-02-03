import feedStyles from './feed.module.css'
import { FC } from 'react'
import { useSelector } from '../../utils/types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'

const Feed: FC = () => {
    let zIndex = 99
    let keys = 0
    const ingredients = useSelector(store => store.ingredientsList.ingredients)

    return (
        <div className={feedStyles.wrapper}>
            <section className={`${feedStyles.container_left} mr-15`}>
                <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
                <div className={`${feedStyles.feed} pr-2`}>
                    <Link
                        key={++keys}
                        to={{ pathname: `/feed/${ingredients[1]._id}` }}
                        className={feedStyles.link}
                    >
                        <div className={`${feedStyles.box} p-6 mb-5`}>
                            <span className={`${feedStyles.box_top} mb-6`}>
                                <p className='text text_type_digits-default'>#034535</p>
                                <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
                            </span>

                            <h3 className='text text_type_main-medium mb-6'>Death Star Starship Main бургер</h3>

                            <div className={feedStyles.box_bottom}>
                                <div className={feedStyles.images}>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[1].image} alt={ingredients[1].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[3].image} alt={ingredients[3].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[5].image} alt={ingredients[5].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[7].image} alt={ingredients[7].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[9].image} alt={ingredients[9].name}/>
                                        </div>
                                    </div>
                                </div>

                                <span className={`${feedStyles.price} ml-6`}>
                                    <p className='text text_type_digits-default mr-2'>480</p>
                                    <CurrencyIcon type="primary" />
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link 
                        key={++keys}
                        to={{ pathname: `/feed/${ingredients[1]._id}` }}
                        className={feedStyles.link}
                    >
                        <div className={`${feedStyles.box} p-6 mb-5`}>
                            <span className={`${feedStyles.box_top} mb-6`}>
                                <p className='text text_type_digits-default'>#034534</p>
                                <p className='text text_type_main-default text_color_inactive'>Сегодня, 13:20 i-GMT+3</p>
                            </span>

                            <h3 className='text text_type_main-medium mb-6'>Interstellar бургер</h3>

                            <div className={feedStyles.box_bottom}>
                                <div className={feedStyles.images}>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[2].image} alt={ingredients[2].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[3].image} alt={ingredients[3].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[4].image} alt={ingredients[4].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[5].image} alt={ingredients[5].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[6].image} alt={ingredients[6].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[10].image} alt={ingredients[10].name} style={{opacity: 0.5}}/>
                                        </div>
                                    </div>
                                </div>

                                <span className={`${feedStyles.price} ml-6`}>
                                    <p className='text text_type_digits-default mr-2'>560</p>
                                    <CurrencyIcon type="primary" />
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        key={++keys}
                        to={{ pathname: `/feed/${ingredients[1]._id}` }}
                        className={feedStyles.link}
                    >
                        <div className={`${feedStyles.box} p-6 mb-5`}>
                            <span className={`${feedStyles.box_top} mb-6`}>
                                <p className='text text_type_digits-default'>#034533</p>
                                <p className='text text_type_main-default text_color_inactive'>Вчера, 13:50 i-GMT+3</p>
                            </span>

                            <h3 className='text text_type_main-medium mb-6'>Black Hole Singularity острый бургер</h3>

                            <div className={feedStyles.box_bottom}>
                                <div className={feedStyles.images}>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[1].image} alt={ingredients[1].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[3].image} alt={ingredients[3].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[5].image} alt={ingredients[5].name}/>
                                        </div>
                                    </div>
                                </div>

                                <span className={`${feedStyles.price} ml-6`}>
                                    <p className='text text_type_digits-default mr-2'>510</p>
                                    <CurrencyIcon type="primary" />
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        key={++keys}
                        to={{ pathname: `/feed/${ingredients[1]._id}` }}
                        className={feedStyles.link}
                    >
                        <div className={`${feedStyles.box} p-6 mb-5`}>
                            <span className={`${feedStyles.box_top} mb-6`}>
                                <p className='text text_type_digits-default'>#034532</p>
                                <p className='text text_type_main-default text_color_inactive'>2 дня назад, 21:53 i-GMT+3</p>
                            </span>

                            <h3 className='text text_type_main-medium mb-6'>Supernova Infinity бургер</h3>

                            <div className={feedStyles.box_bottom}>
                                <div className={feedStyles.images}>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[1].image} alt={ingredients[1].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[3].image} alt={ingredients[3].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[5].image} alt={ingredients[5].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[7].image} alt={ingredients[7].name}/>
                                        </div>
                                    </div>
                                    <div className={feedStyles.ingredient_image_outer} style={{zIndex: --zIndex}}>   
                                        <div className={feedStyles.ingredient_image_inner}>
                                            <img src={ingredients[9].image} alt={ingredients[9].name}/>
                                        </div>
                                    </div>
                                </div>

                                <span className={`${feedStyles.price} ml-6`}>
                                    <p className='text text_type_digits-default mr-2'>370</p>
                                    <CurrencyIcon type="primary" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className={`${feedStyles.container_right} mt-25`}>
                <div className={`${feedStyles.orders} mb-15`}>
                    <div className={`${feedStyles.completed} mr-9`}>
                        <h3 className={`${feedStyles.orders_heading} mb-6`}>Готовы:</h3>
                        <div>
                            <p className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>034533</p>
                            <p className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>034532</p>
                            <p className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>034530</p>
                            <p className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>034527</p>
                            <p className={`${feedStyles.completed_item} text text_type_digits-default mb-2`}>034525</p>
                        </div>
                    </div>
                    <div className={feedStyles.in_progress}>
                        <h3 className={`${feedStyles.orders_heading} mb-6`}>В работе:</h3>
                        <div>
                            <p className={`${feedStyles.in_progress_item} text text_type_digits-default mb-2`}>034538</p>
                            <p className={`${feedStyles.in_progress_item} text text_type_digits-default mb-2`}>034541</p>
                            <p className={`${feedStyles.in_progress_item} text text_type_digits-default mb-2`}>034542</p>
                        </div>
                    </div>
                </div>
                <div className={`${feedStyles.all_time_completed} mb-15`}>
                    <p className='text text_type_main-medium'>Выполнено за все время:</p>
                    <p className={`${feedStyles.number} text text_type_digits-large`}>28 752</p>
                </div>
                <div className={feedStyles.today_completed}>
                <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                    <p className={`${feedStyles.number} text text_type_digits-large`}>138</p>
                </div>
            </section>
        </div>
    )
}

export default Feed
