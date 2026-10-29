import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(() => {
        const saved = localStorage.getItem("cartCounter")
        return saved ? Number(saved) : 0
    });

    const [modalCart, setModalCart] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartCounter", cartCounter)
    }, [cartCounter])

    const addToCart = () => {
        setCartCounter(prev => prev + 1);
    }

    return (
        <CartContext.Provider value={{ cartCounter, addToCart }}>
            {children}
            {modalCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Cart</h2>
                        <p className="mb-4">You have {cartCounter} items in your cart.</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => setModalCart(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);