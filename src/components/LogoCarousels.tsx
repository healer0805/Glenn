import { useEffect, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  imagePath: string;
  direction?: 'left' | 'right';
  height?: string;
}

const ImageCarousel = ({ images, imagePath, direction = 'left', height = '160px' }: ImageCarouselProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const speed = 0.5; // pixels per frame
    const itemWidth = 178; // approximate width of each item
    const gap = -13; // negative gap from reference

    const animate = () => {
      if (direction === 'left') {
        position -= speed;
      } else {
        position += speed;
      }
      
      // Calculate total width of one set of images
      const totalWidth = images.length * (itemWidth + gap);
      
      // Reset position when we've scrolled one full set
      if (direction === 'left') {
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
      } else {
        if (position >= totalWidth) {
          position = 0;
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
                className="overflow-hidden"
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
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
                  className="block w-full h-full"
                  style={{
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'contain',
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

