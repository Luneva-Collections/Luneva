import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

export default function ProductDetailSection() {
  return (
    <section className="product-detail section">
      <div className="container product-detail-grid">
        <div className="product-image">
          <Image
            src="/images/luneva-rock-oat.jpg"
            alt="LUNÉVA 32 oz insulated bottle in Oat"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="product-detail-info">
          <p className="eyebrow">THE EVERYDAY ESSENTIAL</p>
          <h2>The LUNÉVA 32 oz bottle</h2>
          <p>One bottle, three considered finishes. Crafted from 18/8 food-grade stainless steel with a soft-touch matte coating, a comfortable handle, and a slim base that fits cup holders, bike cages, and the side pocket of your favourite tote.</p>
          <p className="product-sub">Double-wall insulated stainless steel with an easy-carry handle.</p>
          <p className="price price-large">$59.95</p>
          <p className="colour-label">COLOUR — OAT</p>
          <p className="colour-desc">A warm neutral inspired by sunlit stone, quiet interiors, and an unhurried pace.</p>
          <AddToCartButton productId="luneva-oat" label="ADD OAT TO BAG · $59.95" />
          <div className="badge-row">
            <span>FREE SHIPPING OVER $75</span>
            <span>30-DAY RETURNS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
