import modalStyles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, ReactNode } from 'react'

type TModalProps = {
    header?: string
    handleModalClose(): void
    children: ReactNode
}

const Modal: FC<TModalProps> = ({ header, handleModalClose, children }) => {
    return (
        <div className={`${modalStyles.modal} pl-10 pr-10 pt-10 pb-15`} onClick={e => e.stopPropagation()}>
            <div className={modalStyles.header}>
                <header className='text text_type_main-large'>{header}</header>
                <div className={modalStyles.close} onClick={() => {
                    handleModalClose()
                }}>
                    <CloseIcon type="primary" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Modal;
