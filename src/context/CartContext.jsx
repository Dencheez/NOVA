import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);

    const addToCart = () => {
        setCartCounter(prev => prev + 1);
    }

    return (
        <CartContext.Provider value={{ cartCounter, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);