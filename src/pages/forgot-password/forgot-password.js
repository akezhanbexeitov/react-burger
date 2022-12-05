import { useState } from "react"
import { Link } from 'react-router-dom'
import forgotPasswordStyles from './forgot-password.module.css'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { BASE_URL } from "../../constants/constants"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const onClick = (email) => {
        const url = `${BASE_URL}/password-reset`
        const body = { email: email }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch(url, requestOptions)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка ${res.status}`)
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <div className={forgotPasswordStyles.wrapper}>
            <div className={forgotPasswordStyles.container}>
                <h2 className={`${forgotPasswordStyles.heading} mb-6`}>Восстановление пароля</h2>
                <EmailInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                    placeholder="Укажите e-mail"
                />
                <Button 
                    htmlType="button" 
                    type="primary" 
                    size="medium" 
                    extraClass='mb-20'
                    onClick={() => onClick(email)}
                > {/* TODO: fix this button */}
                    Восстановить
                </Button>
                <div className={`${forgotPasswordStyles.paragraph} mb-4`}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link className={forgotPasswordStyles.link} to='/login'>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
