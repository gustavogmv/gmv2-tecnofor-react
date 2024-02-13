const Events = () => {
    const handleClick = (ev: MouseEvent) => {
        console.log('Button clicked!!!')
        console.log(ev)
    }

    return <div>
        {/*note 'function definition' is provided (not execution)*/}
        <button onClick={handleClick}>Click Here!</button>
    </div>
}

export default Events