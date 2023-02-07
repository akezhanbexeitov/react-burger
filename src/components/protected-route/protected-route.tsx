import { useEffect } from "react"
import { checkUserAuth } from "../../services/actions/auth"
import { Redirect, useLocation, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "../../utils/types"
import { Location } from 'history'

type TLocation = {
    from: Location
}

const ProtectedRoute = ({ onlyUnAuth = false, ...rest }) => {
    const user = useSelector(store => store.auth.user)
    const location = useLocation<TLocation>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserAuth())
    }, [dispatch])

    if (onlyUnAuth && Object.keys(user).length !== 0) {
        const { from } = location.state || { from: { pathname: "/" } }
        return <Redirect to={from} />;
    }

    if (!onlyUnAuth && Object.keys(user).length === 0) {
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