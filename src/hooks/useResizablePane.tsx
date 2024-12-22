import { useEffect } from 'react';

export const useResizablePane = () => {
  useEffect(() => {
    const resizer = document.getElementById('resizer');
    const leftPane = document.getElementById('leftPane') as HTMLElement;
    const rightPane = document.getElementById('rightPane') as HTMLElement;

    let isResizing = false;

    const startResize = (e: MouseEvent) => {
      e.preventDefault();
      isResizing = true;
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
    };

    const resize = (e: MouseEvent) => {
      if (!isResizing) return;
      const containerWidth = resizer?.parentElement?.offsetWidth || 0;
      const leftWidth = Math.max(
        10,
        Math.min((e.clientX / containerWidth) * 100, 90),
      );
      if (leftPane && rightPane) {
        leftPane.style.flexBasis = `${leftWidth}%`;
        rightPane.style.flexBasis = `${100 - leftWidth}%`;
      }
    };

    const stopResize = () => {
      isResizing = false;
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    };

    resizer?.addEventListener('mousedown', startResize);

    return () => {
      resizer?.removeEventListener('mousedown', startResize);
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    };
  }, []);
};
