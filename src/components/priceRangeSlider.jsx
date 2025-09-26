// import React, { useState } from "react";

// export default function PriceRangeSlider() {
//   const [priceRange, setPriceRange] = useState([0, 15000]);

//   const handleMinChange = (e) => {
//     const newMin = Math.min(Number(e.target.value), priceRange[1] - 500);
//     setPriceRange([newMin, priceRange[1]]);
//   };

//   const handleMaxChange = (e) => {
//     const newMax = Math.max(Number(e.target.value), priceRange[0] + 500);
//     setPriceRange([priceRange[0], newMax]);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-96 bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
//           Select Price Range
//         </h2>

//         <div className="relative w-full">
//           {/* Min Range */}
//           <input
//             type="range"
//             min="0"
//             max="15000"
//             value={priceRange[0]}
//             onChange={handleMinChange}
//             className="absolute pointer-events-none w-full accent-blue-500"
//           />

//           {/* Max Range */}
//           <input
//             type="range"
//             min="0"
//             max="15000"
//             value={priceRange[1]}
//             onChange={handleMaxChange}
//             className="absolute pointer-events-none w-full accent-blue-500"
//           />

//           {/* Track progress (colored bar between min & max) */}
//           <div className="h-2 bg-gray-200 rounded relative mt-6">
//             <div
//               className="h-2 bg-blue-500 rounded absolute"
//               style={{
//                 left: `${(priceRange[0] / 15000) * 100}%`,
//                 right: `${100 - (priceRange[1] / 15000) * 100}%`,
//               }}
//             />
//           </div>
//         </div>

//         {/* Price Labels */}
//         <div className="flex justify-between mt-6 text-gray-700 font-medium">
//           <span>₹{priceRange[0]}</span>
//           <span>₹{priceRange[1]}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// components/priceRangeSlider.jsx
import React from "react";

const PriceRangeSlider = ({ priceRange, setPriceRange, maxValue }) => {
  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), priceRange[1] - 100);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), priceRange[0] + 100);
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div className="price-range-wrapper">
      <div className="slider-container position-relative">
        {/* Min range slider */}
        <input
          type="range"
          min="0"
          max={maxValue}
          value={priceRange[0]}
          onChange={handleMinChange}
          className="range-input"
        />
        {/* Max range slider */}
        <input
          type="range"
          min="0"
          max={maxValue}
          value={priceRange[1]}
          onChange={handleMaxChange}
          className="range-input"
        />

        {/* Track highlight */}
        <div
          className="slider-track"
          style={{
            left: `${(priceRange[0] / maxValue) * 100}%`,
            right: `${100 - (priceRange[1] / maxValue) * 100}%`,
          }}
        ></div>
      </div>

      {/* Price labels */}
      <div className="d-flex justify-content-between mt-2">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          height: 6px;
        }
        .range-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          -webkit-appearance: none;
          background: none;
        }
        .range-input::-webkit-slider-thumb {
          pointer-events: all;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #28a745;
          border: none;
          cursor: pointer;
        }
        .range-input::-moz-range-thumb {
          pointer-events: all;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #28a745;
          border: none;
          cursor: pointer;
        }
        .slider-track {
          position: absolute;
          top: 50%;
          height: 6px;
          background: #28a745;
          transform: translateY(-50%);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default PriceRangeSlider;
