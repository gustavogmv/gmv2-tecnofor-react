import './App.css'
import Efectos from "./components/Efectos.tsx";
import Intervalo from "./components/Intervalo.tsx";
import {useState} from "react";
import Scroll from "./components/Scroll.tsx";
import PrecioIva from "./components/PrecioIva.tsx";
import CuentaRender from "./components/CuentaRender.tsx";
import Factorial from "./components/Factorial.tsx";

function App() {
    // const [count, setCount] = useState(0)

    const [showDate, setShowDate] = useState(true)
    const btnmsg = showDate ? 'Hide' : 'Show'
    return (
        <>
            <button onClick={() => {
                setShowDate(!showDate)
            }}>{btnmsg}</button>
            <Efectos/>
            {showDate && <Intervalo/>}
            <Scroll/>
            <PrecioIva precio={22.222}/>
            <CuentaRender/>
            <Factorial/>
        </>
    )
}

export default App
