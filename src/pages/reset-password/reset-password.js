import resetPasswordStyles from './reset-password.module.css'
import { PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { BASE_URL } from "../../constants/constants"
import LoadingSpinner from '../../components/loading-spinner/loading-spinner'
import { request } from '../../utils/server-requests'
import { useForm } from '../../hooks/use-form'

const ResetPassword = () => {
    const {values, handleChange} = useForm({ password: '' })
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onClick = (e, password, token) => {
        e.preventDefault()
        setIsLoading(true)
        const url = `${BASE_URL}/password-reset/reset`
        const body = { 
            password: password,
            token: token
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        request(url, requestOptions)
            .then(() => {
                setIsLoading(false)
                history.push('/login')
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
            })
    }

    return (
        <div className={resetPasswordStyles.wrapper}>
            { isLoading ? <LoadingSpinner /> :
                <div className={resetPasswordStyles.container}>
                    <h2 className={`${resetPasswordStyles.heading} mb-6`}>Восстановление пароля</h2>
                    <form className={resetPasswordStyles.form} onSubmit={e => onClick(e, values.password, token)}>
                        <PasswordInput
                            onChange={handleChange}
                            value={values.password}
                            name={'password'}
                            extraClass="mb-6"
                        />
                        <Input 
                            type={'text'}
                            placeholder={'Введите код из письма'}
                            onChange={e => setToken(e.target.value)}
                            value={token}
                            extraClass="mb-6"
                        />
                        <Button 
                            htmlType="submit" 
                            type="primary"
                            size="medium" 
                            extraClass='mb-20'
                        > 
                            Сохранить
                        </Button>
                    </form>
                    <div className={`${resetPasswordStyles.paragraph} mb-4`}>
                        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                        <Link className={resetPasswordStyles.link} to='/login'>Войти</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ResetPassword
