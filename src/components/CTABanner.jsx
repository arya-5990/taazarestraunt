import { useReveal } from '../hooks/useReveal';

export default function CTABanner() {
    const ref = useReveal();

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };

    const handleTable = () => {
        window.location.href = 'tel:+918982664668';
    };

    return (
        <section className="cta-banner" id="cta">
            <div className="cta-banner__pattern" />
            <div className="cta-banner__content reveal" ref={ref}>
                <span className="cta-banner__eyebrow">Ready to eat?</span>
                <h2 className="cta-banner__title">
                    Craving Shawarma<br />
                    <span>Tonight?</span>
                </h2>
                <p className="cta-banner__sub">
                    Fresh off the grill, wrapped with love — available for dine-in, takeout & delivery
                </p>
                <div className="cta-banner__btns">
                    <button className="cta-banner__btn cta-banner__btn--primary" onClick={handleOrder} id="cta-order-btn">
                        <span>🛒</span> Order Now
                    </button>
                    <button className="cta-banner__btn cta-banner__btn--secondary" onClick={handleTable} id="cta-table-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                        </svg>
                        Book Table
                    </button>
                </div>
            </div>
        </section>
    );
}
