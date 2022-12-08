import registerStyles from './register.module.css'
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../services/actions/auth'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLoading = useSelector(store => store.auth.registerUserRequest)
    const isAuthChecked = useSelector(store => store.auth.isAuthChecked)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (isAuthChecked) {
            history.push('/')
        }
    }, [isAuthChecked, history]) 

    return (
        <div className={registerStyles.wrapper}>
            { isLoading ? <LoadingSpinner /> :
            <div className={registerStyles.container}>
                <h2 className={`${registerStyles.heading} mb-6`}>Регистрация</h2>
                <form className={registerStyles.form} onSubmit={e => e.preventDefault()}>
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
                        htmlType="submit" 
                        type="primary" 
                        size="medium" 
                        extraClass='mb-20'
                        onClick={() => dispatch(registerUser(email, password, name))}
                    > 
                        Зарегистрироваться
                    </Button>
                </form>
                <div className={`${registerStyles.paragraph} mb-4`}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link className={registerStyles.link} to='/login'>Войти</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Register
