import Image from 'next/image';

export default function JournalGridSection() {
  const items = [
    { src: '/images/luneva-desk-black.jpg', alt: 'Noir LUNÉVA bottle on a work desk', label: 'AT WORK — NOIR' },
    { src: '/images/luneva-bed-oat.jpg', alt: 'Oat LUNÉVA bottle packed beside a phone and bag', label: 'ON THE GO — OAT' },
    { src: '/images/luneva-standing-black.jpg', alt: 'Noir LUNÉVA bottle carried after a workout', label: 'IN HAND — NOIR' },
    { src: '/images/luneva-pilates-three.jpg', alt: 'Three LUNÉVA bottles on a pilates mat', label: 'AT THE STUDIO — THE TRIO' },
  ];
  return (
    <section className="journal-grid section">
      <div className="container">
        <p className="eyebrow text-center">THE LUNÉVA JOURNAL</p>
        <h2 className="text-center">From first light to last pour.</h2>
        <p className="text-center">It belongs beside your laptop, on the mat, tucked into your weekend bag, and within reach at the end of the day. One familiar ritual, wherever life takes you.</p>
        <div className="journal-grid-container">
          {items.map((item) => (
            <div className="grid-item" key={item.src}>
              <div className="image-wrapper">
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
              </div>
              <p className="grid-item-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
