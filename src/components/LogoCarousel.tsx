import { useEffect, useRef } from 'react';

const LogoCarousel = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const images = [
    '2CJ5J6CR8sLoN3M2X0Hwpo6rq8.png',
    '8KTFgD04DbjRcXPM3vVaU3Ke1E.png',
    '91yIc1lkuixvVWBv1WK9kFFX6tU.png',
    '9rNvIgZaXZByUSW1GHm0CRlihn4.png',
    'AmBUupZoQXcnJb5GU4nksgiOw0.png',
    'b2sZ8u6EeCzDJodTGZMIIHqWyfc.png',
    'CtzW0PxPv7IlRRHNaeVrRiQVGI.png',
    'gvUjgQB2PSRLOZtMG8i4iaSqI.png',
    'pokqbMqscIRX2SHn6DnpkCRPgBs.png',
    'q1hZrcaEQkhq2QWESspbOqGbDE.png',
    'TtmrwOcZI6FZon3K6niSfv1ng.png',
    'UFrJPlGc7deoW9Eu30xJJXk.png',
    'XZHZ0nj9KIJ7UZvNZgYAdyB88BE.png',
    'zCXM3ZCsUkTgNEPtzVYspmtXb1s.png',
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const speed = 0.5; // pixels per frame
    const itemWidth = 178; // approximate width of each item
    const gap = -13; // negative gap from reference

    const animate = () => {
      position -= speed;
      
      // Calculate total width of one set of images
      const totalWidth = images.length * (itemWidth + gap);
      
      // Reset position when we've scrolled one full set
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [images.length]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section 
      className="w-full h-[160px] overflow-hidden"
      style={{
        display: 'flex',
        placeItems: 'center',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <ul
        ref={carouselRef}
        className="flex items-center"
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          listStyleType: 'none',
          gap: '-13px',
          position: 'relative',
          flexDirection: 'row',
          willChange: 'transform',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <li
            key={`${image}-${index}`}
            className="flex-shrink-0"
            style={{
              width: '178px',
              height: '160px',
            }}
            aria-hidden={index >= images.length}
          >
            <div
              className="w-full h-full"
              style={{
                width: '178px',
                height: '160px',
                flexShrink: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 0,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <img
                  src={`/img/home slide/${image}`}
                  alt=""
                  className="block w-full h-full"
                  style={{
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'contain',
                  }}
                  decoding="auto"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogoCarousel;

