import loginStyles from './login.module.css'
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../services/actions/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(store => store.auth.user)

    return (
        <div className={loginStyles.wrapper}>
            <div className={loginStyles.container}>
                <h2 className={`${loginStyles.heading} mb-6`}>Вход</h2>
                <EmailInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                />
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button 
                    htmlType="button" 
                    type="primary" 
                    size="medium" 
                    extraClass='mb-20'
                    onClick={() => dispatch(loginUser(email, password))}
                > {/* TODO: fix this button */}
                    Войти
                </Button>
                <div className={`${loginStyles.paragraph} mb-4`}>
                    <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?</p>
                    <Link className={loginStyles.link} to='/register'>Зарегистрироваться</Link>
                </div>
                <div className={loginStyles.paragraph}>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <Link className={loginStyles.link} to='/forgot-password'>Восстановить пароль</Link>
                </div>
                { user ? <Redirect to='/'/> : null }
            </div>
        </div>
    )
}

export default Login
