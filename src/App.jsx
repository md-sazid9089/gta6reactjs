import React from 'react'

export const App = () => {
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