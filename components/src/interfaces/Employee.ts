export default interface Employee {
    name: string
    surname: string
    email: string
    department: string
    active: boolean
}

export default function employee() {
    return {name: "", surname: "", email: "", department: "", active: false}
}