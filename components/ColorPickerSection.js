export default function ColorPickerSection() {
  return (
    <section className="color-picker section">
      <div className="container">
        <h2>CHOOSE YOUR COLOR</h2>
        <div className="color-picker-container">
          <div className="color-swatch cloud" data-color="cloud">
            <span>Cloud</span>
          </div>
          <div className="color-swatch oat" data-color="oat">
            <span>Oat</span>
          </div>
          <div className="color-swatch noir" data-color="noir">
            <span>Noir</span>
          </div>
        </div>
      </div>
    </section>
  );
}