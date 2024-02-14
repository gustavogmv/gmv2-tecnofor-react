import {useEffect, useState} from "react";

const Intervalo = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        setInterval(()=>{setCurrentDate(new Date())}, 2000)
    }, []);
    return <div>
        <p>{currentDate.toLocaleDateString()} {currentDate.getSeconds()} {currentDate.getMilliseconds()}</p>
    </div>
}


export default Intervalo;