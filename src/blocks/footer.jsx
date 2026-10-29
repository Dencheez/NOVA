export const Footer = () => {
    // Данные для колонок
    const shopLinks = [
        { id: "1", title: "Men", href: "#" },
        { id: "2", title: "Women", href: "#" },
        { id: "3", title: "New Arrivals", href: "#" },
        { id: "4", title: "Best Sellers", href: "#" },
        { id: "5", title: "Sale", href: "#" },
    ];

    const supportLinks = [
        { id: "1", title: "Contact Us", href: "#" },
        { id: "2", title: "Shipping", href: "#" },
        { id: "3", title: "Returns", href: "#" },
        { id: "4", title: "Size Guide", href: "#" },
        { id: "5", title: "FAQs", href: "#" },
    ];

    const companyLinks = [
        { id: "1", title: "About", href: "#" },
        { id: "2", title: "Our Technology", href: "#" },
        { id: "3", title: "Sustainability", href: "#" },
        { id: "4", title: "Careers", href: "#" },
        { id: "5", title: "Blog", href: "#" },
    ];

    return (
        <footer className="bg-white border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Основная сетка футера: используем flex и justify-between для распределения */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                    
                    {/* Колонка 1: Логотип и описание (левая часть) */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <span className="text-xl font-bold tracking-widest">NOVA</span>
                        <p className="text-sm text-gray-500">
                            Modern footwear for a bolder tomorrow. Designed for comfort, performance and everyday style.
                        </p>
                    </div>

                    {/* Правая часть: обертка для трех колонок со ссылками, тоже раздвигаем через justify-between */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-8 md:gap-16">
                        
                        {/* Колонка 2: Shop */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Shop</h3>
                            <ul className="flex flex-col gap-2">
                                {shopLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Колонка 3: Support */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
                            <ul className="flex flex-col gap-2">
                                {supportLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Колонка 4: Company */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
                            <ul className="flex flex-col gap-2">
                                {companyLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Нижняя полоса с копирайтом */}
                <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© 2026 Nova. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-gray-400">
                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};