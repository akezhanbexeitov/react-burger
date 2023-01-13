import notFoundStyles from './not-found.module.css'
import { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className={`${notFoundStyles.container} text text_type_main-large`}>
            <p>Ooops. 404 Not Found</p>
        </div>
    )
}

export default NotFound
