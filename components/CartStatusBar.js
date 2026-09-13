'use client';

import Link from 'next/link';
import { useCart } from '../lib/cart-context';
import { formatPrice } from '../lib/products';

export default function CartStatusBar() {
  const { totalItems, totalCents, hydrated } = useCart();

  if (!hydrated || totalItems === 0) return null;

  return (
    <div className="cart-status-bar">
      <span>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your bag · {formatPrice(totalCents)}</span>
      <Link href="/checkout" className="btn cart-status-btn">PROCEED TO CHECKOUT</Link>
    </div>
  );
}
