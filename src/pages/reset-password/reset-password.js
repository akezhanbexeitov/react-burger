import resetPasswordStyles from './reset-password.module.css'
import { PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [code, setCode] = useState(null)

    return (
        <div className={resetPasswordStyles.wrapper}>
            <div className={resetPasswordStyles.container}>
                <h2 className={`${resetPasswordStyles.heading} mb-6`}>Восстановление пароля</h2>
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Input 
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={e => setCode(e.target.value)}
                    value={code}
                    extraClass="mb-6"
                />
                <Button htmlType="button" type="primary" size="medium" extraClass='mb-20'> {/* TODO: fix this button */}
                    Сохранить
                </Button>
                <div className={`${resetPasswordStyles.paragraph} mb-4`}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                    <Link className={resetPasswordStyles.link} to='/login'>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
