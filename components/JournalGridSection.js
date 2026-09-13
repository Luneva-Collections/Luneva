import Image from 'next/image';

export default function JournalGridSection() {
  return (
    <section className="journal-grid section">
      <div className="container">
        <h2>YOUR LIFESTYLE, OUR DESIGN</h2>
        <div className="journal-grid-container">
          <div className="grid-item">
            <div className="image-wrapper">
              <Image
                src="/images/luneva-desk-black.jpg"
                alt="Noir bottle on a work desk"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="grid-item-text">
              <h3>AT WORK</h3>
              <p>NOIR</p>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="image-wrapper">
              <Image
                src="/images/luneva-bed-oat.jpg"
                alt="Oat bottle packed beside a phone and bag"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="grid-item-text">
              <h3>ON THE GO</h3>
              <p>OAT</p>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="image-wrapper">
              <Image
                src="/images/luneva-standing-black.jpg"
                alt="Noir bottle carried after a workout"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="grid-item-text">
              <h3>IN HAND</h3>
              <p>NOIR</p>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="image-wrapper">
              <Image
                src="/images/luneva-pilates-three.jpg"
                alt="All three bottles on a pilates mat"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="grid-item-text">
              <h3>AT THE STUDIO</h3>
              <p>THE TRIO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}