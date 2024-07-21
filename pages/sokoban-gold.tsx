import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';

const SokobanGold: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(50); // Default speed

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/matrixAnimation.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.matrixAnimation) {
        window.matrixAnimation.start();
      }
    };

    return () => {
      if (window.matrixAnimation) {
        window.matrixAnimation.stop();
      }
      document.body.removeChild(script);
    };
  }, []);

  const handlePause = useCallback(() => {
    if (window.matrixAnimation) {
      setIsPaused(true);
      window.matrixAnimation.pause();
    }
  }, []);

  const handleResume = useCallback(() => {
    if (window.matrixAnimation) {
      setIsPaused(false);
      window.matrixAnimation.resume();
    }
  }, []);

  const handleSpeedChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseInt(event.target.value, 10);
    setSpeed(newSpeed);
    if (window.matrixAnimation) {
      window.matrixAnimation.setSpeed(newSpeed);
    }
  }, []);

  const handleRestart = useCallback(() => {
    if (window.matrixAnimation) {
      window.matrixAnimation.restart();
      setIsPaused(false); // Ensure the animation is not paused after restart
    }
  }, []);

  const handleReverse = useCallback(() => {
    if (window.matrixAnimation) {
      window.matrixAnimation.reverse();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Sokoban Gold</title>
      </Head>
      <main className="relative flex items-center justify-center min-h-screen" style={{ backgroundColor: '#ebc72b' }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-4xl font-bold">Sokoban Gold PoW Game</h1>
          <p className="mt-4 text-xl">Coming Soon...</p>
          <button
            onClick={isPaused ? handleResume : handlePause}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isPaused ? 'Resume Animation' : 'Pause Animation'}
          </button>
          <button
            onClick={handleRestart}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Restart Animation
          </button>
          <button
            onClick={handleReverse}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Reverse Animation
          </button>
          <div className="mt-4">
            <label htmlFor="speedControl" className="mr-2">Animation Speed (ms):</label>
            <input
              id="speedControl"
              type="number"
              value={speed}
              onChange={handleSpeedChange}
              min="10"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <canvas id="matrix-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      </main>
    </>
  );
};

export default SokobanGold;
