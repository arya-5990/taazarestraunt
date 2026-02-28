import { useReveal, useRevealGroup } from '../hooks/useReveal';

const dishes = [
    {
        id: 1,
        name: 'Saj Shawarma',
        desc: 'Slow-grilled chicken wrapped in crisp saj bread with garlic sauce & pickles',
        image: '/images/saj-shawarma.png',
        badge: 'Signature',
        price: '₹199',
    },
    {
        id: 2,
        name: 'Chicken Dynamite',
        desc: 'Crispy fried chicken tossed in our fiery secret dynamite sauce',
        image: '/images/chicken-dynamite.png',
        badge: 'Signature',
        price: '₹249',
    },
    {
        id: 3,
        name: 'Fish Tikka',
        desc: 'Grilled marinated fish tikka with aromatic spices & mint chutney',
        image: '/images/fish-tikka.png',
        badge: 'New',
        price: '₹279',
    },
    {
        id: 4,
        name: 'Mandi / Mixed Grill Platter',
        desc: 'Saffron-infused slow-cooked rice topped with premium mixed grills',
        image: '/images/mandi-platter.png',
        badge: 'Signature',
        price: '₹499',
    },
];

export default function SignatureDishes() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };

    return (
        <section className="signature-dishes" id="dishes">
            <div className="signature-dishes__pattern" />

            <div className="signature-dishes__header reveal" ref={headerRef}>
                <span className="section-label">Our Specialties</span>
                <h2 className="section-title">
                    Signature <em>Dishes</em>
                </h2>
                <p className="signature-dishes__subtitle">
                    Crafted with care, served with pride — authentic Arabic flavour in every bite
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
                            <div className="dish-card__badges">
                                <span className={`dish-badge dish-badge--${dish.badge.toLowerCase()}`}>
                                    {dish.badge}
                                </span>
                            </div>
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
