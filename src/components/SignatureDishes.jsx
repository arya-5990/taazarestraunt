import { useReveal, useRevealGroup } from '../hooks/useReveal';

const dishes = [
    {
        id: 1,
        name: 'Saj Shawarma',
        desc: 'Slow-grilled chicken wrapped in crisp saj bread with garlic sauce & pickles',
        image: '/images/saj-shawarma.png',
        badge: 'Signature',
        tag: 'non-veg',
        chefPick: true,
        price: '₹199',
    },
    {
        id: 2,
        name: 'Chicken Dynamite',
        desc: 'Crispy fried chicken tossed in our fiery secret dynamite sauce',
        image: '/images/chicken-dynamite.png',
        badge: 'Signature',
        tag: 'non-veg',
        chefPick: false,
        price: '₹249',
    },
    {
        id: 3,
        name: 'Fish Tikka',
        desc: 'New grilled marinated fish tikka with aromatic spices & mint chutney',
        image: '/images/tandoori-grills.png',
        badge: 'New',
        tag: 'non-veg',
        chefPick: false,
        price: '₹279',
    },
    {
        id: 4,
        name: 'Mandi / Mixed Grill Platter',
        desc: 'Saffron-infused slow-cooked rice topped with premium mixed grills',
        image: '/images/mandi-platter.png',
        badge: 'Signature',
        tag: 'non-veg',
        chefPick: false,
        price: '₹499',
    },
];

function ChefBadge() {
    return (
        <div className="chef-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Chef's Pick
        </div>
    );
}

export default function SignatureDishes() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };

    return (
        <section className="signature-dishes" id="dishes">
            {/* Arabic Pattern BG */}
            <div className="signature-dishes__pattern" />

            <div className="signature-dishes__header reveal" ref={headerRef}>
                <span className="section-label">Our Specialties</span>
                <h2 className="section-title">
                    Signature <em>Dishes</em>
                </h2>
                <p className="signature-dishes__subtitle">
                    Crafted with love, served with passion — each dish tells a story of authentic Arabic flavour
                </p>
            </div>

            <div className="dishes-grid" ref={gridRef}>
                {dishes.map((dish, i) => (
                    <article
                        className={`dish-card reveal delay-${(i % 4) + 1}`}
                        key={dish.id}
                        id={`dish-${dish.id}`}
                    >
                        <div className="dish-card__image-wrap">
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="dish-card__image"
                                loading="lazy"
                            />
                            <div className="dish-card__image-overlay" />

                            {/* Badges */}
                            <div className="dish-card__badges">
                                <span className={`dish-badge dish-badge--${dish.badge.toLowerCase()}`}>
                                    {dish.badge === 'Signature' && '✦ '}
                                    {dish.badge}
                                </span>
                                {dish.tag === 'veg' ? (
                                    <span className="dish-badge dish-badge--veg">🟢 Veg</span>
                                ) : (
                                    <span className="dish-badge dish-badge--nonveg">🔴 Non-Veg</span>
                                )}
                            </div>

                            {dish.chefPick && <ChefBadge />}
                        </div>

                        <div className="dish-card__body">
                            <h3 className="dish-card__name">{dish.name}</h3>
                            <p className="dish-card__desc">{dish.desc}</p>
                            <div className="dish-card__footer">
                                <span className="dish-card__price">{dish.price}</span>
                                <button
                                    className="dish-card__order-btn"
                                    onClick={handleOrder}
                                    id={`order-dish-${dish.id}`}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>

                        <div className="dish-card__glow" />
                    </article>
                ))}
            </div>
        </section>
    );
}
