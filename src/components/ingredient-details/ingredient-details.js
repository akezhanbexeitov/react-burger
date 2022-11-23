import ingredientDetailsStyles from './ingredient-details.module.css'
import { useSelector } from 'react-redux'

const IngredientDetails = () => {
    const ingredientDetails = useSelector(store => store.ingredientDetails)

    return (
        <div className={ingredientDetailsStyles.container}>
            <div className={ingredientDetailsStyles.main}>
                <div className='mb-4'>
                    <img src={ingredientDetails.image_large} alt={ingredientDetails.name} width='480px' height='240px'/>
                </div>
                <h2 className={`${ingredientDetailsStyles.name} text text_type_main-medium mb-8`}>{ingredientDetails.name}</h2>
                <div>
                    <ul className={`${ingredientDetailsStyles.list} text text_type_main-default text_color_inactive`}>
                        <li>
                            <p>Калории,ккал</p>
                            <p>{ingredientDetails.calories}</p>
                        </li>
                        <li>
                            <p>Белки, г</p>
                            <p>{ingredientDetails.proteins}</p>
                        </li>
                        <li>
                            <p>Жиры, г</p>
                            <p>{ingredientDetails.fat}</p>
                        </li>
                        <li>
                            <p>Углеводы, г</p>
                            <p>{ingredientDetails.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;
