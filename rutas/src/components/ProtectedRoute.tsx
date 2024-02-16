import {Navigate, Outlet} from "react-router-dom";

type ProtectedRouteProps = { isAllowed: boolean, redirectionPath?: string }
const ProtectedRoute = ({isAllowed, redirectionPath = 'login'}: ProtectedRouteProps) => {
    if (!isAllowed) {
        // jsx when route not allowed
        return <Navigate to={redirectionPath} replace/>
    }
    // jsx when route is allowed. Use property children
    // make room for children using 'Outlet'
    return <Outlet></Outlet>
}

export default ProtectedRoute;