import { useEffect, useRef } from 'react';

interface ParagraphItem {
  text: string;
  italic?: boolean;
}

type Paragraph = string | ParagraphItem;

interface ProjectDescriptionProps {
  title: string;
  paragraphs: Paragraph[];
  buttonLink?: string;
  buttonText?: string;
  noSectionWrapper?: boolean;
}

const ProjectDescription = ({ title, paragraphs, buttonLink, buttonText = 'See Website', noSectionWrapper = false }: ProjectDescriptionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('h2') as HTMLElement;
            const paragraphs = entry.target.querySelectorAll('p');
            if (heading) {
              heading.style.opacity = '1';
              heading.style.transform = 'translateX(0)';
            }
            paragraphs.forEach((p, idx) => {
              setTimeout(() => {
                (p as HTMLElement).style.opacity = '1';
                (p as HTMLElement).style.transform = 'translateY(0)';
              }, idx * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const content = (
    <>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
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
              {title}
            </h2>
          </div>

          {/* Right Side - Content Paragraphs */}
          <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[700px] space-y-4 md:space-y-6">
            {paragraphs.map((item, index) => {
              const text = typeof item === 'string' ? item : item.text;
              const isItalic = typeof item === 'object' && item.italic;
              return (
                <p 
                  key={index}
                  className="text-[#151513] text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 400,
                    fontStyle: isItalic ? 'italic' : 'normal',
                    lineHeight: '1.6em',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  }}
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        
        {/* Optional Button */}
        {buttonLink && (
          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 bg-[#151513] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:opacity-80 transition-opacity"
              style={{
                fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>{buttonText}</span>
            </a>
          </div>
        )}
      </div>
    </>
  );

  if (noSectionWrapper) {
    return content;
  }

  return (
    <section className="w-full bg-[#efeeec] py-8 md:py-16">
      {content}
    </section>
  );
};

export default ProjectDescription;

