import {useParams} from "react-router-dom";

const EmployeesList = () => {

    const params = useParams()

    return <div>
        <h3>Employees list ... {params["employeeId"]}</h3>
    </div>
}

export default EmployeesList;