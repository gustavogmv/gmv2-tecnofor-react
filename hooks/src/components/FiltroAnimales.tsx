import {useState} from "react";

type ListaProps = { items: string[] }

const Lista = ({items}: ListaProps) => {
    // delay 3 seconds
    const startTime = performance.now()
    while(performance.now() - startTime < 1000){ /* empty */ }

    return <div>
        <ul>
            {items.map((item)=>{return <li>{item}</li>})}
        </ul>
    </div>
}

const FiltroAnimales = () => {
    const animales = ['perro', 'loro', 'leon', 'cocodrilo']

    const [busqueda, setBusqueda] = useState<string>('')

    // cost operation, filter animals list
    const animalesFiltro = animales.filter((animal) => animal.includes(busqueda))

    return <div>
        <Lista items={animalesFiltro}/>
        <label>Filtro Animales: </label>
        <input type="text" onChange={(e) => {
            setBusqueda(e.target.value)
        }}/>
    </div>
}

export default FiltroAnimales;