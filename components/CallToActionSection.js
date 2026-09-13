import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section className="call-to-action">
      <div className="cta-image-wrapper">
        <Image
          src="/images/luneva-three-routine.jpg"
          alt="Cloud, Oat, and Noir LUNÉVA bottles with the message Your routine, your moment"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="cta-overlay" />
      </div>
      <div className="container cta-content">
        <p className="eyebrow">ONE BOTTLE. EVERY PART OF YOUR DAY.</p>
        <h2>Your routine, your moment.</h2>
        <p>From the first commute to the final class, LUNÉVA is the quiet constant designed to keep pace — so the small ritual of drinking water feels like a moment made just for you.</p>
        <button className="btn btn-light">FIND YOUR COLOUR</button>
      </div>
    </section>
  );
}
