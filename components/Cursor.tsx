import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
        
        outlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 300, fill: "forwards" });
      }
    };
    
    const onMouseOver = (e: MouseEvent) => {
      if (outlineRef.current) {
        if((e.target as HTMLElement).closest('a, button')){
          outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }
      }
    }
    
    const onMouseOut = (e: MouseEvent) => {
       if (outlineRef.current) {
        if((e.target as HTMLElement).closest('a, button')){
          outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      }
    }

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    };
  }, []);

  return (
    <>
      <div
        ref={outlineRef}
        className="cursor-outline w-8 h-8 border-2 border-purple-500 transition-transform duration-200"
      ></div>
      <div
        ref={dotRef}
        className="cursor-dot w-2 h-2 bg-purple-400"
      ></div>
    </>
  );
};

export default Cursor;