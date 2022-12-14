import { useState } from "react"
import { Link } from 'react-router-dom'
import forgotPasswordStyles from './forgot-password.module.css'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { BASE_URL } from "../../constants/constants"
import { useHistory } from 'react-router-dom'
import LoadingSpinner from "../../components/loading-spinner/loading-spinner"
import { request } from "../../utils/server-requests"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onClick = (email) => {
        setIsLoading(true)
        const url = `${BASE_URL}/password-reset`
        const body = { email: email }
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
                history.push('/reset-password')
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
            })
    }

    return (
        <div className={forgotPasswordStyles.wrapper}>
            { isLoading ? <LoadingSpinner /> : 
                <div className={forgotPasswordStyles.container}>
                    <h2 className={`${forgotPasswordStyles.heading} mb-6`}>Восстановление пароля</h2>
                    <form className={forgotPasswordStyles.form} onSubmit={e => e.preventDefault()}>
                        <EmailInput
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            name={'email'}
                            isIcon={false}
                            extraClass='mb-6'
                            placeholder="Укажите e-mail"
                        />
                        <Button 
                            htmlType="submit" 
                            type="primary" 
                            size="medium" 
                            extraClass='mb-20'
                            onClick={() => onClick(email)}
                        > 
                            Восстановить
                        </Button>
                    </form>
                    <div className={`${forgotPasswordStyles.paragraph} mb-4`}>
                        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                        <Link className={forgotPasswordStyles.link} to='/login'>Войти</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default ForgotPassword
