import burgerIngredientsStyles from './burger-ingredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'
import Modal from '../modal/modal'
import { forwardRef, useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import withOverlay from '../modal-overlay/with-overlay'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { ADD_INGREDIENT_TO_CONSTRUCTOR } from '../../services/actions/ingredients-constructor'
import { ADD_INGREDIENT_DETAILS } from '../../services/actions/ingredient-details'

const WithOverlayModal = withOverlay(Modal)

const IngredientList = forwardRef((props, ref) => {
    const { ingredientType, title } = props
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

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
                        <li className={burgerIngredientsStyles.listItem} key={item['_id']} onClick={() => {
                            setIsOpen(true)
                            dispatch({
                                type: ADD_INGREDIENT_TO_CONSTRUCTOR,
                                payload: {
                                    image: item.image,
                                    name: item.name,
                                    price: item.price,
                                    type: item.type,
                                    id: item['_id'],
                                    key: uuidv4()
                                }
                            })
                            dispatch({
                                type: ADD_INGREDIENT_DETAILS,
                                payload: {
                                    name: item.name,
                                    image_large: item.image_large,
                                    calories: item.calories,
                                    proteins: item.proteins,
                                    fat: item.fat,
                                    carbohydrates: item.carbohydrates
                                }
                            })
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
})

IngredientList.propTypes = {
    ingredientType: propTypes.arrayOf(ingredientType).isRequired,
    title: propTypes.string.isRequired
}

export default IngredientList;
