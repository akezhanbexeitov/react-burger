import feedStyles from './feed.module.css'
import { FC } from 'react'
import Order from '../../components/order/order'

const Feed: FC = () => {
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
        <div className={feedStyles.wrapper}>
            <section className={`${feedStyles.container_left} mr-15`}>
                <h2 className="text text_type_main-large mb-5 mt-10">Лента заказов</h2>
                <div className={`${feedStyles.feed} pr-2`}>
                    <Order orderId={1} orderNumber='034535' time='Сегодня, 16:20 i-GMT+3' name='Death Star Starship Main бургер' ingredientsIds={ingredientsIds1}/>
                    <Order orderId={2} orderNumber='034534' time='Сегодня, 13:20 i-GMT+3' name='Interstellar бургер' ingredientsIds={ingredientsIds2}/>
                    <Order orderId={3} orderNumber='034533' time='Вчера, 13:50 i-GMT+3' name='Black Hole Singularity острый бургер' ingredientsIds={ingredientsIds3}/>
                    <Order orderId={4} orderNumber='034532' time='2 дня назад, 21:53 i-GMT+3' name='Supernova Infinity бургер' ingredientsIds={ingredientsIds4}/>
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
