'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../lib/cart-context';
import { formatPrice } from '../../lib/products';

export default function CheckoutPage() {
  const { lines, totalCents, hydrated } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(false);

  if (!hydrated) return null;

  function handlePlaceOrder(e) {
    e.preventDefault();
    // Payment processing isn't connected yet -- this holds the full
    // checkout UI/flow ready to wire up to Stripe once keys are set up.
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setPlaced(true);
    }, 800);
  }

  if (lines.length === 0 && !placed) {
    return (
      <main className="checkout-page section">
        <div className="container text-center">
          <h1>Checkout</h1>
          <p>Your bag is empty.</p>
          <Link href="/shop" className="btn">SHOP THE BOTTLE</Link>
        </div>
      </main>
    );
  }

  if (placed) {
    return (
      <main className="checkout-page section">
        <div className="container text-center">
          <h1>Thank you.</h1>
          <p>Payment isn&apos;t connected yet, so this is a placeholder confirmation — no order has actually been charged or placed.</p>
          <Link href="/" className="btn">BACK TO HOME</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page section">
      <div className="container checkout-grid">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h2>Contact</h2>
          <input type="email" placeholder="Email address" required />

          <h2>Shipping address</h2>
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Address" required />
          <div className="checkout-form-row">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Postcode" required />
          </div>
          <input type="text" placeholder="Country" required defaultValue="Australia" />

          <h2>Payment</h2>
          <p className="checkout-payment-note">Payment processing isn&apos;t connected yet — this button won&apos;t charge you anything.</p>
          <p className="checkout-gst-note">All prices shown include GST. A tax invoice will be issued with your order confirmation.</p>

          <button type="submit" className="btn checkout-submit" disabled={submitting}>
            {submitting ? 'Processing…' : 'PLACE ORDER'}
          </button>
        </form>

        <div className="checkout-summary">
          <h2>Order summary</h2>
          {lines.map(({ product, quantity }) => (
            <div className="checkout-summary-line" key={product.id}>
              <div className="checkout-summary-image">
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                <span className="checkout-summary-qty">{quantity}</span>
              </div>
              <span className="checkout-summary-name">{product.name}</span>
              <span>{formatPrice(product.priceCents * quantity)}</span>
            </div>
          ))}
          <div className="checkout-summary-row">
            <span>Subtotal (incl. GST)</span>
            <span>{formatPrice(totalCents)}</span>
          </div>
          <div className="checkout-summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="checkout-summary-row checkout-summary-total">
            <span>Total (incl. GST)</span>
            <span>{formatPrice(totalCents)}</span>
          </div>
          <p className="checkout-gst-note checkout-gst-note-summary">All prices include GST.</p>
        </div>
      </div>
    </main>
  );
}
