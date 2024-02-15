import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return <>
        <h2>Administration Zone</h2>
        <Outlet></Outlet>
    </>
}

export default AdminLayout;