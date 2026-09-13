export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">LUNÉVA</a>
      <nav>
        <ul className="nav-links">
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/our-design">OUR DESIGN</a></li>
          <li><a href="/journal">JOURNAL</a></li>
        </ul>
      </nav>
      <div className="cart-icon">🛒</div>
    </header>
  );
}
