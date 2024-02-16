// request data to an api, and show it
// once component is loaded, make the request
import {useEffect, useState} from "react";
import {Product} from "../interfaces/Product.ts";


const ProductList = () => {
    const [products, setProducts] = useState<Array<Product>>([])

    // useEffect(() => {
    //     fetch(`https://peticiones.online/api/products`)
    //         .then(response => response.json())
    //         .then(data => setProducts(data.result))
    // }, []);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://peticiones.online/api/products`)
            const data = await response.json()
            setProducts(data.results)
        }

        getData()

    }, []);

    return <div className="product-list">
        {products.map((product) => {
            return <div className="product">
                <h2>{product.name}</h2>
                <img src={product.image} alt={""}/>
                <p>{product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
        })}
    </div>
}

export default ProductList;