import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'

const AppHeader = () => {
    return (
        <header className='text text_type_main-default'>
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
                <a href='https://practicum.yandex.ru/' className={headerStyles.logo}> {/* Адрес яндекса пока что временный */}
                    <Logo />
                </a>
                <div className={headerStyles.item}>
                    <a className={`${headerStyles.link} p-5`} href='https://practicum.yandex.ru/'> {/* Адрес яндекса пока что временный */}
                        <ProfileIcon type="secondary" />
                        <p className="text_color_inactive ml-2">Личный кабинет</p>
                    </a>
                </div>      
            </div>
        </header>
    )
}

export default AppHeader