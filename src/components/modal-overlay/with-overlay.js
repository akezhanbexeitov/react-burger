import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const modalRoot = document.getElementById('react-modals')

const withOverlay = WrappedComponent => props => {
    const { handleModalClose } = props
    const dispatch = useDispatch()

    useEffect(() => {    
        const handleEsc = (e) => {
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
        modalRoot
    )
}

withOverlay.propTypes = { handleModalClose: propTypes.func.isRequired }

export default withOverlay;
