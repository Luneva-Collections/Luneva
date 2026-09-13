import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, findProduct, formatPrice } from '../../../lib/products';
import AddToCartButton from '../../../components/AddToCartButton';
import CartStatusBar from '../../../components/CartStatusBar';

export function generateStaticParams() {
  return products.map((p) => ({ productId: p.id }));
}

export function generateMetadata({ params }) {
  const product = findProduct(params.productId);
  return { title: product ? `${product.name} — LUNÉVA` : 'LUNÉVA' };
}

export default function ProductPage({ params }) {
  const product = findProduct(params.productId);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <main className="product-page section">
      <CartStatusBar />
      <div className="container">
        <p className="text-center shop-back">
          <Link href="/shop">← Back to shop</Link>
        </p>

        <div className="product-detail-grid">
          <div className="product-image">
            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="product-detail-info">
            <p className="eyebrow">THE EVERYDAY ESSENTIAL</p>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="product-sub">Double-wall insulated stainless steel with an easy-carry handle.</p>
            <p className="price price-large">{formatPrice(product.priceCents)}</p>
            <p className="colour-label">COLOUR — {product.colour.toUpperCase()}</p>
            <AddToCartButton productId={product.id} label={`ADD ${product.colour.toUpperCase()} TO BAG · ${formatPrice(product.priceCents)}`} />
            <div className="badge-row">
              <span>FREE SHIPPING OVER $75</span>
              <span>30-DAY RETURNS</span>
            </div>
          </div>
        </div>

        <div className="product-page-other">
          <h2 className="text-center">Also available in</h2>
          <div className="shop-grid">
            {otherProducts.map((p) => (
              <Link href={`/shop/${p.id}`} className="shop-card-link" key={p.id}>
                <div className="shop-card">
                  <div className="shop-card-image">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <h3 className="shop-card-name">{p.name}</h3>
                  <p className="price">{formatPrice(p.priceCents)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
