import { useRevealGroup } from '../hooks/useReveal';

export default function Footer() {
    const footerRef = useRevealGroup();

    return (
        <footer className="footer" id="location" ref={footerRef}>
            <div className="footer__inner">
                <div className="footer__brand reveal delay-1">
                    <h2 className="footer__logo">Taaza</h2>
                    <p className="footer__tagline">
                        Where tradition meets innovation. Authentic Arabic fusion crafted
                        with the freshest ingredients, served in an ambiance that celebrates
                        the art of dining.
                    </p>
                    <address className="footer__address">
                        <strong>Find Us</strong><br />
                        Landmark Smart Reliance,<br />
                        Shalimar Township, Vijay Nagar,<br />
                        Indore, Madhya Pradesh 452010<br /><br />
                        <strong>Hours</strong><br />
                        Mon – Sun: 8:00 AM – 11:00 PM<br /><br />
                        <strong>Reservations</strong><br />
                        +91 89826 64668
                    </address>
                </div>

                <div className="footer__map-wrap reveal delay-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3!2d75.89!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiA3NcKwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Taaza Restaurant Location — Shalimar Township, Indore"
                    />
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">
                    © 2026 Taaza Restaurant. All rights reserved.
                </p>
                <div className="footer__socials">
                    <a href="#" className="footer__social-link" aria-label="Instagram" id="social-instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    <a href="#" className="footer__social-link" aria-label="Facebook" id="social-facebook">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                    <a href="https://wa.me/918982664668" className="footer__social-link" aria-label="WhatsApp" id="social-whatsapp" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
