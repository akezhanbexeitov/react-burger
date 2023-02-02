import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'
import { useEffect } from 'react'
import { FC, ReactNode } from 'react'
import { useDispatch } from '../../utils/types'

const modalRoot = document.getElementById('react-modals')

type TWithOverlayProps = {
    header?: string
    handleModalClose(): void
    children: ReactNode
}

const withOverlay = (WrappedComponent: FC<any>) => (props: TWithOverlayProps) => {
    const { handleModalClose } = props
    const dispatch = useDispatch()

    useEffect(() => {    
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleModalClose()
            }
        };
        window.addEventListener('keyup', handleEsc);

        return () => {
        window.removeEventListener('keyup', handleEsc);
        };
    }, [dispatch, handleModalClose]);

    return PortalReactDOM.createPortal(
        <div className={modalOverlayStyles.container} onClick={() => {
            handleModalClose()
        }}>
            <WrappedComponent {...props}/>
        </div>,
        modalRoot!
    )
}

export default withOverlay;
