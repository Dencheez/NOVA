import { useCart } from "../context/CartContext";
export const CartModal = () => {
    const { cartItems, removeFromCart, modalCart, setModalCart } = useCart();

    if (!modalCart) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Корзина</h2>
                        <button 
                            onClick={() => setModalCart(false)}
                            className="text-gray-500 hover:text-black font-bold"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Если корзина пуста */}
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Корзина пока пуста</p>
                    ) : (
                        /* Список горизонтальных карточек */
                        <div className="flex flex-col gap-4">
                            {cartItems.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="flex items-center gap-4 border p-3 rounded-lg shadow-sm bg-white"
                                >
                                    {/* Фото товара */}
                                    <img 
                                        src={item.image || "https://via.placeholder.com/80"} 
                                        alt={item.title} 
                                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                    />
                                    
                                    {/* Информация о товаре */}
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm mt-1">{item.price} $ × {item.quantity}</p>
                                    </div>

                                    {/* Кнопка удаления */}
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 text-sm p-1"
                                    >
                                        Удалить
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button 
                    onClick={() => setModalCart(false)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 mt-6"
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};