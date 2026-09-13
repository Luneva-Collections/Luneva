import Image from 'next/image';

export default function BrandStorySection() {
  return (
    <section className="brand-story section">
      <div className="container">
        <p className="eyebrow text-center">ONE BOTTLE. EVERY PART OF YOUR DAY.</p>
        <h2 className="text-center">Made for the rhythm of real life.</h2>
        <p className="text-center">LUNÉVA began with a simple idea: the object you reach for all day should feel considered. From its easy-carry handle to its quietly sculpted profile, every detail is shaped around the way you actually move.</p>
      </div>

      <div className="lifestyle-triptych">
        <div className="triptych-item">
          <Image
            src="/images/luneva-held-white.jpg"
            alt="Cloud LUNÉVA bottle in use"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="triptych-item">
          <Image
            src="/images/luneva-rock-oat.jpg"
            alt="Oat LUNÉVA bottle in use"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="triptych-item">
          <Image
            src="/images/luneva-gym-black.jpg"
            alt="Noir LUNÉVA bottle in use"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
