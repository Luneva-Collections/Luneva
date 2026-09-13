import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-image-bg">
        <Image
          src="/images/luneva-beach-three.jpg"
          alt="Cloud, Oat, and Noir LUNÉVA bottles overlooking the coast"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-image-overlay" />
      </div>
      <div className="container hero-content">
        <p className="hero-eyebrow">THE 32 OZ EVERYDAY BOTTLE</p>
        <h1 className="hero-headline">LUNÉVA</h1>
        <p className="hero-description">A beautifully balanced, double-wall insulated bottle designed to move through every part of your day.</p>
        <div className="hero-cta-row">
          <button className="btn">SHOP THE BOTTLE</button>
          <span className="price">$59.95</span>
        </div>
      </div>
    </section>
  );
}
