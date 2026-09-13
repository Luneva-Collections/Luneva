import Link from 'next/link';
import CartIndicator from './CartIndicator';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">LUNÉVA</Link>
      <nav>
        <ul className="nav-links">
          <li><Link href="/shop">SHOP</Link></li>
          <li><Link href="/our-design">OUR DESIGN</Link></li>
          <li><Link href="/journal">JOURNAL</Link></li>
        </ul>
      </nav>
      <CartIndicator />
    </header>
  );
}
