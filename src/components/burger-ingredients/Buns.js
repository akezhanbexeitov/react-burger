import burgerIngredientsStyles from './burger-ingredients.module.css'
import Bun from './bun'
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

Buns.propTypes = {
    data: propTypes.arrayOf(dataStructure)
}

export default Buns;