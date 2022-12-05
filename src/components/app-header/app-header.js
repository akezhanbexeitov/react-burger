import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <header className={`${headerStyles.header} text text_type_main-default`}>
            <div className={`${headerStyles.container} pt-4 pb-4`}>
                <nav>
                    <ul className={headerStyles.list}>
                        <li className={headerStyles.item}>
                            <a className={`${headerStyles.link} p-5`} href='https://practicum.yandex.ru/'> {/* Адрес яндекса пока что временный */}
                                <BurgerIcon type="primary" />
                                <p className='ml-2'>Конструктор</p>
                            </a>
                        </li>
                        <li className={`${headerStyles.item} ml-2`}>
                            <a className={`${headerStyles.link} p-5`} href='https://practicum.yandex.ru/'>
                                <ListIcon type="secondary" />
                                <p className="text_color_inactive ml-2">Лента заказов</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <Link to='/'>
                    <Logo />
                </Link>
                <div className={headerStyles.item}>
                    <Link className={`${headerStyles.link} p-5`} to='/profile'>
                        <ProfileIcon type="secondary" />
                        <p className="text_color_inactive ml-2">Личный кабинет</p>
                    </Link>
                </div>      
            </div>
        </header>
    )
}

export default AppHeader
