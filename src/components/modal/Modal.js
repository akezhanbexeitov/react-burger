import modalStyles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = (props) => {
    const { header, setIsOpen, children } = props

    return (
        <div className={`${modalStyles.modal} pl-10 pr-10 pt-10 pb-15`} onClick={e => e.stopPropagation()}>
            <div className={modalStyles.header}>
                <header className='text text_type_main-large'>{header}</header>
                <div className={modalStyles.close} onClick={() => setIsOpen(false)}>
                    <CloseIcon type="primary" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Modal;