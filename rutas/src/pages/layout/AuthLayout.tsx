import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return <>
        <h2>Authentication Zone</h2>
        <div style={{backgroundColor: "aliceblue"}}>
            <Outlet></Outlet>
        </div>
    </>
}

export default AuthLayout;