import {MouseEvent} from "react";

const Propagacion = () => {
    return <div onClick/*Capture*/={() => console.log("Se pulsa boton DIV")}>
        <button onClick={(ev: MouseEvent) => {
            console.log("se pulsa boton")
            ev.stopPropagation() // click is only captured in this button, parent DIV is not notified!
        }}>Pulsa!
        </button>
    </div>
}

export default Propagacion