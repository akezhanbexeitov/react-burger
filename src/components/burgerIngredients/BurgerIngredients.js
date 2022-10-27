// import propTypes from 'prop-types'

const BurgerIngredients = (props) => {
    console.log(props.data)
    return (
        <main>
            {/* <h2>Hello Ingredients</h2> */}
        </main>
    )
}

// const dataStructure = propTypes.shape({
//     "_id": propTypes.string,
//     "name": propTypes.string,
//     "type": propTypes.string,
//     "proteins": propTypes.number,
//     "fat": propTypes.number,
//     "carbohydrates": propTypes.number,
//     "calories": propTypes.number,
//     "price": propTypes.number,
//     "image": propTypes.string,
//     "image_mobile": propTypes.string,
//     "image_large": propTypes.string,
//     "__v": propTypes.number
// })
// BurgerIngredients.propTypes = propTypes.arrayOf(dataStructure)

export default BurgerIngredients