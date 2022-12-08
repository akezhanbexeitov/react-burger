import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AppHeader = () => {
    const isConstructor = !!useRouteMatch({ path: '/', exact: true});
    const isProfile = !!useRouteMatch('/profile');
    const isFeed = !!useRouteMatch('/feed');
    const user = useSelector(store => store.auth.user)

    return (
        <header className={`${headerStyles.header} text text_type_main-default`}>
            <div className={`${headerStyles.container} pt-4 pb-4`}>
                <nav>
                    <ul className={headerStyles.list}>
                        <li className={headerStyles.item}>
                            <Link className={`${headerStyles.link} p-5`} to='/'>
                                <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                                <p className={isConstructor ? 'ml-2' : 'text_color_inactive ml-2'}>Конструктор</p>
                            </Link>
                        </li>
                        <li className={`${headerStyles.item} ml-2`}>
                            <Link className={`${headerStyles.link} p-5`} to='/feed'>
                                <ListIcon type={isFeed ? 'primary' : 'secondary'} />
                                <p className={isFeed ? 'ml-2' : 'text_color_inactive ml-2'}>Лента заказов</p>    
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to='/'>
                    <Logo />
                </Link>
                <div className={headerStyles.item}>
                    <Link className={`${headerStyles.link} p-5`} to='/profile'>
                        <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                        <p className={isProfile ? 'ml-2' : 'text_color_inactive ml-2'}>{ user !== null ? user.name : 'Личный кабинет' }</p>
                    </Link>
                </div>      
            </div>
        </header>
    )
}

export default AppHeader
