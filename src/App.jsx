import React from 'react'
import {useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export const App = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%',
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
    </>
)
}
export default App