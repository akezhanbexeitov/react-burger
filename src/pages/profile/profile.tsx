import profileStyles from './profile.module.css'
import { logoutUser } from '../../services/actions/auth'
import { FC } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import PersonalDetails from './personal-details'
import { useDispatch } from '../../utils/types'

const Profile: FC = () => {
    const location = useLocation()
    let isProfile = false
    let isOrders = false
    if (location.pathname === '/profile') {
        isProfile = true
    } else if (location.pathname === '/profile/orders') {
        isOrders = true
    }
    const dispatch = useDispatch()

    return (
        <>
           <section className={`${profileStyles.profile_options} mr-15 mt-20`}>
                <Link to='/profile' className={profileStyles.link}>
                    <h2 className={isProfile ? '' : 'text_color_inactive'}>Профиль</h2>
                </Link>
                <Link to='/profile/orders' className={profileStyles.link}>
                    <h2 className={isOrders ? '' : 'text_color_inactive'}>История заказов</h2>
                </Link>
                <h2 className={`${profileStyles.logout} text_color_inactive mb-20`} onClick={() => dispatch(logoutUser())}>Выход</h2>
                <p className="text text_type_main-default text_color_inactive">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </section>
            <section>
                <Switch>
                    <Route exact path='/profile'>
                        <PersonalDetails />
                    </Route>
                    <Route exact path='/profile/orders'>
                        Orders will be here
                    </Route>
                </Switch>
            </section>
        </>
    )
}

export default Profile
