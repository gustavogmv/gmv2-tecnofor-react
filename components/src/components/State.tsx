// how to manage state in React example!
import {useState} from "react";

const State = () => {
    const state = useState<number>(0)

    return <div>
        <p>
            Valor del contador: {state[0]}
        </p>
    </div>
}

export default State