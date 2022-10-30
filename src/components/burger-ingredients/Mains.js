import burgerIngredientsStyles from './burger-ingredients.module.css'
import Main from './main'
import propTypes from 'prop-types'

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

Mains.propTypes = {
    data: propTypes.arrayOf(dataStructure)
}

export default Mains;