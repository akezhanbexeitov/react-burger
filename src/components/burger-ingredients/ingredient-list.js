import burgerIngredientsStyles from './burger-ingredients.module.css'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'
import Modal from '../modal/modal'
import { forwardRef, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import withOverlay from '../modal-overlay/with-overlay'
import Ingredient from './ingredient'

const WithOverlayModal = withOverlay(Modal)

const IngredientList = forwardRef((props, ref) => {
    const { ingredientType, title } = props
    const [isOpen, setIsOpen] = useState(false)

    const modal = (
        <WithOverlayModal header="Детали ингредиента" setIsOpen={setIsOpen}>
            <IngredientDetails />
        </WithOverlayModal>
    )
    
    return (
        <>
            <h2 ref={ref} className='mt-10 mb-6'>{title}</h2>
            <ul className={burgerIngredientsStyles.list}>
                {ingredientType.map(item => {
                    return (
                        <Ingredient setIsOpen={setIsOpen} ingredient={item} key={item['_id']}/>
                    )
                })}
            </ul>
            {isOpen && modal}
        </>
    )
})

IngredientList.propTypes = {
    ingredientType: propTypes.arrayOf(ingredientType).isRequired,
    title: propTypes.string.isRequired
}

export default IngredientList;
