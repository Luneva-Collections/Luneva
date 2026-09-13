import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section className="call-to-action section">
      <div className="container">
        <div className="cta-content">
          <h2>Your routine, your moment</h2>
          <p>Find your colour</p>
          <button className="btn">SHOP NOW</button>
        </div>
        <div className="cta-image-wrapper">
          <Image
            src="/images/luneva-three-routine.jpg"
            alt="Cloud, Oat and Noir bottles with message Your routine, your moment"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}