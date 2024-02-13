// how to manage state in React example!
import {useState, MouseEvent} from "react";

const createArray = () =>
//function createArray() : string[]
{
    const items : string[] = []
    for (let i = 0; i < 15; i++) {
        items.push(`Index ${i}`)
    }
    return items
}

const State = () => {
    const [counter, setCounter] = useState<number>(0)
    const [msg, setMessage] = useState<string>("msg-")

    // state con valor por defecto calculado
    const [items, setItems] = useState<string[]>(createArray)


    function hdlClick(ev: MouseEvent) {
        setCounter(counter + 1)
        if (msg.length > 20) setMessage('msg-');
        else setMessage(msg + '-')
    }

    console.log("Render State....")

    return <div>
        <p>
            Valor del contador: {counter} Message: {msg}
        </p>
        <p>{items}</p>
        <button onClick={hdlClick}>Increment Counter</button>
    </div>
}

export default State