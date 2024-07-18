import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SokobanGold: React.FC = () => {
  useEffect(() => {
    // Ensure the script runs after the component mounts
    const script = document.createElement('script');
    script.src = '/matrixAnimation.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sokoban Gold</title>
      </Head>
      <main className="relative flex items-center justify-center min-h-screen" style={{ backgroundColor: '#ebc72b' }}>
        {/* Fullscreen Canvas Animation */}
        <canvas id="matrix-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
        
        {/* Text Content in Front */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-4xl font-bold">Sokoban Gold PoW Game</h1>
          <p className="mt-4 text-xl">Coming Soon...</p>
          <Link href="/" className="mt-4 text-blue-500 underline">
            Go back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default SokobanGold;
