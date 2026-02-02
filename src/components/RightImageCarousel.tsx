import { useEffect, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  imagePath: string;
  direction?: 'left' | 'right';
  height?: string;
}

const ImageCarousel = ({ images, imagePath, direction = 'right', height = '230px' }: ImageCarouselProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const speed = 0.5; // pixels per frame
    const itemWidth = 178; // approximate width of each item
    const gap = -13; // negative gap from reference
    const totalWidth = images.length * (itemWidth + gap); // Calculate total width of one set of images
    let position = -totalWidth;

    const animate = () => {
      if (direction === 'left') {
        position -= speed;
      } else {
        position += speed;
      }
      
      // Reset position when we've scrolled one full set
      if (direction === 'left') {
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
      } else {
        if (position >= 0) {
          position = -totalWidth;
        }
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [images.length, direction]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section 
      className="w-full overflow-hidden"
      style={{
        height: height,
        display: 'flex',
        placeItems: 'center',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <ul
        ref={carouselRef}
        className="flex items-center gap-6"
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
            }}
            aria-hidden={index >= images.length}
          >
            <div
              className="w-full h-full"
              style={{
                
                flexShrink: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 0,
                position: 'relative',
              }}
            >
              <div
                className="overflow-hidden rounded-lg md:rounded-xl transition-transform duration-500"
                style={{
                    width: 'clamp(200px, 30vw, 400px)',
                    height: 'clamp(125px, 18.75vw, 250px)',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1.2)';
                    img.style.filter = 'brightness(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'scale(1)';
                    img.style.filter = 'brightness(1)';
                  }
                }}
              >
                <img
                  src={`${imagePath}/${image}`}
                  alt=""
                  className="block w-full h-full rounded-lg md:rounded-xl"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-out, filter 0.5s ease-out',
                    transform: 'scale(1)',
                    filter: 'brightness(1)',
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

export default ImageCarousel;

