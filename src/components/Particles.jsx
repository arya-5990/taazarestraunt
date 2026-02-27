import { useMemo } from 'react';

export default function Particles() {
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * 20,
            opacity: Math.random() * 0.4 + 0.1,
        }));
    }, []);

    return (
        <div className="particles" aria-hidden="true">
            {particles.map((p) => (
                <div
                    className="particle"
                    key={p.id}
                    style={{
                        left: p.left,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        opacity: p.opacity,
                    }}
                />
            ))}
        </div>
    );
}
