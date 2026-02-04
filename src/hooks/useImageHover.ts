import { useMemo } from 'react';

interface UseImageHoverOptions {
  scale?: number;
  brightness?: number;
}

const useImageHover = (options: UseImageHoverOptions = {}) => {
  const { scale = 1.08, brightness = 1.1 } = options;

  const hoverHandlers = useMemo(() => ({
    onMouseEnter: (e: React.MouseEvent<HTMLImageElement>) => {
      e.currentTarget.style.transform = `scale(${scale})`;
      e.currentTarget.style.filter = `brightness(${brightness})`;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLImageElement>) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'brightness(1)';
    }
  }), [scale, brightness]);

  const initialStyle = useMemo(() => ({
    transform: 'scale(1)',
    filter: 'brightness(1)',
  }), []);

  return {
    hoverHandlers,
    initialStyle,
  };
};

export default useImageHover;

