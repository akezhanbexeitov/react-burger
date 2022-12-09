import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAuth } from "../../services/actions/auth"
import { Redirect, useLocation, Route } from 'react-router-dom'

const ProtectedRoute = ({ onlyUnAuth = false, ...rest }) => {
    const user = useSelector(store => store.auth.user)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserAuth())
    }, [dispatch])

    if (onlyUnAuth && user) {
        const { from } = location.state || { from: { pathname: "/" } };
        return <Redirect to={from} />;
    }

    if (!onlyUnAuth && !user) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }}/>
        )
    }
    
    return <Route {...rest} />
}

export default ProtectedRoute