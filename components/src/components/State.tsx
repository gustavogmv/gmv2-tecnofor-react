// how to manage state in React example!
import {useState, MouseEvent} from "react";

const State = () => {
    const [counter, setCounter] = useState<number>(0)
    const [msg, setMessage] = useState<string>("msg-")


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
        <button onClick={hdlClick}>Increment Counter</button>
    </div>
}

export default State