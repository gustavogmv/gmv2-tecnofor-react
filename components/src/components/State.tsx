// how to manage state in React example!
import {useState, MouseEvent} from "react";

const State = () => {
    const [counter, setCounter] = useState<number>(0)

    function hdlClick(ev: MouseEvent) {
        setCounter(counter+1)
    }

    return <div>
        <p>
            Valor del contador: {counter}
        </p>
        <button onClick={hdlClick}>Increment Counter</button>
    </div>
}

export default State