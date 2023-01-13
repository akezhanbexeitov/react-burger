import loadingSpinnerStyles from './loading-spinner.module.css'
import { FC } from 'react'

const LoadingSpinner: FC = () => {
    return (
        <div className={loadingSpinnerStyles.container}>
            <div className={loadingSpinnerStyles.loadingSpinner}></div>
        </div>
    )
}

export default LoadingSpinner
