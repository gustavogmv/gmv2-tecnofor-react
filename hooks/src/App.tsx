import './App.css'
import Efectos from "./components/Efectos.tsx";
import Intervalo from "./components/Intervalo.tsx";
import {useState} from "react";
import Scroll from "./components/Scroll.tsx";
import PrecioIva from "./components/PrecioIva.tsx";
import CuentaRender from "./components/CuentaRender.tsx";
import Factorial from "./components/Factorial.tsx";
import FiltroAnimales from "./components/FiltroAnimales.tsx";
import useFetch from "./hooks/useFetch.ts";
import useGeolocation from "./hooks/useGeolocation.ts";

function App() {
    // const [count, setCount] = useState(0)

    const [showDate, setShowDate] = useState(true)
    const btnmsg = showDate ? 'Hide' : 'Show'
    const [page, setPage] = useState<number>(1)
    const data = useFetch('https://peticiones.online/api/products', page)
    const position = useGeolocation()
    console.log(position)
    return (
        <>
            <div>
                <button onClick={()=>{setPage(page-1)}}>Prev</button>
                <span>Page: {page}</span>
                <button onClick={()=>{setPage(page+1)}}>Next</button>
            </div>
            {data && data.results.map((item: any) => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt=""/>
                </div>
            ))}
            <button onClick={() => {
                setShowDate(!showDate)
            }}>{btnmsg}</button>
            <Efectos/>
            {showDate && <Intervalo/>}
            <Scroll/>
            <PrecioIva precio={22.222}/>
            <CuentaRender/>
            <Factorial/>
            <FiltroAnimales/>
        </>
    )
}

export default App
