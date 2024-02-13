import {ChangeEvent, MouseEvent} from "react";

const Events = () => {
    const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked!!!')
        console.log(ev)
    }

    const handleChangeText = (ev: ChangeEvent<HTMLInputElement>) => {
        console.log(ev.nativeEvent)
    }

    return <div>
        <div>
            {/*note 'function definition' is provided (not execution)*/}
            <button onClick={handleClick}>Click Here!</button>
            <button onClick={() => {
                console.log('2nd button clicked!')
            }}>Second button
            </button>
        </div>
        <div>
            {/*Evento sobre escritura en campo de texto*/}
            <input type="text" onChange={handleChangeText}/>
        </div>
    </div>
}

export default Events