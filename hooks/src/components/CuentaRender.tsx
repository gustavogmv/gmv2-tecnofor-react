// count number of renders

import {useEffect, useRef, useState} from "react";

const CuentaRender = () => {
    const [msg, setMsg] = useState('')
    const counter = useRef(0)

    counter.current = counter.current+1

    return <div style={{backgroundColor: "blanchedalmond"}}>
        <p>{counter.current}</p>
        <input type="text" onChange={(e)=>{setMsg(e.target.value)}}/>
    </div>
}

export default CuentaRender;