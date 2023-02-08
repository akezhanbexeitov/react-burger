import registerStyles from './register.module.css'
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { registerUser } from '../../services/actions/auth'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import { useForm } from '../../hooks/use-form'
import { FormEvent, FC } from "react"
import { useDispatch, useSelector } from '../../utils/types'

const Register: FC = () => {
    const {values, handleChange} = useForm({
        name: '',
        email: '',
        password: ''
    })
    const isLoading = useSelector(store => store.auth.registerUserRequest)
    const dispatch = useDispatch()

    const onClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(registerUser(values.email, values.password, values.name))
    }

    return (
        <div className={registerStyles.wrapper}>
            { isLoading ? <LoadingSpinner /> :
            <div className={registerStyles.container}>
                <h2 className={`${registerStyles.heading} mb-6`}>Регистрация</h2>
                <form className={registerStyles.form} onSubmit={onClick}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={handleChange}
                        value={values.name}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mb-6"
                    />
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
