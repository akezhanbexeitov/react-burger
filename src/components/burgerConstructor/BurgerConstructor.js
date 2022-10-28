import burgerConstructorStyles from './burger-constructor.module.css'
import IngredientConstructor from './IngredientConstructor'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = (props) => {
    const { data } = props
    console.log(data)

    return (
        <>
            <div className={`${burgerConstructorStyles.container} pl-4 pr-4 pt-25 pb-10`}>
                <IngredientConstructor data={data}/>
            </div>
            <div className={`${burgerConstructorStyles.price} pl-4 pr-4`}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary" />
                <Button className='button button_type_primary button_size_medium ml-10' type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </>

    )
}

export default BurgerConstructor;