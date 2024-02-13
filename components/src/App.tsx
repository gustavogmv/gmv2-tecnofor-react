import {MouseEvent} from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from "./components/ProfileCard.tsx";
import Events from "./components/Events.tsx";
import CustomButton from "./components/CustomButton.tsx";
import Propagacion from "./components/Propagacion.tsx";
import State from "./components/State.tsx";
import Formulario from "./components/Formulario.tsx";
import Employee from "./interfaces/Employee.ts";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <ProfileCard employee={{
                name: "Arnold",
                surname: "Schwarzenegger",
                email: "arnold@cinema.cin",
                department: "Conan",
                active: false
            }} buttonText={"DOWNLOAD"}>
                <p>"my profile description!"</p>
            </ProfileCard>
            <Events/>
            <CustomButton hdlClick={(ev:MouseEvent)=>{console.log(`this-custom-button ${ev.nativeEvent}`)}} />
            <Propagacion/>
            <State/>
            <Formulario onCreateEmployee={(employee:Employee)=>{console.log(employee)}}/>
        </>
    )
}

export default App
