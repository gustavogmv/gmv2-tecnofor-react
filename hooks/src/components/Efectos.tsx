import {useEffect, useState} from "react";

const Efectos = () => {

    const [mensaje, setMensaje] = useState('')

    // Execute function after component renders
    useEffect(()=>{
        /**
         * 1- Despues de renderizar el componnente se ejecuta 'useEffect'
         * 2- Cuando se modifican las variables definidas como dependencia del 'useEffect' se
         * vuelve a ejecutar
         */
        console.log("component is already Rendered!")
    })

    return <div>
        <p>Mensaje del componente... {mensaje}</p>
        <input type="text" onChange={(e)=>{setMensaje(e.target.value)}} />
    </div>
}

export default Efectos;