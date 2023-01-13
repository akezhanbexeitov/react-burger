import loginStyles from './login.module.css'
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../services/actions/auth'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import { useForm } from '../../hooks/use-form'
import { FormEvent, FC } from 'react'

type TAuthLoginUserRequest = {
    auth: { loginUserRequest: boolean }
}

const Login: FC = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((store: TAuthLoginUserRequest) => store.auth.loginUserRequest)
    const history = useHistory()
    const location = useLocation()
    const {values, handleChange} = useForm({
        email: '',
        password: ''
    });

    const onLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(loginUser(values.email, values.password))
        const { from } = { from: { pathname: '/' } } || location.state
        history.push(from)
    }

    return (
        <div className={loginStyles.wrapper}>
            { isLoading ? <LoadingSpinner /> : 
                <div className={loginStyles.container}>
                    <h2 className={`${loginStyles.heading} mb-6`}>Вход</h2>
                    <form className={loginStyles.form} onSubmit={onLogin}>
                        <EmailInput
                            onChange={handleChange}
                            value={values.email}
                            name={'email'}
                            isIcon={false}
                            extraClass='mb-6'
                        />
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password}
                            name={'password'}
                            extraClass="mb-6"
                        />
                        <Button 
                            htmlType="submit" 
                            type="primary" 
                            size="medium" 
                            extraClass='mb-20'
                        > 
                            Войти
                        </Button>
                    </form>
                    <div className={`${loginStyles.paragraph} mb-4`}>
                        <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?</p>
                        <Link className={loginStyles.link} to='/register'>Зарегистрироваться</Link>
                    </div>
                    <div className={loginStyles.paragraph}>
                        <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                        <Link className={loginStyles.link} to='/forgot-password'>Восстановить пароль</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login
