// example of when not to use 'useEffect'
type PrecioIvaProps = { precio: number }
const PrecioIva = ({precio} : PrecioIvaProps) => {

    return <div>
        <p>{precio}</p>
    </div>
}

export default PrecioIva;