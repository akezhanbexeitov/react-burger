import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { useEffect } from 'react'

const modalRoot = document.getElementById('react-modals')

const withOverlay = WrappedComponent => props => {
    const { setIsOpen } = props

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
                console.log('escape')
            }
        };
        window.addEventListener('keyup', handleEsc);

        return () => {
        window.removeEventListener('keyup', handleEsc);
        };
    }, [setIsOpen]);

    return PortalReactDOM.createPortal(
        <div className={modalOverlayStyles.container} onClick={() => setIsOpen(false)}>
            <WrappedComponent {...props}/>
        </div>,
        modalRoot
    )
}

withOverlay.propTypes = {
    children: propTypes.node.isRequired,
    header: propTypes.string.isRequired,
    setIsOpen: propTypes.func.isRequired
}

export default withOverlay;