import { useEffect, useRef, useState } from 'react';

interface StatsItem {
  title: string;
  text: string;
}

interface StatsSectionProps {
  items: StatsItem[];
}

const StatsSection = ({ items }: StatsSectionProps) => {
  return (
    <section className="w-full bg-[#efeeec] py-8 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {items.map((block, index, array) => {
          const blockRef = useRef<HTMLDivElement>(null);
          const [isVisible, setIsVisible] = useState(false);

          useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    setTimeout(() => {
                      setIsVisible(true);
                    }, index * 150);
                    observer.unobserve(entry.target);
                  }
                });
              },
              { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );

            if (blockRef.current) {
              observer.observe(blockRef.current);
            }

            return () => {
              if (blockRef.current) {
                observer.unobserve(blockRef.current);
              }
            };
          }, [index]);

          return (
            <div 
              key={index}
              ref={blockRef}
              className={`flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 py-6 md:py-8 ${index < array.length - 1 ? 'border-b border-[#151513]' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${index * 0.15}s`,
              }}
            >
              <div className="flex-1 w-full md:w-auto py-5">
                <h2 
                  className="text-[#151513] mb-0"
                  style={{
                    fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                    fontSize: 'clamp(28px, 5vw, 56px)',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    lineHeight: '1.1em',
                    textAlign: 'left'
                  }}
                >
                  {block.title}
                </h2>
              </div>
              <div className="flex-1 w-full md:w-auto max-w-full md:max-w-[600px]">
                <p 
                  className="text-[#151513] text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 400,
                    lineHeight: '1.6em',
                  }}
                >
                  {block.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;

