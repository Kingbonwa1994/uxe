import React from 'react';
import SignupButton from './SignUpButton';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mb-10">
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
      <p className="text-6xl md:text-7xl lg:text-8xl bg-gradient-animation text-transparent w-30 font-bold">
        1cliQ™
      </p>
      <SignupButton/> {/* This will place the button on the far right */}
    </div>
  );
};

export default NavBar;
