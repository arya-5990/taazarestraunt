import { useState } from 'react';
import { useReveal, useRevealGroup } from '../hooks/useReveal';

const categories = [
    { id: 'shawarma', label: 'Shawarma' },
    { id: 'grills', label: 'Grills' },
    { id: 'small-plates', label: 'Small Plates' },
    { id: 'combos', label: 'Combos' },
    { id: 'beverages', label: 'Beverages' },
];

const menuData = {
    shawarma: [
        { name: 'Saj Shawarma', desc: 'Wrapped in saj flatbread with garlic sauce, pickles & veggies', price: '₹199', tags: ['non-veg'] },
        { name: 'Classic Chicken Shawarma', desc: 'Juicy chicken strips with tahini in fresh pita', price: '₹149', tags: ['non-veg', 'bestseller'] },
        { name: 'Falafel Shawarma', desc: 'Crispy falafel with hummus, tomatoes, cucumber in fresh pita', price: '₹129', tags: ['veg', 'healthy'] },
        { name: 'Double Meat Shawarma', desc: 'Chicken & beef combo with premium toppings', price: '₹249', tags: ['non-veg'] },
    ],
    grills: [
        { name: 'Mandi / Mixed Grill Platter', desc: 'Saffron rice with slow-cooked mixed grills — serves 2', price: '₹499', tags: ['non-veg'] },
        { name: 'Fish Tikka', desc: 'Marinated fish fillets, grilled to perfection in our tandoor', price: '₹279', tags: ['non-veg', 'new'] },
        { name: 'Chicken Dynamite', desc: 'Crispy fried chicken in our signature fiery dynamite sauce', price: '₹249', tags: ['non-veg', 'spicy'] },
        { name: 'Seekh Kebab', desc: 'Minced lamb & chicken kebabs grilled on skewers with spices', price: '₹299', tags: ['non-veg'] },
    ],
    'small-plates': [
        { name: 'Hummus & Pita', desc: 'House-made creamy hummus with freshly baked pita', price: '₹149', tags: ['veg', 'healthy'] },
        { name: 'Falafel Platter', desc: 'Crispy falafel balls with tahini dip and fresh salad', price: '₹169', tags: ['veg'] },
        { name: 'Fattoush Salad', desc: 'Fresh greens, tomatoes, cucumber & toasted pita croutons', price: '₹139', tags: ['veg', 'healthy'] },
        { name: 'Samosa (3 pcs)', desc: 'Crispy golden Arabic-style samosas with mint chutney', price: '₹99', tags: ['veg'] },
    ],
    combos: [
        { name: 'Family Feast (4 pax)', desc: 'Mandi + 4 Shawarmas + Drinks + Dessert', price: '₹999', tags: ['non-veg', 'bestseller'] },
        { name: 'Couple Combo', desc: '2 Shawarmas + 2 drinks + 1 dessert plate', price: '₹449', tags: ['non-veg'] },
        { name: 'Solo Pack', desc: '1 Shawarma + Fries + 1 Drink', price: '₹249', tags: ['non-veg'] },
        { name: 'Veg Combo', desc: 'Falafel Wrap + Hummus Pita + Fresh Lemonade', price: '₹299', tags: ['veg', 'healthy'] },
    ],
    beverages: [
        { name: 'Fresh Lemonade', desc: 'Zesty fresh-squeezed lemonade with mint', price: '₹79', tags: ['veg', 'healthy'] },
        { name: 'Arabic Qahwa', desc: 'Traditional Arabic spiced coffee with cardamom', price: '₹99', tags: ['veg'] },
        { name: 'Mango Lassi', desc: 'Thick, creamy mango yoghurt drink', price: '₹89', tags: ['veg'] },
        { name: 'Virgin Mojito', desc: 'Fresh mint, lime & soda — perfectly refreshing', price: '₹99', tags: ['veg'] },
    ],
};

const tagConfig = {
    veg: { label: 'Veg', class: 'tag--veg' },
    'non-veg': { label: 'Non-Veg', class: 'tag--nonveg' },
    bestseller: { label: 'Bestseller', class: 'tag--bestseller' },
    healthy: { label: 'Healthy', class: 'tag--healthy' },
    new: { label: 'New', class: 'tag--new' },
    spicy: { label: 'Spicy', class: 'tag--spicy' },
};

export default function MenuPreview() {
    const [activeTab, setActiveTab] = useState('shawarma');
    const [vegOnly, setVegOnly] = useState(false);
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    const filteredItems = menuData[activeTab].filter(
        item => !vegOnly || item.tags.includes('veg')
    );

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };

    return (
        <section className="menu-preview" id="menu">
            <div className="menu-preview__header reveal" ref={headerRef}>
                <span className="section-label">Full Menu</span>
                <h2 className="section-title">
                    Explore Our <em>Menu</em>
                </h2>

                {/* Veg Toggle */}
                <div className="menu-toggle-wrap">
                    <span className="menu-toggle-label">Veg Only</span>
                    <button
                        className={`menu-toggle ${vegOnly ? 'menu-toggle--active' : ''}`}
                        onClick={() => setVegOnly(v => !v)}
                        id="veg-toggle-btn"
                        aria-pressed={vegOnly}
                    >
                        <span className="menu-toggle__knob" />
                    </button>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="menu-tabs">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`menu-tab ${activeTab === cat.id ? 'menu-tab--active' : ''}`}
                        onClick={() => setActiveTab(cat.id)}
                        id={`tab-${cat.id}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Menu Items Grid */}
            <div className="menu-items-grid" ref={gridRef} key={activeTab}>
                {filteredItems.length === 0 ? (
                    <div className="menu-empty">No veg items in this category</div>
                ) : (
                    filteredItems.map((item, i) => (
                        <div className={`menu-item-card reveal delay-${(i % 4) + 1}`} key={`${activeTab}-${i}`}>
                            <div className="menu-item-card__top">
                                <h3 className="menu-item-card__name">{item.name}</h3>
                                <div className="menu-item-card__tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className={`menu-item-tag ${tagConfig[tag]?.class}`}>
                                            {tagConfig[tag]?.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="menu-item-card__desc">{item.desc}</p>
                            <div className="menu-item-card__footer">
                                <span className="menu-item-card__price">{item.price}</span>
                                <button
                                    className="menu-item-card__order-btn"
                                    onClick={handleOrder}
                                    id={`menu-order-${activeTab}-${i}`}
                                >
                                    Order
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
