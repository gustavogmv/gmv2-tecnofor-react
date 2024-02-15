import {useLoaderData, useParams} from "react-router-dom";
import {Employee} from "../../interfaces/Employee.ts";

const EmployeesList = () => {

    const params = useParams()

    const employee = useLoaderData() as Employee

    return <div>
        <h3>Employees list ... {params["employeeId"]}</h3>
        <div>
            <p>NAME: {employee.first_name}</p>
            <p>_ID: {employee._id}</p>
            <p>ID: {employee.id}</p>
            <img src={employee.image}/>
        </div>
    </div>
}

export default EmployeesList;