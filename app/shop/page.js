import Image from 'next/image';
import Link from 'next/link';
import { products, formatPrice } from '../../lib/products';
import AddToCartButton from '../../components/AddToCartButton';

export const metadata = {
  title: 'Shop — LUNÉVA',
};

export default function ShopPage() {
  return (
    <main className="shop-page section">
      <div className="container">
        <p className="eyebrow text-center">THE 32 OZ EVERYDAY BOTTLE</p>
        <h1 className="text-center">Shop LUNÉVA</h1>
        <p className="text-center shop-intro">One bottle, three considered finishes. Choose the one that fits your day.</p>

        <div className="shop-grid">
          {products.map((product) => (
            <div className="shop-card" key={product.id}>
              <div className="shop-card-image">
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="shop-card-name">{product.name}</h3>
              <p className="shop-card-desc">{product.description}</p>
              <p className="price">{formatPrice(product.priceCents)}</p>
              <AddToCartButton productId={product.id} />
            </div>
          ))}
        </div>

        <p className="text-center shop-back">
          <Link href="/">← Back to home</Link>
        </p>
      </div>
    </main>
  );
}
