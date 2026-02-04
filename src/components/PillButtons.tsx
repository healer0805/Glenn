import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonConfig {
  label: string;
  path?: string;
  onClick?: () => void;
}

interface PillButtonsProps {
  primaryButton: ButtonConfig & { showIcon?: boolean };
  secondaryButtons: ButtonConfig[];
  variant?: 'dark' | 'light';
  withAnimation?: boolean;
  className?: string;
}

const PillButtons = ({ 
  primaryButton, 
  secondaryButtons, 
  variant = 'light',
  withAnimation = false,
  className = ''
}: PillButtonsProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (withAnimation && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
              }, 400);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [withAnimation]);

  const handleClick = (button: ButtonConfig) => {
    if (button.path) {
      navigate(button.path);
    } else if (button.onClick) {
      button.onClick();
    }
  };

  const containerClassName = withAnimation 
    ? `flex gap-2 md:gap-3 flex-wrap mt-6 md:mt-8 ${className}`
    : `flex gap-2 md:gap-3 flex-wrap ${className}`;

  const containerStyle = withAnimation ? {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
  } : {};

  const primaryButtonClass = variant === 'dark'
    ? 'bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity'
    : 'bg-white text-[#151513] px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity border border-[#151513]';

  const secondaryButtonClass = variant === 'dark'
    ? 'bg-[#9ca3af] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity'
    : 'bg-transparent text-white border border-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-80 transition-opacity';

  const textStyle = {
    fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
    fontSize: 'clamp(14px, 2vw, 16px)',
    fontWeight: 600,
    lineHeight: variant === 'dark' ? '1.3em' : '1em',
  };

  return (
    <div 
      ref={withAnimation ? containerRef : null}
      className={containerClassName}
      style={containerStyle}
    >
      {/* Primary Button */}
      <button 
        onClick={() => handleClick(primaryButton)}
        className={primaryButtonClass}
      >
        {primaryButton.showIcon !== false && variant === 'light' && (
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#151513] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-3 md:h-3">
              <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {variant === 'dark' && primaryButton.showIcon !== false && (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <span style={textStyle}>
          {primaryButton.label}
        </span>
      </button>

      {/* Secondary Buttons */}
      {secondaryButtons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(button)}
          className={secondaryButtonClass}
          style={textStyle}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default PillButtons;

