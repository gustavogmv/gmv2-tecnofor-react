import {useState} from "react";

const Condicionales = () => {
    const [show, setShow] = useState<boolean>(true)

    let element = null // mutable variable

    console.log(show)
    if (show) {
        element = <p>Paragraph before return...</p>
    }


    return <div>
        <button onClick={()=>{setShow(!show)}}>
            {show ? 'Hide' : 'Show'}
        </button>
        {/*Ternario - if else*/}
        {show ? <p>Show this paragraph when show is true!</p> : <p>show is false!! you know it!</p>}
        {show ? element : element}

        {/*Mediante el operador and*/}
        {show && <p>Parrafo con AND</p>}

        {/*Mediante el uso de una funcion*/}
        {(()=>{return show})()? <p>Autoexecuted true</p> : <p>autoexecuted false!</p>}
        {(()=>{if(show){
            return <p>autoexecuted is true</p>}
            else return <p>autoexecuted is false</p>
        })()}
    </div>
}

export default Condicionales