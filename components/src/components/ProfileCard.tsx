import Employee from "../interfaces/Employee.ts";
import {ReactNode} from "react";

type ProfileCardProps = { employee: Employee, buttonText?: string, children?: ReactNode }
const ProfileCard = ({employee, buttonText = 'DEFAULT!', children}: ProfileCardProps) => {
    return (<div>
        <h3>{employee.name} {employee.surname}</h3>
        <p>Email: {employee.email}</p>
        <p>Department: {employee.department}</p>
        <p>{employee.active ? "Active" : "Not Active"}</p>
        <article>
            {children}
        </article>
        <button>{buttonText}</button>
    </div>)
}

export default ProfileCard