declare interface Window {
    matrixAnimation: {
      start: () => void;
      pause: () => void;
      resume: () => void;
      stop: () => void;
      restart: () => void;
      setSpeed: (speed: number) => void;
      reverse: () => void;
    };
  }
  