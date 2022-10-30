import burgerIngredientsStyles from './burger-ingredients.module.css'
import Sauce from './sauce'
import propTypes from 'prop-types'

const Sauces = (props) => {
    const { data } = props
    return (
        <>
            <h2 className='mt-10 mb-6'>Соусы</h2>
            <ul className={`${burgerIngredientsStyles.list} pl-4 pr-4`}>
                {data.filter(item => {
                    if (item.type === 'sauce') {
                        return item
                    } else {
                        return null
                    }
                }).map((item, index) => <Sauce key={index} sauce={item}/>)}
            </ul>
        </>
    )
}

const dataStructure = propTypes.shape({
    _id: propTypes.string,
    name: propTypes.string,
    types: propTypes.string,
    proteins: propTypes.number,
    fat: propTypes.number,
    carbohydrates: propTypes.number,
    calories: propTypes.number,
    price: propTypes.number,
    image: propTypes.string,
    image_mobile: propTypes.string,
    image_large: propTypes.string,
    __v: propTypes.number
})

Sauces.propTypes = {
    data: propTypes.arrayOf(dataStructure)
}

export default Sauces;
    