import ingredientDetailsStyles from './ingredient-details.module.css'
import ingredientType from '../../utils/types'

const IngredientDetails = (props) => {
    const { ingredient } = props

    return (
        <div className={ingredientDetailsStyles.container}>
            <div className={ingredientDetailsStyles.main}>
                <div className='mb-4'>
                    <img src={ingredient.image} alt={ingredient.name}/>
                </div>
                <h2 className={`${ingredientDetailsStyles.name} text text_type_main-medium mb-8`}>{ingredient.name}</h2>
                <div>
                    <ul className={`${ingredientDetailsStyles.list} text text_type_main-default text_color_inactive`}>
                        <li>
                            <p>Калории,ккал</p>
                            <p>{ingredient.calories}</p>
                        </li>
                        <li>
                            <p>Белки, г</p>
                            <p>{ingredient.proteins}</p>
                        </li>
                        <li>
                            <p>Жиры, г</p>
                            <p>{ingredient.fat}</p>
                        </li>
                        <li>
                            <p>Углеводы, г</p>
                            <p>{ingredient.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientType
}

export default IngredientDetails;