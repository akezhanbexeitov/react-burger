import profileStyles from './profile.module.css'
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useForm } from "../../hooks/use-form"
import { useDispatch, useSelector } from "../../utils/types"
import { updateUserInfo } from '../../services/actions/auth'

const PersonalDetails = () => {
    const user = useSelector(store => store.auth.user)
    const dispatch = useDispatch()

    const {values, handleChange, setValues} = useForm({
        name: user.name,
        email: user.email,
        password: '123456'
    })

    const resetUserInfo = () => setValues({
        ...values, 
        name: user.name,
        email: user.email
    })

    return (
        <section className={`${profileStyles.personal_details} mt-20`}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={handleChange}
                icon='EditIcon'
                value={values.name}
                name={'name'}
                extraClass="mb-6"
            />
            <EmailInput
                onChange={handleChange}
                value={values.email}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={handleChange}
                value={values.password}
                name={'password'}
                icon="EditIcon"
                placeholder='Пароль'
                extraClass="mb-6"
            />
            <div className={profileStyles.buttons}>
                <Button 
                    htmlType="button" 
                    type="secondary" 
                    size="medium"
                    onClick={resetUserInfo}
                >
                    Отмена
                </Button>
                <Button 
                    htmlType="button" 
                    type="primary" 
                    size="medium" 
                    onClick={() => dispatch(updateUserInfo(values.name, values.email))}
                >
                    Сохранить
                </Button>
            </div>
        </section>
    )
}

export default PersonalDetails