import { useEffect, useState, useRef } from 'react';

// Stages: 1=badge, 2=accent, 3=title, 4=subtitle, 5=ctas
const STAGES = 5;
const STAGE_THROTTLE = 1100; // ms between stage increments — matches CSS transition duration

export default function Hero() {
    const [stage, setStage] = useState(0);
    const [allDone, setAllDone] = useState(false);
    const lastScrollTime = useRef(0);
    const stageRef = useRef(0); // mirror of stage to avoid stale closures

    const handleOrder = () => {
        window.open('https://wa.me/918982664668?text=Hi%20Taaza!%20I%27d%20like%20to%20place%20an%20order.', '_blank');
    };
    const handleReserve = () => {
        document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Lock scroll while we're doing the reveal
        document.body.style.overflow = 'hidden';
        stageRef.current = 0;

        const advance = () => {
            const now = Date.now();
            if (now - lastScrollTime.current < STAGE_THROTTLE) return;
            lastScrollTime.current = now;

            const next = stageRef.current + 1;
            stageRef.current = next;
            setStage(next);

            if (next >= STAGES) {
                // Wait for final animation, then unlock scroll
                setTimeout(() => {
                    document.body.style.overflow = '';
                    setAllDone(true);
                }, 800);
            }
        };

        const onWheel = (e) => {
            if (stageRef.current >= STAGES) return;
            if (e.deltaY > 0) {
                e.preventDefault();
                advance();
            }
        };

        // Touch support
        let touchStartY = 0;
        const onTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };
        const onTouchEnd = (e) => {
            if (stageRef.current >= STAGES) return;
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (delta > 30) advance();
        };

        // Keyboard support (ArrowDown / Space / PageDown)
        const onKeyDown = (e) => {
            if (stageRef.current >= STAGES) return;
            if (['ArrowDown', 'Space', 'PageDown'].includes(e.code)) {
                e.preventDefault();
                advance();
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, []); // run once on mount

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

            {/* Overlays */}
            <div className="hero__pattern" />
            <div className="hero__overlay" />
            <div className="hero__vignette" />

            {/* Smoke Particles */}
            <div className="hero__smoke">
                <div className="smoke-particle smoke-particle--1" />
                <div className="smoke-particle smoke-particle--2" />
                <div className="smoke-particle smoke-particle--3" />
            </div>

            {/* Content — each element reveals on its stage */}
            <div className="hero__content">

                <div className={`hero__badge hero__scroll-item${stage >= 1 ? ' hero__scroll-item--visible' : ''}`}>
                    <span className="hero__badge-dot" />
                    EST. — Vijay Nagar, Indore
                </div>

                <div className={`hero__accent hero__scroll-item${stage >= 2 ? ' hero__scroll-item--visible' : ''}`} />

                <h1 className={`hero__title hero__scroll-item${stage >= 3 ? ' hero__scroll-item--visible' : ''}`}>
                    Authentic Arabic Flavours<br />
                    <span>in the Heart of</span><br />
                    Indore
                </h1>

                <p className={`hero__subtitle hero__scroll-item${stage >= 4 ? ' hero__scroll-item--visible' : ''}`}>
                    Shawarma · Grills · Mandi · Arabic Breakfast
                </p>

                <div className={`hero__ctas hero__scroll-item${stage >= 5 ? ' hero__scroll-item--visible' : ''}`}>
                    <button className="hero__cta hero__cta--primary" onClick={handleOrder} id="hero-order-btn">
                        Order Online
                    </button>
                    <button className="hero__cta hero__cta--secondary" onClick={handleReserve} id="hero-reserve-btn">
                        Reserve a Table
                    </button>
                </div>
            </div>

            {/* Scroll hint with progress dots — hides after all done */}
            <div className={`hero__scroll-hint${allDone ? ' hero__scroll-hint--hidden' : ''}`}>
                <span>{stage >= STAGES ? 'Explore' : 'Scroll'}</span>
                <div className="hero__scroll-line" />
                <div className="hero__scroll-dots">
                    {Array.from({ length: STAGES }).map((_, i) => (
                        <div
                            key={i}
                            className={`hero__scroll-dot${stage > i ? ' hero__scroll-dot--active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
