import { useEffect, useRef } from 'react';
import Content from './Content'; // We will create this file next!

function App() {
  const mainContentRef = useRef(null);
  const centerFoldRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContentRef = useRef(null);

  // Easter egg preserved from the original source code!
  useEffect(() => {
    console.log(`
          |
          |   .
   \`.  * |     .'      
     \`. ._|_* .'  .     
   . * .'   \`.  * Hit print
-------|     |-------   (ctrl/cmd + p)
   .  *\`.___.' * .     for a fun
      .'  |* \`.  * surprise～
    .' * |  . \`.
        . |
          | 
    `);
  }, []);

  useEffect(() => {
    const mainContent = mainContentRef.current;
    const centerFold = centerFoldRef.current;
    
    // Group all three content wrappers together
    const contentWrappers = [
      topContentRef.current, 
      mainContentRef.current, 
      bottomContentRef.current
    ].filter(Boolean);

    if (!mainContent || !centerFold || contentWrappers.length === 0) return;

    const originalBodyHeight = document.body.style.height;
    let animationFrameId;

    // 1. Calculate how tall the body needs to be to allow scrolling
    // Since our app is technically fixed to the screen (100vh), the browser won't let us scroll.
    // We force the body height to match the actual length of the content minus the viewport.
    const setBodyHeight = () => {
      const scrollableDistance = mainContent.clientHeight - centerFold.clientHeight;
      document.body.style.height = `${scrollableDistance + window.innerHeight}px`;
    };

    // 2. Sync the scroll position to the CSS transform of the content
    // This runs continuously. As the invisible body scrolls, we push the content up.
    const syncScroll = () => {
      const scrollY = -(window.scrollY || document.documentElement.scrollTop || 0);
      contentWrappers.forEach((wrapper) => {
        wrapper.style.transform = `translateY(${scrollY}px)`;
      });
      animationFrameId = requestAnimationFrame(syncScroll);
    };

    // Initialize
    window.addEventListener('resize', setBodyHeight);
    setBodyHeight();
    syncScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', setBodyHeight);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.body.style.height = originalBodyHeight;
    };
  }, []);

  return (
    <div className="app-all">
      <div className="wrapper-3d">

        {/* Top Fold */}
        <div className="fold fold-top">
          <div className="fold-align">
            <div data-fold-content="true" ref={topContentRef}>
              <Content />
            </div>
          </div>
        </div>

        {/* Center Fold (The flat part you look directly at) */}
        <div className="fold" id="center-fold" ref={centerFoldRef}>
          <div className="fold-align">
            <div data-fold-content="true" id="center-content" ref={mainContentRef}>
              <Content />
            </div>
          </div>
        </div>

        {/* Bottom Fold */}
        <div className="fold fold-bottom">
          <div className="fold-align">
            <div data-fold-content="true" ref={bottomContentRef}>
              <Content />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;