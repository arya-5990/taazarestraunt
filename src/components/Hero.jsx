export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__image-wrap">
                <img
                    src="/images/hero-platter.png"
                    alt="Signature English Breakfast platter at Taaza Restaurant"
                    loading="eager"
                />
            </div>
            <div className="hero__overlay" />
            <div className="hero__vignette" />

            <div className="hero__content">
                <div className="hero__accent" />
                <p className="hero__tag">EST. — Indore, Madhya Pradesh</p>
                <h1 className="hero__title">
                    The Art of <span>Freshness</span>
                </h1>
                <p className="hero__subtitle">
                    Vijay Nagar's Premier Arabic Fusion Experience
                </p>
            </div>

            <div className="hero__scroll-hint">
                <span>Scroll</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
}
