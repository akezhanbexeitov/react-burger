import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAuth } from "../../services/actions/auth"
import { Redirect, useLocation, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const authChecked = useSelector(store => store.auth.authChecked)
    const user = useSelector(store => store.auth.user)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserAuth())
    }, [])

    if (!user) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }}/>
        )
    }
    
    return <Route {...props} />
}

export default ProtectedRoute