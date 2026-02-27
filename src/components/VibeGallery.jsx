import { useReveal, useRevealGroup } from '../hooks/useReveal';
const galleryItems = [
    {
        id: 1,
        image: '/images/interior-brick.png',
        label: 'Exposed Brick & Warm Lighting',
    },
    {
        id: 2,
        image: '/images/interior-eiffel.png',
        label: 'The Signature Eiffel Art Wall',
    },
    {
        id: 3,
        image: '/images/interior-marble.png',
        label: 'Pristine Marble & Natural Light',
    },
];


export default function VibeGallery() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    return (
        <section className="vibe-gallery" id="vibe">
            <div className="vibe-gallery__header reveal" ref={headerRef}>
                <span className="section-label">The Space</span>
                <h2 className="section-title">
                    A Vibe You <em>Feel</em>
                </h2>
            </div>

            <div className="bento-grid" ref={gridRef}>
                {galleryItems.map((item, i) => (
                    <div className={`bento-item reveal-scale delay-${i + 1}`} key={item.id}>
                        <img src={item.image} alt={item.label} loading="lazy" />
                        <div className="bento-item__overlay">
                            <span className="bento-item__label">{item.label}</span>
                        </div>
                        <div className="bento-item__border" />
                    </div>
                ))}
            </div>
        </section>
    );
}
