import SocialLinks from './SocialLinks';
import PaymentBadges from './PaymentBadges';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-logo">LUNÉVA</p>
        <p className="footer-tagline">Hydration, beautifully made.</p>
        <ul className="footer-links">
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/our-design">DESIGN</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
        <SocialLinks />
        <PaymentBadges />
        <p className="footer-gst-note">All prices displayed include GST.</p>
        <p className="copyright">© 2026 LUNÉVA</p>
      </div>
    </footer>
  );
}
