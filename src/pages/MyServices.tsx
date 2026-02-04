import ServicesCarousel from '../components/ServicesCarousel';
import LeftImageCarousel from '../components/LeftImageCarousel';
import StatsSection from '../components/StatsSection';
import ProjectDescription from '../components/ProjectDescription';
import useImageHover from '../hooks/useImageHover';
import PillButtons from '../components/PillButtons';
import { myServicesData } from '../data/myServicesData';

const MyServices = () => {
  const { hoverHandlers, initialStyle } = useImageHover();
  const { hero, videoCarousel, stats, video3, projectDescriptions, imageSections } = myServicesData;
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fff]">
        {/* Content Container */}
        <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 lg:px-8 py-8 md:py-0">
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px]">
            {/* Main Heading */}
            <h1 
              className="mb-4 md:mb-6 border-b-1 border-red-[#151513] font-inter-display-xl text-left"
              style={{
                color: 'rgb(21, 21, 19)',
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              <span className="block">{hero.title.line1}</span>
              <span className="block">{hero.title.line2}</span>
              <span className="block">{hero.title.line3}</span>
            </h1>
            
            {/* Paragraph Text */}
            <p 
              className="text-black text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-inter-display-base"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              {hero.description}
            </p>
            
            {/* Pill Buttons/Tags */}
            <PillButtons
              primaryButton={hero.buttons.primary}
              secondaryButtons={hero.buttons.secondary}
              variant="dark"
              withAnimation={false}
            />
          </div>

          {/* Right Side - Video Display */}
          <div className="flex-1 w-full md:w-auto flex items-center justify-center">
            <div className="relative w-full aspect-video overflow-hidden mix-blend-screen">
              <video
                src={hero.video}
                loop
                preload="auto"
                playsInline
                autoPlay
                muted
                style={{
                  cursor: 'auto',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0px',
                  display: 'block',
                  objectFit: 'fill',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  objectPosition: '50% 50%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video and Carousel Section */}
      <section className="w-full bg-[#efeeec]">
        <div className="mx-2 md:mx-5 rounded-2xl md:rounded-4xl bg-[#151513]">
          <div className="px-4 md:px-6 py-4 md:py-6">

        {/* Video Section */}
        <div className="w-full relative rounded-xl md:rounded-2xl" style={{ height: 'auto', minHeight: '300px' }}>
          <video
            src={videoCarousel.video}
            loop
            preload="auto"
            playsInline
            autoPlay
            muted
            style={{
              cursor: 'auto',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'fill',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
            className="rounded-t-xl md:rounded-t-2xl"
          />
        </div>

        {/* Carousel Section */}
        <div className="w-full">
          <ServicesCarousel />
        </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <StatsSection items={stats} />

      {/* Video Section */}
      <section className="w-full bg-[#efeeec]">
        <div className="w-full relative max-w-[1400px] mx-auto" style={{ height: 'auto', minHeight: '300px'}}>
          <video
            src={video3}
            loop
            preload="auto"
            playsInline
            autoPlay
            muted
            style={{
              cursor: 'auto',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'fill',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
          />
        </div>
      </section>

      {/* Project Description Section */}
      <ProjectDescription
        title={projectDescriptions[0].title}
        paragraphs={projectDescriptions[0].paragraphs}
      />

      {/* Jon Campbell Team Section with Background */}
      {imageSections.map((section, index) => (
        <section key={index} className="w-full relative mx-auto bg-[#efeeec]">
          {/* Background Image */}
          <div className="max-w-[1400px] mx-auto">
            <img
              src={section.backgroundImage}
              alt=""
              className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
              style={{
                zIndex: 0,
                ...initialStyle,
              }}
              {...hoverHandlers}
            />
            <div className="w-full py-4">
              <div className="relative w-full overflow-hidden flex flex-col">
                {/* Carousel Row */}
                <div className="w-full">
                  <LeftImageCarousel 
                    images={section.carousel.images} 
                    imagePath={section.carousel.imagePath}
                    direction="left"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
              <ProjectDescription
                title={projectDescriptions[index + 1].title}
                paragraphs={projectDescriptions[index + 1].paragraphs}
                buttonLink={projectDescriptions[index + 1].buttonLink}
                noSectionWrapper={projectDescriptions[index + 1].noSectionWrapper}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MyServices;

