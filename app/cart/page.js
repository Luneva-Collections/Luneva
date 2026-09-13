'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../lib/cart-context';
import { formatPrice } from '../../lib/products';

export default function CartPage() {
  const { lines, totalCents, updateQuantity, removeItem, hydrated } = useCart();

  if (!hydrated) return null;

  return (
    <main className="cart-page section">
      <div className="container">
        <p className="shop-back"><Link href="/shop">← Continue shopping</Link></p>
        <h1 className="text-center">Your Bag</h1>

        {lines.length === 0 ? (
          <div className="cart-empty text-center">
            <p>Your bag is empty.</p>
            <Link href="/shop" className="btn">SHOP THE BOTTLE</Link>
          </div>
        ) : (
          <>
            <div className="cart-lines">
              {lines.map(({ product, quantity }) => (
                <div className="cart-line" key={product.id}>
                  <div className="cart-line-image">
                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="cart-line-info">
                    <p className="cart-line-name">{product.name}</p>
                    <p className="cart-line-price">{formatPrice(product.priceCents)}</p>
                  </div>
                  <div className="cart-qty-control">
                    <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="Decrease quantity">−</button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <p className="cart-line-total">{formatPrice(product.priceCents * quantity)}</p>
                  <button type="button" className="cart-line-remove" onClick={() => removeItem(product.id)} aria-label="Remove item">✕</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span className="price">{formatPrice(totalCents)}</span>
              </div>
              <p className="cart-summary-note">Shipping and taxes calculated at checkout.</p>
              <Link href="/checkout" className="btn cart-checkout-btn">PROCEED TO CHECKOUT</Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
