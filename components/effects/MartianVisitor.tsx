import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface MartianConfig {
  enabled: boolean;
  intervalMin: number;
  intervalMax: number;
  duration: number;
  scale: {
    min: number;
    max: number;
  };
  blur: {
    min: number;
    max: number;
  };
  pathCurve: number;
  rotationAmount: number;
  showDebug: boolean;
}

export const MartianVisitor: React.FC = () => {
  const [config, setConfig] = useState<MartianConfig>({
    enabled: true,
    intervalMin: 30,
    intervalMax: 45,
    duration: 8,
    scale: {
      min: 0.3,
      max: 1.5
    },
    blur: {
      min: 0,
      max: 3
    },
    pathCurve: 200,
    rotationAmount: 15,
    showDebug: false
  });

  const [showControls, setShowControls] = useState(false);
  const [flightPattern, setFlightPattern] = useState<'scout' | 'investigate' | 'scan' | 'retreat'>('scout');
  const ufoRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const createFlightPath = () => {
    if (!ufoRef.current || !config.enabled) return;

    const ufo = ufoRef.current;
    const patterns = ['scout', 'investigate', 'scan', 'retreat'];
    const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
    setFlightPattern(selectedPattern as any);

    const timeline = gsap.timeline({
      onComplete: scheduleNextFlight
    });

    switch (selectedPattern) {
      case 'investigate':
        // UFO comes in, hovers near mouse/center, examines, then leaves
        createInvestigationPattern(timeline, ufo);
        break;
      
      case 'scan':
        // UFO does a scanning sweep across the page
        createScanPattern(timeline, ufo);
        break;
      
      case 'retreat':
        // Quick in and out, as if startled
        createRetreatPattern(timeline, ufo);
        break;
      
      default:
        // Standard scouting flyby
        createScoutPattern(timeline, ufo);
    }
  };

  const createInvestigationPattern = (timeline: any, ufo: HTMLDivElement) => {
    // Entry from top
    gsap.set(ufo, {
      left: window.innerWidth / 2,
      top: -100,
      scale: config.scale.min,
      opacity: 0,
      filter: `blur(${config.blur.max}px)`,
      rotation: 0
    });

    // Descend slowly
    timeline.to(ufo, {
      opacity: 1,
      top: window.innerHeight * 0.3,
      scale: config.scale.max * 0.8,
      filter: `blur(0px)`,
      duration: 2,
      ease: "power2.inOut"
    });

    // Hover and wobble (examining)
    timeline.to(ufo, {
      left: "+=50",
      rotation: 5,
      duration: 0.5,
      ease: "power1.inOut"
    });
    timeline.to(ufo, {
      left: "-=100",
      rotation: -5,
      duration: 1,
      ease: "power1.inOut"
    });
    timeline.to(ufo, {
      left: "+=50",
      rotation: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });

    // Move closer (curious)
    timeline.to(ufo, {
      scale: config.scale.max,
      top: window.innerHeight * 0.4,
      duration: 1
    });

    // Quick retreat
    timeline.to(ufo, {
      top: -100,
      scale: config.scale.min,
      filter: `blur(${config.blur.max}px)`,
      rotation: 180,
      duration: 1.5,
      ease: "power2.in",
      opacity: 0
    });
  };

  const createScanPattern = (timeline: any, ufo: HTMLDivElement) => {
    // Systematic left-to-right scanning pattern
    gsap.set(ufo, {
      left: -100,
      top: 100,
      scale: config.scale.max * 0.7,
      opacity: 0,
      filter: `blur(1px)`,
      rotation: 0
    });

    timeline.to(ufo, { opacity: 1, duration: 0.5 });

    // Scan across in steps
    for (let i = 0; i < 3; i++) {
      timeline.to(ufo, {
        left: (window.innerWidth / 4) * (i + 1),
        duration: 1,
        ease: "power1.inOut"
      });
      timeline.to(ufo, {
        top: "+=30",
        duration: 0.3
      });
      timeline.to(ufo, {
        top: "-=30",
        duration: 0.3
      });
    }

    // Exit
    timeline.to(ufo, {
      left: window.innerWidth + 100,
      opacity: 0,
      duration: 1,
      ease: "power2.in"
    });
  };

  const createRetreatPattern = (timeline: any, ufo: HTMLDivElement) => {
    // Quick peek and retreat
    const side = Math.random() > 0.5 ? 'left' : 'right';
    
    gsap.set(ufo, {
      left: side === 'left' ? -100 : window.innerWidth + 100,
      top: window.innerHeight * 0.5,
      scale: config.scale.min,
      opacity: 0,
      filter: `blur(${config.blur.max}px)`,
      rotation: 0
    });

    // Quick approach
    timeline.to(ufo, {
      left: side === 'left' ? 200 : window.innerWidth - 200,
      scale: config.scale.max * 0.6,
      filter: `blur(0px)`,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Pause (as if noticing something)
    timeline.to(ufo, {
      rotation: side === 'left' ? -10 : 10,
      duration: 0.3
    });

    // Rapid retreat
    timeline.to(ufo, {
      left: side === 'left' ? -150 : window.innerWidth + 150,
      scale: config.scale.min * 0.5,
      filter: `blur(${config.blur.max * 2}px)`,
      opacity: 0,
      rotation: side === 'left' ? -180 : 180,
      duration: 0.6,
      ease: "power3.in"
    });
  };

  const createScoutPattern = (timeline: any, ufo: HTMLDivElement) => {
    // Original flight pattern
    const startSide = Math.random() > 0.5 ? 'left' : 'right';
    const startY = Math.random() * window.innerHeight;
    
    gsap.set(ufo, {
      left: startSide === 'left' ? -100 : window.innerWidth + 100,
      top: startY,
      scale: config.scale.min,
      opacity: 0,
      filter: `blur(${config.blur.max}px)`,
      rotation: 0
    });

    timeline.to(ufo, {
      opacity: 1,
      duration: 0.5
    });

    const midX = window.innerWidth / 2 + (Math.random() - 0.5) * 400;
    const midY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
    const endX = startSide === 'left' ? window.innerWidth + 100 : -100;
    const endY = Math.random() * window.innerHeight;

    timeline.to(ufo, {
      duration: config.duration,
      ease: "power1.inOut",
      left: midX,
      top: midY - config.pathCurve,
      scale: config.scale.max,
      filter: `blur(${config.blur.min}px)`,
      rotation: startSide === 'left' ? config.rotationAmount : -config.rotationAmount
    }, "-=0.3");

    timeline.to(ufo, {
      duration: config.duration / 2,
      ease: "power2.in",
      left: endX,
      top: endY,
      scale: config.scale.min,
      filter: `blur(${config.blur.max}px)`,
      rotation: startSide === 'left' ? -config.rotationAmount : config.rotationAmount
    });

    timeline.to(ufo, {
      opacity: 0,
      duration: 0.5
    }, "-=0.5");
  };

  const scheduleNextFlight = () => {
    if (!config.enabled) return;
    const delay = (config.intervalMin + Math.random() * (config.intervalMax - config.intervalMin)) * 1000;
    timeoutRef.current = setTimeout(createFlightPath, delay);
  };

  useEffect(() => {
    if (config.enabled) {
      scheduleNextFlight();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [config.enabled, config.intervalMin, config.intervalMax]);

  return (
    <>
      {/* UFO/Martian Sprite */}
      <div
        ref={ufoRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: '60px',
          height: '40px',
          opacity: 0
        }}
      >
        {/* Pixelated UFO design - 1950s Classic Flying Saucer */}
        <div className="relative w-full h-full">
          {/* Main saucer body - silver metallic */}
          <div 
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-lg"
            style={{ imageRendering: 'pixelated' }}
          />
          
          {/* Upper dome - glass/chrome */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-2 w-6 h-4 bg-gradient-to-b from-white via-gray-200 to-gray-300 rounded-t-full opacity-90"
            style={{ imageRendering: 'pixelated' }}
          />
          
          {/* Chrome rim detail */}
          <div 
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-gray-600 via-white to-gray-600 opacity-60"
          />
          
          {/* Porthole windows - simple dots */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-80" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-80" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-80" />
          <div className="absolute top-1/2 -translate-y-1/2 right-3 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-80" />
          
          {/* Bottom antenna/light - subtle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-70" />
          
          {/* Subtle glow effect underneath */}
          <div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-cyan-400/20 rounded-full blur-md animate-pulse"
          />
        </div>
        
        {/* Debug info */}
        {config.showDebug && (
          <div className="absolute -top-6 left-0 text-xs text-white bg-black/50 px-1 rounded">
            UFO
          </div>
        )}
      </div>

      {/* Control Panel Toggle Button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        title="Martian Controls"
      >
        🛸
      </button>

      {/* Control Panel */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 z-50 bg-black/90 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 w-80 text-white"
        >
          <h3 className="text-lg font-bold mb-4 text-purple-400">🛸 Martian Visitor Controls</h3>
          
          {/* Enable/Disable */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={config.enabled}
                onChange={(e) => setConfig({ ...config, enabled: e.target.checked })}
                className="w-4 h-4"
              />
              <span>Enable Animation</span>
            </label>
          </div>

          {/* Interval Range */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Interval (seconds)</label>
            <div className="flex gap-2 mt-1">
              <input
                type="number"
                value={config.intervalMin}
                onChange={(e) => setConfig({ ...config, intervalMin: Number(e.target.value) })}
                className="w-20 px-2 py-1 bg-black/50 border border-purple-500/30 rounded text-sm"
              />
              <span className="text-gray-400">to</span>
              <input
                type="number"
                value={config.intervalMax}
                onChange={(e) => setConfig({ ...config, intervalMax: Number(e.target.value) })}
                className="w-20 px-2 py-1 bg-black/50 border border-purple-500/30 rounded text-sm"
              />
            </div>
          </div>

          {/* Flight Duration */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Flight Duration</label>
            <input
              type="range"
              min="3"
              max="15"
              step="0.5"
              value={config.duration}
              onChange={(e) => setConfig({ ...config, duration: Number(e.target.value) })}
              className="w-full mt-1"
            />
            <span className="text-xs text-gray-400">{config.duration}s</span>
          </div>

          {/* Scale Range */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Scale Range (Depth)</label>
            <div className="flex gap-2 mt-1">
              <div className="flex-1">
                <input
                  type="range"
                  min="0.1"
                  max="0.5"
                  step="0.05"
                  value={config.scale.min}
                  onChange={(e) => setConfig({ ...config, scale: { ...config.scale, min: Number(e.target.value) } })}
                  className="w-full"
                />
                <span className="text-xs text-gray-400">Far: {config.scale.min}x</span>
              </div>
              <div className="flex-1">
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={config.scale.max}
                  onChange={(e) => setConfig({ ...config, scale: { ...config.scale, max: Number(e.target.value) } })}
                  className="w-full"
                />
                <span className="text-xs text-gray-400">Near: {config.scale.max}x</span>
              </div>
            </div>
          </div>

          {/* Blur Range */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Blur Range (Depth)</label>
            <div className="flex gap-2 mt-1">
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={config.blur.max}
                  onChange={(e) => setConfig({ ...config, blur: { ...config.blur, max: Number(e.target.value) } })}
                  className="w-full"
                />
                <span className="text-xs text-gray-400">Far: {config.blur.max}px</span>
              </div>
            </div>
          </div>

          {/* Path Curve */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Path Curve Height</label>
            <input
              type="range"
              min="0"
              max="400"
              step="10"
              value={config.pathCurve}
              onChange={(e) => setConfig({ ...config, pathCurve: Number(e.target.value) })}
              className="w-full mt-1"
            />
            <span className="text-xs text-gray-400">{config.pathCurve}px</span>
          </div>

          {/* Rotation */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Banking Angle</label>
            <input
              type="range"
              min="0"
              max="45"
              step="5"
              value={config.rotationAmount}
              onChange={(e) => setConfig({ ...config, rotationAmount: Number(e.target.value) })}
              className="w-full mt-1"
            />
            <span className="text-xs text-gray-400">{config.rotationAmount}°</span>
          </div>

          {/* Debug Mode */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={config.showDebug}
                onChange={(e) => setConfig({ ...config, showDebug: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm">Show Debug Info</span>
            </label>
          </div>

          {/* Trigger Now Button */}
          <button
            onClick={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              createFlightPath();
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Trigger Flight Now
          </button>

          <div className="mt-4 text-xs text-gray-400">
            <div className="mb-2">Current Pattern: <span className="text-purple-400 font-bold">{flightPattern}</span></div>
            <div>Flight patterns:</div>
            <ul className="text-xs mt-1">
              <li>• <span className="text-purple-300">Scout</span>: Standard flyby</li>
              <li>• <span className="text-purple-300">Investigate</span>: Hovers & examines</li>
              <li>• <span className="text-purple-300">Scan</span>: Systematic sweep</li>
              <li>• <span className="text-purple-300">Retreat</span>: Quick peek & escape</li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};