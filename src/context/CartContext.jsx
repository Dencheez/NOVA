import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    const [modalCart, setModalCart] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Исправлено: добавлен аргумент product
    const addToCart = (product) => {
        setCartItems(prev => {
            const existingIndex = prev.findIndex(item => item.id === product.id);

            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += 1;
                return updated;
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // Исправлено: аргумент назван productId, а не id
    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ 
                cartItems,
                addToCart,
                modalCart, 
                setModalCart,
                removeFromCart,
                totalCount
            }}
        >
            {children}

            {/* Возвращенный кусок модалки */}
            {modalCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Cart</h2>
                        <p className="mb-4">You have {totalCount} items in your cart.</p>
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
    );
}

export const useCart = () => useContext(CartContext);