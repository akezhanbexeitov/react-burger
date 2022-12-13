import modalOverlayStyles from './modal-overlay.module.css'
import PortalReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RESET_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details'

const modalRoot = document.getElementById('react-modals')

const withOverlay = WrappedComponent => props => {
    const { handleModalClose } = props
    const dispatch = useDispatch()

    useEffect(() => {    
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                dispatch({ type: RESET_INGREDIENT_DETAILS })
            }
        };
        window.addEventListener('keyup', handleEsc);

        return () => {
        window.removeEventListener('keyup', handleEsc);
        };
    }, [dispatch]);

    return PortalReactDOM.createPortal(
        <div className={modalOverlayStyles.container} onClick={() => {
            handleModalClose()
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
}

export default withOverlay;
