import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAuth } from "../../services/actions/auth"
import { Redirect, useLocation, Route } from 'react-router-dom'
import { TAuthUser } from "../../utils/types"

const ProtectedRoute = ({ onlyUnAuth = false, ...rest }) => {
    const user = useSelector((store: TAuthUser) => store.auth.user)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth())
    }, [dispatch])

    if (onlyUnAuth && user) {
        const { from } = { from: { pathname: "/" } } || location.state
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