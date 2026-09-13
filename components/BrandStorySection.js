import Image from 'next/image';

export default function BrandStorySection() {
  return (
    <section className="brand-story section">
      <div className="container">
        <h2>Made for the rhythm of real life.</h2>
        <p>Our premium 32oz double-wall insulated water bottle is designed to keep your beverages at the perfect temperature whether you're at the office, on a hike, or commuting. The sleek design fits comfortably in any hand and the leak-proof cap ensures no spills on your important documents or electronics.</p>
        
        {/* Background image with overlay message */}
        <div className="brand-story-image-container">
          <Image
            src="/images/luneva-hydration-three.jpg"
            alt="Cloud, Oat, and Noir bottles with overlay message Hydration that moves with you"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-message">
            <p>Hydration that moves with you</p>
          </div>
        </div>
        
        {/* Lifestyle photo triptych */}
        <div className="lifestyle-triptych">
          <div className="triptych-item">
            <Image
              src="/images/luneva-held-white.jpg"
              alt="Cloud bottle in use, someone holding it"
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="triptych-item">
            <Image
              src="/images/luneva-rock-oat.jpg"
              alt="Oat bottle in use on rocks"
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="triptych-item">
            <Image
              src="/images/luneva-gym-black.jpg"
              alt="Noir bottle in use at the gym"
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}