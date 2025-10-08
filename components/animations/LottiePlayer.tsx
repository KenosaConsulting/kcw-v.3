import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData?: any;
  animationPath?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  speed?: number;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  animationData,
  animationPath,
  loop = true,
  autoplay = true,
  className = '',
  speed = 1,
  onComplete,
  onLoopComplete,
}) => {
  const lottieRef = useRef<any>(null);
  const [animation, setAnimation] = React.useState<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      if (animationPath) {
        try {
          const response = await fetch(animationPath);
          const data = await response.json();
          setAnimation(data);
        } catch (error) {
          console.error('Failed to load Lottie animation:', error);
        }
      } else if (animationData) {
        setAnimation(animationData);
      }
    };

    loadAnimation();
  }, [animationPath, animationData]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  if (!animation) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse bg-white/10 rounded-lg w-full h-full" />
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animation}
      loop={loop}
      autoplay={autoplay}
      className={className}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
    />
  );
};

// Common loading animation component
export const LoadingAnimation: React.FC<{ size?: number; className?: string }> = ({
  size = 100,
  className = '',
}) => {
  return (
    <div style={{ width: size, height: size }} className={className}>
      <LottiePlayer animationPath="/animations/loading.json" loop autoplay />
    </div>
  );
};

// Original loading animation as fallback
export const LoadingAnimationFallback: React.FC<{ size?: number; className?: string }> = ({
  size = 100,
  className = '',
}) => {
  // Simple loading animation data (can be replaced with actual Lottie JSON)
  const loadingAnimation = {
    v: "5.5.7",
    fr: 30,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    nm: "Loading",
    ddd: 0,
    assets: [],
    layers: [{
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [{
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            t: 0,
            s: [0]
          }, {
            t: 60,
            s: [360]
          }],
          ix: 10
        },
        p: { a: 0, k: [50, 50, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [{
        ty: "gr",
        it: [{
          ty: "rc",
          d: 1,
          s: { a: 0, k: [60, 60], ix: 2 },
          p: { a: 0, k: [0, 0], ix: 3 },
          r: { a: 0, k: 10, ix: 4 },
          nm: "Rectangle Path 1",
          mn: "ADBE Vector Shape - Rect",
          hd: false
        }, {
          ty: "st",
          c: { a: 0, k: [0.231, 0.51, 0.965, 1], ix: 3 },
          o: { a: 0, k: 100, ix: 4 },
          w: { a: 0, k: 8, ix: 5 },
          lc: 2,
          lj: 2,
          bm: 0,
          nm: "Stroke 1",
          mn: "ADBE Vector Graphic - Stroke",
          hd: false,
          d: [{
            n: "d",
            nm: "dash",
            v: { a: 0, k: 30, ix: 1 }
          }, {
            n: "o",
            nm: "offset",
            v: { a: 0, k: 0, ix: 7 }
          }]
        }, {
          ty: "tr",
          p: { a: 0, k: [0, 0], ix: 2 },
          a: { a: 0, k: [0, 0], ix: 1 },
          s: { a: 0, k: [100, 100], ix: 3 },
          r: { a: 0, k: 0, ix: 6 },
          o: { a: 0, k: 100, ix: 7 },
          sk: { a: 0, k: 0, ix: 4 },
          sa: { a: 0, k: 0, ix: 5 },
          nm: "Transform"
        }],
        nm: "Rectangle 1",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      }],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }],
    markers: []
  };

  return (
    <div style={{ width: size, height: size }} className={className}>
      <LottiePlayer animationData={loadingAnimation} loop autoplay />
    </div>
  );
};

// Success animation component
export const SuccessAnimation: React.FC<{ 
  size?: number; 
  className?: string;
  onComplete?: () => void;
}> = ({
  size = 100,
  className = '',
  onComplete
}) => {
  // You can replace this with an actual success checkmark Lottie animation
  return (
    <div style={{ width: size, height: size }} className={`${className} flex items-center justify-center`}>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth="2"
        />
        <path
          className="checkmark__check"
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth="3"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
          strokeDasharray="48"
          strokeDashoffset="48"
        >
          <animate
            attributeName="stroke-dashoffset"
            to="0"
            dur="0.3s"
            begin="0.5s"
            fill="freeze"
            onEnd={onComplete}
          />
        </path>
      </svg>
    </div>
  );
};