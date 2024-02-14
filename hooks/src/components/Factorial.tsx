import {useState} from "react";

function factorialOf(n: number): number {
    console.log('factorialOf!');
    return n > 1 ? n * factorialOf(n - 1) : 1;
}

const Factorial = () => {
    const [num, setNum] = useState<number>(1)

    // no esta en 'useEffect' pq no queremos que dispare renders,...
    const factorial = factorialOf(num)

    return <div>
        <p>Factorial de {num} = {factorial}</p>

        <input type="number" onChange={(e) => {
            setNum(Number(e.target.value))
        }}/>
    </div>
}

export default Factorial;