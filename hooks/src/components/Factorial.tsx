import {useMemo, useState} from "react";

function factorialOf(n: number): number {
    console.log('factorialOf!');
    return n > 1 ? n * factorialOf(n - 1) : 1;
}

const Factorial = () => {
    const [num, setNum] = useState<number>(1)
    const [cont, setCont] = useState(0)

    // no esta en 'useEffect' pq no queremos que dispare renders,...
    // the 'useMemo' avoid recompute factorial if num does not change!!!
    const factorial = useMemo(() => {
        return factorialOf(num)
    }, [num])

    return <div>
        <p>Factorial de {num} = {factorial}</p>

        <input type="number" onChange={(e) => {
            setNum(Number(e.target.value))
        }}/>
        <button onClick={() => {
            setCont(cont + 1)
        }}>Increment [{cont}]
        </button>
    </div>
}

export default Factorial;