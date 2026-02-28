import { useReveal, useRevealGroup } from '../hooks/useReveal';

const services = [
    { icon: '🥡', title: 'Takeout Available', desc: 'Quick & hot, ready to go' },
    { icon: '📅', title: 'Reservations', desc: 'Book your table in advance' },
    { icon: '🌙', title: 'Late Night Dining', desc: 'Open till 11 PM daily' },
    { icon: '👥', title: 'Group Seating', desc: 'Perfect for large gatherings' },
    { icon: '📱', title: 'Online Ordering', desc: 'Order via WhatsApp or call' },
    { icon: '🎂', title: 'Special Events', desc: 'Birthdays & celebrations' },
];

export default function ServicesSection() {
    const headerRef = useReveal();
    const gridRef = useRevealGroup();

    return (
        <section className="services" id="services">
            <div className="services__header reveal" ref={headerRef}>
                <span className="section-label">What We Offer</span>
                <h2 className="section-title">
                    How We <em>Serve You</em>
                </h2>
            </div>

            <div className="services__grid" ref={gridRef}>
                {services.map((s, i) => (
                    <div className={`service-card reveal delay-${(i % 4) + 1}`} key={i} id={`service-${i}`}>
                        <div className="service-card__icon">{s.icon}</div>
                        <h3 className="service-card__title">{s.title}</h3>
                        <p className="service-card__desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
