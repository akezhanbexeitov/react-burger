import burgerIngredientsStyles from './burger-ingredients.module.css'
import Bun from './Bun'

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

export default Buns;