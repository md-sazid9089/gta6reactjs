import React from 'react'
import {useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from 'react';
export const App = () => {
   let [showContent, setshowContent] = useState(false)
  useGSAP(()=>{
    const tl = gsap.timeline()
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
        if(this.progress()>= .9){
          document.querySelector('.svg').remove();
          setshowContent(true)
          this.kill()
        }
        }
    })
})
  return (
    <>
     
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]"> 
       <svg className="0 0 800 600" preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id="viMask">
            <react width="100%" height="100%" fill="black"/>
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill='white'
                  dominantBaseline="middle"
                  fontFamily="Arial black"
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
      <div className='main w-full '>
        <div className='landing w-full h-screen bg-black'>
          <div className='navbar absolute top-0 left-0 w-full z-[10] py-10 px-10'></div>
        <div className="imagesdiv relative w-full h-full object-cover">
          <img className="absolute top-0 left-0 w-full h-full object-cover" src=".\sky.png" alt=""/>
          <img className="absolute top-0 left-0 w-full h-full object-cover" src=".\bg.png" alt=""/>
           <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
          <img className="absolute -bottom-[150%] left-1/2 -traslate-x-1/2 scale-[3]" src=".\girlbg.png" alt=""/>

        </div>
      </div>
      </div>
    )}
    </>
  )
}
export default App
