import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h1>Place Order: {products.length} </h1>
            <h1>Items: {cart.length}</h1>
        </div>
    );
};

export default Orders;