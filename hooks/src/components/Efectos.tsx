import {useEffect, useState} from "react";

const Efectos = () => {

    const [mensaje, setMensaje] = useState('')
    const [counter, setCounter] = useState(1)

    // Execute function after component renders
    useEffect(()=>{
        /**
         * 1- Despues de renderizar el componnente se ejecuta 'useEffect'
         * 2- Cuando se modifican las variables definidas como dependencia del 'useEffect' se
         * vuelve a ejecutar
         * 3- Dentro de 'useEffect' podemos definir una funcion clean-up que se ejecuta siempre
         * antes de la funcion del 'useEffect'
         * 4- cuando el componente desaparece , tb se ejcuta la funcion de limpieza
         */
        console.log("component is already Rendered!")
    }, [mensaje])

    useEffect(() => {
        console.log("gets called when clicking button ["+counter+"]")
    }, [counter]);

    return <div>
        <p>Mensaje del componente... {mensaje}</p>
        <input type="text" onChange={(e)=>{setMensaje(e.target.value)}} />
        <button onClick={()=>{setCounter(counter+1)}}>Increment+{counter}</button>
    </div>
}

export default Efectos;