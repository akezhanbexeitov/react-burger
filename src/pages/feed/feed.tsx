import feedStyles from './feed.module.css'
import { FC } from 'react'
import { useSelector } from '../../utils/types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Feed: FC = () => {
    let zIndex = 99
    const ingredients = useSelector(store => store.ingredientsList.ingredients)

    return (
        <div className={feedStyles.wrapper}>
            <section className={`${feedStyles.container_left} mr-15`}>
                <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
                <div className={`${feedStyles.feed} pr-2`}>
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
                </div>
            </section>
            <section className={feedStyles.container_right}>
                Hello
            </section>
        </div>
    )
}

export default Feed
