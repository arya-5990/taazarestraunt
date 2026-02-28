import { useReveal } from '../hooks/useReveal';

const badges = [
    { label: 'Family Friendly' },
    { label: 'Special Occasions' },
    { label: 'Late Night Dining' },
    { label: 'Healthy Options' },
];

export default function ArabicExperience() {
    const leftRef = useReveal();
    const rightRef = useReveal();

    return (
        <section className="experience" id="experience">
            <div className="experience__inner">
                {/* Left: Image */}
                <div className="experience__image-side reveal-left" ref={leftRef}>
                    <div className="experience__image-frame">
                        <img
                            src="/images/interior-brick.png"
                            alt="Taaza Restaurant interior with warm Arabic ambience"
                            className="experience__main-img"
                            loading="lazy"
                        />
                        <div className="experience__image-overlay" />
                        <div className="experience__stat experience__stat--1">
                            <span className="experience__stat-number">4.8★</span>
                            <span className="experience__stat-label">Google Rating</span>
                        </div>
                        <div className="experience__stat experience__stat--2">
                            <span className="experience__stat-number">5k+</span>
                            <span className="experience__stat-label">Happy Guests</span>
                        </div>
                    </div>

                    <div className="experience__image-secondary">
                        <img
                            src="/images/interior-marble.png"
                            alt="Taaza Restaurant interior seating"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right: Text */}
                <div className="experience__text-side reveal-right" ref={rightRef}>
                    <span className="section-label">The Experience</span>
                    <h2 className="section-title">
                        An Experience Beyond<br />
                        <em>Just Dining</em>
                    </h2>
                    <p className="experience__desc">
                        Step into a world where every corner breathes warmth and culture.
                        From the soft glow of Arabic lanterns to the rich aroma of slow-cooked
                        meats — Taaza is designed to take you on a sensory journey.
                    </p>
                    <p className="experience__desc">
                        Perfect for birthday dinners, family gatherings, or a late-night
                        craving — our inviting atmosphere makes every visit unforgettable.
                    </p>

                    <div className="experience__badges">
                        {badges.map((b, i) => (
                            <div className="experience__badge-item" key={i}>
                                <span className="experience__badge-check">—</span>
                                <span className="experience__badge-text">{b.label}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="experience__reserve-btn"
                        onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                        id="experience-reserve-btn"
                    >
                        Reserve Your Table
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
