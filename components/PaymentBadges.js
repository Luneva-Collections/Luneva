export default function PaymentBadges() {
  const cards = ['VISA', 'MASTERCARD', 'AMEX'];
  return (
    <div className="payment-badges">
      <span className="payment-badges-label">Secure checkout powered by Stripe</span>
      <div className="payment-badges-row">
        {cards.map((c) => (
          <span className="payment-badge" key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
}
