import React from 'react';

const NavBar = () => {
  return (
    <div className="flex items-center justify-center mb-10">
      <style>
        {`
          @keyframes animatedGradient {
            0% {
              background-image: linear-gradient(to right, #000000, #0000FF, #008000);
              background-position: 0% 50%;
            }
            100% {
              background-image: linear-gradient(to right, #008000, #0000FF, #000000);
              background-position: 100% 50%;
            }
          }

          .bg-gradient-animation {
            background-clip: text;
            -webkit-background-clip: text;
            animation: animatedGradient 5s linear infinite;
          }
        `}
      </style>
      <p className="text-6xl md:text-7xl lg:text-8xl bg-gradient-animation text-transparent w-30 font-boldx">
      1cliQ™
      </p>
    </div>
  );
};

export default NavBar;
