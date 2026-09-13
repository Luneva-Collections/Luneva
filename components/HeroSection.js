import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">THE 32 OZ EVERYDAY BOTTLE</p>
        <h1 className="hero-headline">LUNEVA</h1>
        <p className="hero-description">A beautifully balanced, double-wall insulated bottle designed to move through every part of your day.</p>
        <button className="btn">SHOP THE BOTTLE</button>
        <div className="product-image-placeholder">
          <Image
            src="/images/luneva-beach-three.jpg"
            alt="Cloud, Oat, and Noir bottles overlooking the coast"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}