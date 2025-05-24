import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'

export const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%',
    })
      .to('.vi-mask-group', {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: 'expo.easeInOut',
        transformOrigin: '50% 50%',
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            const svgEl = document.querySelector('.svg');
            if (svgEl) svgEl.remove();
            setShowContent(true);
            this.kill();
          }
        }
      });
  }, []);

  const imagesDivRef = useRef(null);
  useEffect(() => {
    if (!showContent) return;

    const imagesDiv = imagesDivRef.current;
    if (!imagesDiv) return;

    const skyImg = imagesDiv.querySelector('img[src="./sky.png"]');
    const bgImg = imagesDiv.querySelector('img[src="./bg.png"]');

    if (!skyImg || !bgImg) return;
    const maxTranslate = 15;

    function onMouseMove(e) {
      const rect = imagesDiv.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const relY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    gsap.to(skyImg, {
        x: relX * maxTranslate * 0.3,
        y: relY * maxTranslate * 0.3,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(bgImg, {
        x: relX * maxTranslate,
        y: relY * maxTranslate,
        duration: 0.3,
        ease: "power1.out",
      });
    }

    function onMouseLeave() {
      gsap.to([skyImg, bgImg], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    imagesDiv.addEventListener('mousemove', onMouseMove);
    imagesDiv.addEventListener('mouseleave', onMouseLeave);

    return () => {
      imagesDiv.removeEventListener('mousemove', onMouseMove);
      imagesDiv.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div
              ref={imagesDivRef}
              className="imagesdiv relative overflow-hidden w-full h-full object-cover"
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="Sky"
              />
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt="Background"
              />
              <div className="text-white absolute left-1/2 -translate-x-1/2 w-[210px] md:w-[150px] lg:w-[450px] transition-all duration-500 ease-in-out">
                <h1 className="text-[10rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[10rem] leading-none ml-20">theft</h1>
                <h1 className="text-[10rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute -bottom-29 left-1/2 -translate-x-1/2 w-[210px] md:w-[150px] lg:w-[450px] transition-all duration-500 ease-in-out"
                src="./girlbg.png"
                alt="Girl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
 