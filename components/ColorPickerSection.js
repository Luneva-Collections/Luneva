export default function ColorPickerSection() {
  const colors = [
    { key: 'cloud', label: 'Cloud' },
    { key: 'oat', label: 'Oat' },
    { key: 'noir', label: 'Noir' },
  ];
  return (
    <section className="color-picker section">
      <div className="container color-picker-container">
        {colors.map((c) => (
          <div className="color-swatch-card" key={c.key}>
            <div className={`color-swatch ${c.key}`}></div>
            <p className="color-name">{c.label}</p>
            <p className="color-finish">MATTE FINISH</p>
            <button className="btn btn-outline">CHOOSE</button>
          </div>
        ))}
      </div>
    </section>
  );
}
