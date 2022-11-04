import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'

const modalRoot = document.getElementById('react-modals')

const withOverlay = WrappedComponent => props => {
    const { setIsOpen } = props

    return PortalReactDOM.createPortal(
        <div className={modalOverlayStyles.container} onClick={() => setIsOpen(false)}>
            <WrappedComponent {...props}/>
        </div>,
        modalRoot
    )
}

export default withOverlay;