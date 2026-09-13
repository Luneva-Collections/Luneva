import AddToCartButton from './AddToCartButton';

const colors = [
  { key: 'cloud', label: 'Cloud', productId: 'luneva-cloud' },
  { key: 'oat', label: 'Oat', productId: 'luneva-oat' },
  { key: 'noir', label: 'Noir', productId: 'luneva-noir' },
];

export default function ColorPickerSection() {
  return (
    <section className="color-picker section">
      <div className="container color-picker-container">
        {colors.map((c) => (
          <div className="color-swatch-card" key={c.key}>
            <div className={`color-swatch ${c.key}`}></div>
            <p className="color-name">{c.label}</p>
            <p className="color-finish">MATTE FINISH</p>
            <AddToCartButton productId={c.productId} label="CHOOSE" />
          </div>
        ))}
      </div>
    </section>
  );
}
