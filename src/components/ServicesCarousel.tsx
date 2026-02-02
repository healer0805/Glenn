import RightImageCarousel from './RightImageCarousel';
import LeftImageCarousel from './LeftImageCarousel';

const ServicesCarousel = () => {
  const images1 = [
    '1-1.jpg',
    '1-2.jpg',
    '1-3.jpg',
    '1-4.jpg',
    '1-5.jpg',
    '1-6.jpg',
  ];

  const images2 = [
    '2-1.jpg',
    '2-2.jpg',
    '2-3.jpg',
    '2-4.jpg',
    '2-5.jpg',
    '2-6.jpg',
  ];

  return (
    <div className="relative w-full overflow-hidden flex flex-col rounded-b-2xl!">
      {/* Top Row - Moving Left */}
      <div className="w-full h-1/2 my-6">
        <LeftImageCarousel 
          images={images1} 
          imagePath="/img/services slide"
          direction="left"
          height="100%"
        />
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="w-full h-1/2">
        <RightImageCarousel 
          images={images2} 
          imagePath="/img/services slide"
          direction="right"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ServicesCarousel;

