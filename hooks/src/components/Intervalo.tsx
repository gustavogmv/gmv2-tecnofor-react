import {useEffect, useState} from "react";

const Intervalo = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
            console.log("Interval...")
        }, 500)
        return () => {
            clearInterval(interval)
        }
    }, []);
    return <div>
        <p>{currentDate.toLocaleDateString()} {currentDate.getSeconds()} {currentDate.getMilliseconds()}</p>
    </div>
}


export default Intervalo;