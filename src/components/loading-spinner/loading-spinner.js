import loadingSpinnerStyles from './loading-spinner.module.css'

const LoadingSpinner = () => {
    return (
        <div className={loadingSpinnerStyles.container}>
            <div className={loadingSpinnerStyles.loadingSpinner}></div>
        </div>
    )
}

export default LoadingSpinner
