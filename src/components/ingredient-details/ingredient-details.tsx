import ingredientDetailsStyles from './ingredient-details.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TIngredient, TIngredientList } from '../../utils/types'

type TParams = { ingredientId: string } 

const IngredientDetails = () => {
    const ingredients: TIngredient[] = useSelector((store: TIngredientList) => store.ingredientsList.ingredients) 
    const params = useParams<TParams>()
    const ingredient = ingredients.find((item: TIngredient) => item._id === params.ingredientId)

    return (
        <div className={ingredientDetailsStyles.container}>
            { ingredient && 
                <div className={ingredientDetailsStyles.main}>
                    <div className='mb-4'>
                        <img src={ingredient.image_large} alt={ingredient.name} width='480px' height='240px'/>
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
            }
        </div>
    )
}

export default IngredientDetails;