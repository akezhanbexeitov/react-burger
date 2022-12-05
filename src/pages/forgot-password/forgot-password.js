import { useState } from "react"
import { Link } from 'react-router-dom'
import forgotPasswordStyles from './forgot-password.module.css'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    
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
                <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'> {/* TODO: fix this button */}
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
