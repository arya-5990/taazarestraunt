import { useReveal, useRevealGroup } from '../hooks/useReveal';

const testimonials = [
    {
        id: 1,
        quote: 'Authentic, tasty & gorgeous food. The ambiance is unmatched in the city. A must-visit for anyone who loves real Arabic flavors.',
        author: 'Aarav K.',
        source: 'Google Reviews',
        initial: 'A',
        stars: 5,
    },
    {
        id: 2,
        quote: 'The chicken shawarma is perfectly cooked and juicy. Their Mandi Platter is a game-changer — best I\'ve had in Indore, hands down.',
        author: 'Meera S.',
        source: 'Zomato',
        initial: 'M',
        stars: 5,
    },
    {
        id: 3,
        quote: 'Incredible saj shawarma, cozy interiors, and the staff goes above and beyond. This place feels like a hidden gem in Vijay Nagar.',
        author: 'Rohan P.',
        source: 'Google Reviews',
        initial: 'R',
        stars: 5,
    },
];

function StarIcon({ half = false }) {
    return (
        <svg className="testimonial-card__star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            {half ? (
                <>
                    <defs>
                        <linearGradient id="halfStar">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#halfStar)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </>
            ) : (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            )}
        </svg>
    );
}

export default function SocialProof() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    return (
        <section className="testimonials" id="reviews">
            <div className="testimonials__deco testimonials__deco--1" />
            <div className="testimonials__deco testimonials__deco--2" />

            <div className="testimonials__header reveal" ref={headerRef}>
                <span className="section-label">Social Proof</span>
                <h2 className="section-title">
                    Loved by <em>Indorie foodies</em>
                </h2>

                {/* Rating Badge */}
                <div className="testimonials__rating">
                    <span className="testimonials__rating-score">4.8★</span>
                    <div className="testimonials__rating-stars">
                        {[1, 2, 3, 4].map(i => <StarIcon key={i} />)}
                        <StarIcon half={false} />
                    </div>
                    <span className="testimonials__rating-label">Based on 500+ reviews</span>
                </div>
            </div>

            <div className="testimonials__grid" ref={gridRef}>
                {testimonials.map((t, i) => (
                    <article className={`testimonial-card reveal delay-${i + 1}`} key={t.id}>
                        <div className="testimonial-card__stars">
                            {Array.from({ length: t.stars }).map((_, si) => (
                                <StarIcon key={si} />
                            ))}
                        </div>
                        <p className="testimonial-card__quote">{t.quote}</p>
                        <div className="testimonial-card__author">
                            <div className="testimonial-card__avatar">{t.initial}</div>
                            <div>
                                <div className="testimonial-card__name">{t.author}</div>
                                <div className="testimonial-card__source">{t.source}</div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
