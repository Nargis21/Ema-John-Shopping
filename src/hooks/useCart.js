import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = [];
        const keys = Object.keys(storedCart)
        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                for (const id in storedCart) {
                    const addedProducts = products.find(product => product._id === id)
                    if (addedProducts) {
                        const quantity = storedCart[id]
                        addedProducts.quantity = quantity
                        saveCart.push(addedProducts)
                    }
                }
                setCart(saveCart)
            })
    }, [])
    return [cart, setCart]
}
export default useCart
