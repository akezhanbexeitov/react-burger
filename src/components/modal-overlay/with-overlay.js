import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RESET_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details'

const modalRoot = document.getElementById('react-modals')

const withOverlay = WrappedComponent => props => {
    const { setIsOpen } = props
    const dispatch = useDispatch()

    useEffect(() => {
        if (!setIsOpen) return;
        
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
                dispatch({ type: RESET_INGREDIENT_DETAILS })
            }
        };
        window.addEventListener('keyup', handleEsc);

        return () => {
        window.removeEventListener('keyup', handleEsc);
        };
    }, [setIsOpen, dispatch]);

    return PortalReactDOM.createPortal(
        <div className={modalOverlayStyles.container} onClick={() => {
            setIsOpen(false)
            dispatch({ type: RESET_INGREDIENT_DETAILS })
        }}>
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
