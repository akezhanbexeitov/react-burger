import { useState } from 'react'
import profileStyles from './profile.module.css'
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'

const Profile = () => {
    const [name, setName] = useState('Mark')
    const [email, setEmail] = useState('mail@stellar.burgers')
    const [password, setPassword] = useState('mark')

    return (
        <>
           <section className={`${profileStyles.section} mr-15`}>
                {/* TODO: change h2 tags to Links */}
                <h2>Профиль</h2>
                <h2 className='text_color_inactive'>История заказов</h2>
                <h2 className='text_color_inactive mb-20'>Выход</h2>
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
            </section>
        </>
    )
}

export default Profile
