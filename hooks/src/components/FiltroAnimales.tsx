import {memo, useCallback, useMemo, useState} from "react";

type ListaProps = {
    items: string[],
    onItemClicked: (item: string) => void
}

// 'memo' allows rending List only when props changes!
const Lista = memo(({items, onItemClicked}: ListaProps) => {
    // delay 3 seconds
    const startTime = performance.now()
    while (performance.now() - startTime < 200) { /* empty */
    }

    return <div>
        <ul>
            {items.map((item) => <li onClick={() => onItemClicked(item)}>{item}</li>)}
        </ul>
    </div>
})

const FiltroAnimales = () => {
    const animales = ['perro', 'loro', 'leon', 'cocodrilo']
    const [cont, setCont] = useState(0)

    const [busqueda, setBusqueda] = useState<string>('')

    // cost operation, filter animals list
    // 'useMemo' only caches values
    const animalesFiltro = useMemo(() => {
        return animales.filter((animal) => animal.includes(busqueda))
    }, [animales, busqueda])

    const handleOnItemClicked = useCallback((item: string) => {
        console.log('item:', item)
    }, [])

    return <div>
        <button onClick={() => {
            setCont(cont + 1)
        }}> Increment {cont} </button>
        <Lista items={animalesFiltro} onItemClicked={handleOnItemClicked}/>
        <label>Filtro Animales: </label>
        <input type="text" onChange={(e) => {
            setBusqueda(e.target.value)
        }}/>
    </div>
}

export default FiltroAnimales;