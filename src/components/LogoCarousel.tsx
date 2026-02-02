import LogoCarousels from './LogoCarousels';

const LogoCarousel = () => {
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

  return (
    <LogoCarousels 
      images={images} 
      imagePath="/img/home slide"
      direction="left"
    />
  );
};

export default LogoCarousel;

