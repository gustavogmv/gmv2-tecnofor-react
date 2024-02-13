// Modificar mediante 'useState' objetos complejos y ararys

import {ChangeEvent, FormEvent, useState} from "react";
import Employee from "../interfaces/Employee.ts";
import employee from "../interfaces/Employee.ts";

const Formulario = () => {
    const [_employee, setEmployee] = useState<Employee>(employee())

    const modifyfield = (ev: ChangeEvent<HTMLInputElement>) => {
        // const employeeCopy = {..._employee}
        const {value, name: fieldName} = ev.target
        // const key = fieldName
        // employeeCopy[key] = value
        setEmployee({..._employee, [fieldName]: value})
    }

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        console.log(_employee)
    }

    return <div>
        {/*block default 'form' POST request*/}
        <form onSubmit={handleSubmit}>
            <div><label>Name</label><input type="text" name="name" onChange={modifyfield}/></div>
            <div><label>Surname</label><input type="text" name="surname" onChange={modifyfield}/></div>
            <div><label>email</label><input type="text" name="email" onChange={modifyfield}/></div>
            <div><label>Department</label><input type="text" name="department" onChange={modifyfield}/></div>
            <div><label>Active</label><input type="text" name="active" onChange={modifyfield}/></div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default Formulario
