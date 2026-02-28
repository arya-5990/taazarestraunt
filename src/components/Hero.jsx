export default function Hero() {
    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };
    const handleReserve = () => {
        document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            {/* Video Background */}
            <div className="hero__video-wrap">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero__video"
                    poster="/images/hero-platter.png"
                >
                    <source src="/herovideo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Arabic Pattern Overlay */}
            <div className="hero__pattern" />
            <div className="hero__overlay" />
            <div className="hero__vignette" />

            {/* Smoke Particles */}
            <div className="hero__smoke">
                <div className="smoke-particle smoke-particle--1" />
                <div className="smoke-particle smoke-particle--2" />
                <div className="smoke-particle smoke-particle--3" />
            </div>

            {/* Content */}
            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    EST. — Vijay Nagar, Indore
                </div>
                <div className="hero__accent" />
                <h1 className="hero__title">
                    Authentic Arabic Flavours<br />
                    <span>in the Heart of</span><br />
                    Vijay Nagar
                </h1>
                <p className="hero__subtitle">
                    Shawarma · Grills · Mandi · Arabic Breakfast
                </p>

                <div className="hero__ctas">
                    <button className="hero__cta hero__cta--primary" onClick={handleOrder} id="hero-order-btn">
                        Order Online
                    </button>
                    <button className="hero__cta hero__cta--secondary" onClick={handleReserve} id="hero-reserve-btn">
                        Reserve a Table
                    </button>
                </div>
            </div>


            {/* Scroll hint */}
            <div className="hero__scroll-hint">
                <span>Scroll</span>
                <div className="hero__scroll-line" />
            </div>

        </section>
    );
}
