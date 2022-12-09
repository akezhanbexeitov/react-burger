import { useEffect, useState } from 'react'
import profileStyles from './profile.module.css'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, logoutUser, updateUserInfo } from '../../services/actions/auth'
import { useHistory } from 'react-router-dom'

const Profile = () => {
    const user = useSelector(store => store.auth.user)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('1234')
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (user === null) {
            history.push('/')
        }
    }, [user, history])

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])

    const resetUserInfo = () => {
        setName(user.name)
        setEmail(user.email)
    }

    return (
        <>
           <section className={`${profileStyles.section} mr-15`}>
                {/* TODO: change h2 tags to Links */}
                <h2>Профиль</h2>
                <h2 className='text_color_inactive'>История заказов</h2>
                <h2 className={`${profileStyles.logout} text_color_inactive mb-20`} onClick={() => dispatch(logoutUser())}>Выход</h2>
                <p className="text text_type_main-default text_color_inactive">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </section>
            <section className={profileStyles.section}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    icon='EditIcon'
                    value={name}
                    name={'name'}
                    extraClass="mb-6"
                /> {/* TODO: Fix this input */}
                <EmailInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    icon="EditIcon"
                    placeholder='Пароль'
                    extraClass="mb-6"
                />
                <div className={profileStyles.buttons}>
                    <Button 
                        htmlType="button" 
                        type="secondary" 
                        size="medium"
                        onClick={resetUserInfo}
                    >
                        Отмена
                    </Button>
                    <Button 
                        htmlType="button" 
                        type="primary" 
                        size="medium" 
                        onClick={() => dispatch(updateUserInfo(name, email))}
                    >
                        Сохранить
                    </Button>
                </div>
            </section>
            <section className={profileStyles.section}></section>
        </>
    )
}

export default Profile
