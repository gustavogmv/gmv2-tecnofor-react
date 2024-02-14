import {memo, useMemo, useState} from "react";

type ListaProps = { items: string[] }

// 'memo' allows rending List only when props changes!
const Lista = memo(({items}: ListaProps) => {
    // delay 3 seconds
    const startTime = performance.now()
    while (performance.now() - startTime < 200) { /* empty */
    }

    return <div>
        <ul>
            {items.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
    </div>
})

const FiltroAnimales = () => {
    const animales = ['perro', 'loro', 'leon', 'cocodrilo']
    const [cont, setCont] = useState(0)

    const [busqueda, setBusqueda] = useState<string>('')

    // cost operation, filter animals list
    const animalesFiltro = useMemo(() => {
        return animales.filter((animal) => animal.includes(busqueda))
    }, [busqueda])

    return <div>
        <button onClick={()=>{setCont(cont+1)}}> Increment  {cont} </button>
        <Lista items={animalesFiltro}/>
        <label>Filtro Animales: </label>
        <input type="text" onChange={(e) => {
            setBusqueda(e.target.value)
        }}/>
    </div>
}

export default FiltroAnimales;