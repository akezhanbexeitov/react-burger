import burgerIngredientsStyles from './burger-ingredients.module.css'
import Bun from './bun'
import ingredientType from '../../utils/types'
import propTypes from 'prop-types'

const Buns = (props) => {
    const { data } = props
    return (
        <>
            <h2 className='mt-10 mb-6'>Булки</h2>
            <ul className={burgerIngredientsStyles.list}>
                {data.filter(item => {
                    if (item.type === 'bun') {
                        return item
                    } else {
                        return null
                    }
                }).map((item, index) => <Bun key={index} bun={item}/>)}
            </ul>
        </>
    )
}

Buns.propTypes = {
    data: propTypes.arrayOf(ingredientType)
}

export default Buns;