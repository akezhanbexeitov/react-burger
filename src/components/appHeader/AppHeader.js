import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'

const AppHeader = () => {
    return (
        <header className='text text_type_main-default p-4'>
            <div className={headerStyles.container}>
                <nav className={headerStyles.navigation}>
                    <ul className={headerStyles.list}>
                        <li className={`${headerStyles.item} p-5`}> {/* Add "a" tag later */}
                            <BurgerIcon type="primary" />
                            <p className='ml-2'>Конструктор</p>
                        </li>
                        <li className={`${headerStyles.item} p-5`}> {/* Add "a" tag later */}
                            <ListIcon type="secondary" />
                            <p className="text_color_inactive ml-2">Лента заказов</p>
                        </li>
                    </ul>
                </nav>
                <Logo />
                <div className={`${headerStyles.item} p-5`}> {/* Change to "a" tag later */}
                    <ProfileIcon type="secondary" />
                    <p className="text_color_inactive ml-2">Личный кабинет</p>
                </div>
            </div>
        </header>
    )
}

export default AppHeader