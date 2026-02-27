import { useReveal, useRevealGroup } from '../hooks/useReveal';

const menuItems = [
    {
        id: 1,
        category: 'Breakfast',
        name: 'English Breakfast',
        desc: 'Eggs, sausages, beans, toast & grilled tomatoes',
        price: '₹299',
        image: '/images/hero-platter.png',
    },
    {
        id: 2,
        category: 'Arabic Specialties',
        name: 'Shawarma & Falafel',
        desc: 'Traditional Arabic wraps with tahini & pickled salad',
        price: '₹249',
        image: '/images/shawarma-falafel.png',
    },
    {
        id: 3,
        category: 'Tandoori Grills',
        name: 'Tandoori Chicken',
        desc: 'Charcoal-fired, marinated overnight in house spices',
        price: '₹349',
        image: '/images/tandoori-grills.png',
    },
];

export default function LiveMenu() {
    const headerRef = useReveal();
    const scrollRef = useRevealGroup();

    return (
        <section className="menu-strip" id="menu">
            <div className="menu-strip__header reveal" ref={headerRef}>
                <span className="section-label">Live Menu</span>
                <h2 className="section-title">
                    What's <em>Cooking</em> Today
                </h2>
            </div>

            <div className="menu-strip__scroll" ref={scrollRef}>
                {menuItems.map((item, i) => (
                    <article className={`menu-card reveal delay-${i + 1}`} key={item.id}>
                        <img
                            className="menu-card__image"
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                        />
                        <div className="menu-card__overlay">
                            <span className="menu-card__category">{item.category}</span>
                            <h3 className="menu-card__name">{item.name}</h3>
                            <p className="menu-card__desc">{item.desc}</p>
                            <span className="menu-card__price">{item.price}</span>
                        </div>
                        <div className="menu-card__border" />
                    </article>
                ))}
            </div>
        </section>
    );
}
