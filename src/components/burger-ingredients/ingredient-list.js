import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'
import Modal from '../modal/modal'
import { useState } from 'react'
import IngredientDetails from '../ingredient-details/IngredientDetails'
import withOverlay from '../modal-overlay/with-overlay'

const WithOverlayModal = withOverlay(Modal)

const IngredientList = (props) => {
    const { data, title } = props
    const [isOpen, setIsOpen] = useState(false)
    const [ingredient, setIngredient] = useState(null)

    const modal = (
        <WithOverlayModal header="Детали ингредиента" setIsOpen={setIsOpen}>
            {ingredient && <IngredientDetails ingredient={ingredient}/>}
        </WithOverlayModal>
    )
    
    return (
        <>
            <h2 className='mt-10 mb-6'>{title}</h2>
            <ul className={burgerIngredientsStyles.list}>
                {data.map(item => {
                    return (
                        <li className={burgerIngredientsStyles.listItem} key={item['_id']} onClick={() => {
                            setIsOpen(true)
                            setIngredient({...item})
                        }}>
                            <Counter count={1} size="default" />
                            <div className='ml-4 mr-4'>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                                <p className="text text_type_digits-default pr-2">{item.price}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <p className={burgerIngredientsStyles.description}>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
            {isOpen && modal}
        </>
    )
}

IngredientList.propTypes = {
    data: propTypes.arrayOf(ingredientType).isRequired,
    title: propTypes.string.isRequired
}

export default IngredientList;