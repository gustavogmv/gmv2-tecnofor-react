import {useRef} from "react";
import {useDispatchContext} from "./TaskProvider.tsx";

const NewTask = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatchContext()

    const handleClick = () => {
        dispatch && dispatch({type: 'ADD', data: inputRef.current!.value})
    }

    return <div>
        <label>Task goal: </label>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Send</button>
    </div>
}

export default NewTask;