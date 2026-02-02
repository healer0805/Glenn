import LeftImageCarousel from "../components/LeftImageCarousel";
import RightImageCarousel from "../components/RightImageCarousel";

const PastWork = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/pastwork/pastwork-bg-1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 0
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-[2] flex flex-col justify-between p-6 md:p-8 lg:p-12">
            {/* Headline */}
            <div>
              <h1 
                className="text-white mb-4 md:mb-6"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(32px, 6vw, 64px)',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  letterSpacing: '-2px',
                  lineHeight: '1.1em',
                  textAlign: 'left',
                  animation: 'fadeInUp 1s ease-out',
                }}
              >
                The foundation<br />
                of everything
              </h1>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-white mb-4 md:mb-6" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}></div>
              
              {/* Body Text */}
              <p 
                className="text-white text-sm md:text-base leading-relaxed max-w-full md:max-w-[600px]"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                  lineHeight: '1.6em',
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                }}
              >
                At its core, full-stack development is problem-solving, and it's a craft I've spent years refining across the entire product stack. I've grown into a versatile engineer who's comfortable working end-to-end—from building clean, responsive user interfaces to designing scalable backend systems, APIs, and databases. I enjoy owning features from idea to production, making technical decisions that balance performance, reliability, and user experience. Every project challenges me to improve how I build and think, and that constant learning is what keeps me sharp and motivated.
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 md:gap-3 flex-wrap mt-6 md:mt-8">
              <button className="bg-white text-[#2a2a2a] px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-3 md:h-3">
                    <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span 
                  style={{
                    fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 600,
                  }}
                >
                  Branding
                </span>
              </button>
              <button className="bg-transparent text-white border border-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                }}
              >
                Portfolio
              </button>
              <button className="bg-transparent text-white border border-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                }}
              >
                Design
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-between p-6 md:p-8 lg:p-12">
            {/* Headline */}
            <h2 
              className="text-white"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(32px, 6vw, 64px)',
                fontStyle: 'normal',
                fontWeight: 600,
                letterSpacing: '-2px',
                lineHeight: '1.1em',
                textAlign: 'left',
                animation: 'fadeInRight 1s ease-out 0.6s both',
              }}
            >
              in a<br />
              lifetime
            </h2>
            
            {/* Scroll Indicator */}
            <div className="flex justify-end">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative mx-auto bg-[#efeeec] py-16">
        {/* Background Image */}
        <div className="max-w-[1400px] mx-auto">
        <img
          src="/img/pastwork/pastwork-bg-2.png"
          alt=""
          className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
          style={{
            zIndex: 0,
            transform: 'scale(1)',
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        />
        <div className="w-full py-4">
          <div className="relative w-full overflow-hidden flex flex-col">
            {/* Carousel Row */}
            <div className="w-full">
              <LeftImageCarousel 
                images={['1-1.png', '1-2.png', '1-3.png', '1-4.png', '1-5.png']} 
                imagePath="/img/pastwork"
                direction="left"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
          <div 
            className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const heading = entry.target.querySelector('h2') as HTMLElement;
                        const paragraph = entry.target.querySelector('p') as HTMLElement;
                        if (heading) {
                          heading.style.opacity = '1';
                          heading.style.transform = 'translateX(0)';
                        }
                        if (paragraph) {
                          paragraph.style.opacity = '1';
                          paragraph.style.transform = 'translateY(0)';
                        }
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            {/* Left Side - Heading with Icon */}
            <div className="flex-1 w-full md:w-auto flex items-start gap-3 md:gap-4">
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#151513',
                  flexShrink: 0,
                  marginTop: '4px'
                }}
              />
              <h2 
                className="text-[#151513] mb-0"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-1px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                A Beautiful Build
              </h2>
            </div>

            {/* Right Side - Content Paragraphs */}
            <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                }}
              >
                I've worked across many industries, but company branding and portfolio-driven products are where I do my best work. I enjoy building clean, modern digital experiences that connect brand identity with real usability.

                I've helped brands like The BrowGal and Blushed translate strong visual concepts into fast, scalable websites and campaigns, focusing on clarity, performance, and conversion. I've also built branded websites and email flows for wellness and skincare companies, keeping everything consistent across touchpoints.

                What I enjoy most is building brands end-to-end — from frontend polish to backend structure — so they don't just look good, but actually work.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="w-full relative mx-auto bg-[#efeeec]">
        {/* Background Image */}
        <div className="max-w-[1400px] mx-auto">
        <img
          src="/img/pastwork/pastwork-bg-3.png"
          alt=""
          className="w-full object-cover h-[400px] md:h-[500px] lg:h-[640px] rounded-lg md:rounded-xl transition-all duration-700 cursor-pointer"
          style={{
            zIndex: 0,
            transform: 'scale(1)',
            filter: 'brightness(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        />
        <div className="w-full py-4">
          <div className="relative w-full overflow-hidden flex flex-col">
            {/* Carousel Row */}
            <div className="w-full">
              <RightImageCarousel 
                images={['2-1.png', '2-2.png', '2-3.png', '2-4.png', '2-5.png']} 
                imagePath="/img/pastwork"
                direction="right"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 md:px-6 lg:px-8 relative py-12 md:py-16 lg:py-24" >
          <div 
            className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const heading = entry.target.querySelector('h2') as HTMLElement;
                        const paragraph = entry.target.querySelector('p') as HTMLElement;
                        if (heading) {
                          heading.style.opacity = '1';
                          heading.style.transform = 'translateX(0)';
                        }
                        if (paragraph) {
                          paragraph.style.opacity = '1';
                          paragraph.style.transform = 'translateY(0)';
                        }
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            {/* Left Side - Heading with Icon */}
            <div className="flex-1 w-full md:w-auto flex items-start gap-3 md:gap-4">
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#151513',
                  flexShrink: 0,
                  marginTop: '4px'
                }}
              />
              <h2 
                className="text-[#151513] mb-0"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-1px',
                  lineHeight: '1.2em',
                  textAlign: 'left',
                  opacity: 0,
                  transform: 'translateX(-30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
              >
                AI Systems That Scale
              </h2>
            </div>

            {/* Right Side - Content Paragraphs */}
            <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
              <p 
                className="text-[#151513] text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 400,
                  lineHeight: '1.6em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                }}
              >
                I specialize in building AI-driven solutions, including conversational systems, intelligent agents (agentic, MCP-based, and voice), RAG pipelines, and LLM workflows covering training, fine-tuning, deployment, and production integration. I work end-to-end — from shaping the model logic to shipping reliable, scalable applications across web and backend systems.

                Earlier in my career, I worked in high-output environments where speed, consistency, and quality were non-negotiable. For example, while working with large organizations, I was responsible for delivering complex assets on tight weekly deadlines. That experience shaped how I build AI systems today: structured, repeatable, production-ready, and built to operate under real-world constraints.

                This combination of AI depth and delivery discipline allows me to build solutions that don't just work in theory, but perform reliably in production.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PastWork;

