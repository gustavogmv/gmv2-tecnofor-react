// count number of renders

import {useEffect, useRef, useState} from "react";

const CuentaRender = () => {
    const [msg, setMsg] = useState('')
    const counter = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const prevMsg = useRef(msg)


    useEffect(() => {
        prevMsg.current = msg
    }, [msg]);

    counter.current = counter.current + 1

    const handleFocusClick = () => {
        inputRef.current?.focus()
    }

    return <div style={{backgroundColor: "blanchedalmond"}}>
        <p>Previous Msg: {prevMsg.current}   Current Msg: {msg}</p>
        <p>{counter.current}</p>
        <input ref={inputRef} type="text" onChange={(e) => {
            setMsg(e.target.value)
        }}/>
        <button onClick={handleFocusClick}>@focus</button>
    </div>
}

export default CuentaRender;