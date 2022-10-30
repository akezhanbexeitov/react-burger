import burgerIngredientsStyles from './burger-ingredients.module.css'
import Main from './main'
import propTypes from 'prop-types'
import ingredientType from '../../utils/types'

const Mains = (props) => {
    const { data } = props
    return (
        <>
            <h2 className='mt-10 mb-6'>Начинки</h2>
            <ul className={`${burgerIngredientsStyles.list} pl-4 pr-4`}>
                {data.filter(item => {
                    if (item.type === 'main') {
                        return item
                    } else {
                        return null
                    }
                }).map((item, index) => <Main key={index} main={item}/>)}
            </ul>
        </>
    )
}

Mains.propTypes = {
    data: propTypes.arrayOf(ingredientType)
}

export default Mains;