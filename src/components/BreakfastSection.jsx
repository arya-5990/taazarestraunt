import { useReveal, useRevealGroup } from '../hooks/useReveal';

const breakfastItems = [
    {
        id: 1,
        name: 'Arabic Omelette',
        desc: 'Fluffy eggs with olives, tomatoes & Arabic spices',
        price: '₹149',
        icon: '🥚',
    },
    {
        id: 2,
        name: 'Falafel Wrap',
        desc: 'Crispy chickpea falafel in fresh pita with tahini & salad',
        price: '₹129',
        icon: '🌯',
    },
    {
        id: 3,
        name: 'Fresh Bread & Hummus',
        desc: 'House-baked Arabic bread with creamy house-made hummus',
        price: '₹99',
        icon: '🫓',
    },
    {
        id: 4,
        name: 'Shakshuka',
        desc: 'Poached eggs in rich spiced tomato & pepper sauce',
        price: '₹179',
        icon: '🍳',
    },
];

export default function BreakfastSection() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20order%20breakfast.', '_blank');
    };

    return (
        <section className="breakfast" id="breakfast">
            {/* Lighter themed background */}
            <div className="breakfast__bg" />

            <div className="breakfast__container">
                <div className="breakfast__header reveal" ref={headerRef}>
                    <span className="section-label breakfast__label">Morning Menu</span>
                    <h2 className="section-title breakfast__title">
                        Start Your Day<br />
                        <em>the Arabic Way</em>
                    </h2>
                    <div className="breakfast__hours-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        <span>Breakfast Hours: 8:00 AM – 11:30 AM</span>
                    </div>
                    <p className="breakfast__subtitle">
                        Begin your mornings with warm Arabic flavours crafted to energize your day
                    </p>
                </div>

                <div className="breakfast__grid" ref={gridRef}>
                    {breakfastItems.map((item, i) => (
                        <div className={`breakfast-card reveal delay-${(i % 4) + 1}`} key={item.id} id={`breakfast-${item.id}`}>
                            <div className="breakfast-card__icon">{item.icon}</div>
                            <div className="breakfast-card__body">
                                <h3 className="breakfast-card__name">{item.name}</h3>
                                <p className="breakfast-card__desc">{item.desc}</p>
                            </div>
                            <div className="breakfast-card__footer">
                                <span className="breakfast-card__price">{item.price}</span>
                                <button
                                    className="breakfast-card__btn"
                                    onClick={handleOrder}
                                    id={`order-breakfast-${item.id}`}
                                >
                                    Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
