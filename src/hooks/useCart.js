import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = [];
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity
                saveCart.push(addedProducts)
            }
        }
        setCart(saveCart)
    }, [products])
    return [cart, setCart]
}
export default useCart
