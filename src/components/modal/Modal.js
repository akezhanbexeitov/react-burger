import PortalReactDOM from 'react-dom'
import modalStyles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById('react-modals')

const Modal = (props) => {
    const { header, setIsOpen, children } = props

    return PortalReactDOM.createPortal(
        <div className={`${modalStyles.modal} pl-10 pr-10 pt-10 pb-15`}>
            <div className={modalStyles.header}>
                <header className='text text_type_main-large'>{header}</header>
                <div onClick={() => setIsOpen(false)}>
                    <CloseIcon type="primary" />
                </div>
            </div>
            <main>{children}</main>
        </div>,
        modalRoot
    )
}

export default Modal;