import React from 'react';





export default function Home() {
  return (
    <main className="flex relative flex-col sm:w-full md:w-96 p-14 shadow-md lg:w-full animate-gradient bg-inherit">
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background: linear-gradient(to top right, #2D8B57, #34D399, #056A38);
            }
            50% {
              background: linear-gradient(to top right, #034E26, #2D8B57, #34D399);
            }
            100% {
              background: linear-gradient(to top right, #34D399, #056A38, #2D8B57);
            }
          }

          .animate-gradient {
            animation: gradientAnimation 5s linear infinite alternate;
          }
        `}
      </style>

      
    </main>
  );
}
