import registerStyles from './register.module.css'
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../services/actions/auth'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className={registerStyles.wrapper}>
            <div className={registerStyles.container}>
                <h2 className={`${registerStyles.heading} mb-6`}>Регистрация</h2>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mb-6"
                />
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
                    onClick={() => dispatch(registerUser(email, password, name))}
                > {/* TODO: fix this button */}
                    Зарегистрироваться
                </Button>
                <div className={`${registerStyles.paragraph} mb-4`}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link className={registerStyles.link} to='/login'>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
