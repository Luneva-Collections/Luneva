import Image from 'next/image';

export default function ProductDetailSection() {
  return (
    <section className="product-detail section">
      <div className="container">
        <h2>PRODUCT DETAILS</h2>
        <div className="product-image">
          <Image
            src="/images/luneva-rock-oat.jpg"
            alt="Oat bottle in use on rocks"
            width={300}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="color-picker-container">
          <div className="color-swatch cloud" data-color="cloud"></div>
          <div className="color-swatch oat" data-color="oat"></div>
          <div className="color-swatch noir" data-color="noir"></div>
        </div>
        <button className="btn">ADD TO BAG</button>
        <p className="price">$59.95</p>
      </div>
    </section>
  );
}