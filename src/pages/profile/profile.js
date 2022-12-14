import profileStyles from './profile.module.css'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, updateUserInfo } from '../../services/actions/auth'
import { useForm } from '../../hooks/useForm'

const Profile = () => {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()
    const {values, handleChange, setValues} = useForm({
        name: user.name,
        email: user.email,
        password: '1234'
    })

    const resetUserInfo = () => setValues({
        ...values, 
        name: user.name,
        email: user.email
    })

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
                    onChange={handleChange}
                    icon='EditIcon'
                    value={values.name}
                    name={'name'}
                    extraClass="mb-6"
                /> {/* TODO: Fix this input */}
                <EmailInput
                    onChange={handleChange}
                    value={values.email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-6"
                />
                <PasswordInput
                    onChange={handleChange}
                    value={values.password}
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
                        onClick={() => dispatch(updateUserInfo(values.name, values.email))}
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
