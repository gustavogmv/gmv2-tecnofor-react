import {useReducer, useRef} from "react";
import {v4 as uuidv4} from "uuid";

interface Product {
    id: string
    name: string
    available: boolean
}

type State = Array<Product>

type Action =
    | { type: "ADD", data: string }
    | { type: "REMOVE", data: string }

const reducer = (state: State, action: Action)  => {
    switch (action.type) {
        case "ADD": {
            return [...state, {id: uuidv4(), name: action.data, available: true}]
        }
        case "REMOVE": {
            return state.filter((product) => {
                return product.id !== action.data
            })
        }
    }
}


const ListaCompra = () => {
    const [products, dispatch] = useReducer(reducer, [])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        dispatch({type: 'ADD', data: inputRef.current!.value})
    }

    return <div>
        <label>Producto:</label>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Create</button>
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id}
                    onClick={()=>dispatch({type:'REMOVE',data:product.id})}>{product.name}</li>
                ))}
            </ul>
        </div>
    </div>
}

export default ListaCompra;