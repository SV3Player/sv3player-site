'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

interface Blob {
  id: number;
  orbitPhase: number;
  orbitPeriod: number;
  minRadius: number;
  maxRadius: number;
  baseSize: number;
  minSizeRatio: number;
  clockwise: boolean;
  speedMultiplier: number;
}

interface ScatteredBubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface AnimatedGlassBackgroundProps {
  blobCount?: number;
  speed?: number;
  tintColor?: string;
  className?: string;
  height?: string;
}

const STORAGE_KEY = 'sv3-animation-enabled';

export function AnimatedGlassBackground({
  blobCount = 10,
  speed = 0.25,
  tintColor = 'rgba(59, 130, 246, 0.25)',
  className = '',
  height = '600px',
}: AnimatedGlassBackgroundProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Load preference from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setEnabled(stored === 'true');
    }
  }, []);

  // Toggle animation
  const toggleAnimation = useCallback(() => {
    const newValue = !enabled;
    setEnabled(newValue);
    localStorage.setItem(STORAGE_KEY, String(newValue));
  }, [enabled]);

  // Generate blobs once on mount - BIGGER sizes
  const blobs = useMemo<Blob[]>(() => {
    return Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      orbitPhase: Math.random() * Math.PI * 2,
      orbitPeriod: 6 + Math.random() * 10, // 6-16 seconds (slower)
      minRadius: 80 + Math.random() * 40, // 80-120
      maxRadius: 250 + Math.random() * 150, // 250-400
      baseSize: 150 + Math.random() * 100, // 150-250 (bigger)
      minSizeRatio: 0.1 + Math.random() * 0.1, // 0.1-0.2 (bigger minimum)
      clockwise: Math.random() > 0.5,
      speedMultiplier: 0.3 + Math.random() * 1.0, // 0.3-1.3
    }));
  }, [blobCount]);

  // Generate scattered bubbles - BIGGER
  const scatteredBubbles = useMemo<ScatteredBubble[]>(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const seed = i * 127 + 31;
      return {
        id: i,
        x: Math.abs(Math.sin(seed * 1.1) % 1) * 100,
        y: Math.abs(Math.cos(seed * 1.3) % 1) * 100,
        size: 20 * (0.5 + Math.abs(Math.sin(seed * 0.7)) * 1.5), // bigger
        opacity: 0.1 + Math.abs(Math.cos(seed * 0.9)) * 0.15,
      };
    });
  }, []);

  // Animation loop
  useEffect(() => {
    if (!enabled) return;

    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      setCurrentTime(elapsed);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled]);

  // Calculate orbital position for a blob
  const getOrbitalPosition = (blob: Blob, time: number) => {
    const effectiveSpeed = speed * blob.speedMultiplier;
    const direction = blob.clockwise ? 1 : -1;

    const period = blob.orbitPeriod / effectiveSpeed;
    const angle = direction * (time / period + blob.orbitPhase) * 2 * Math.PI;

    // Asymmetric radial motion: lingers at outer, quick dip to inner
    const fallPeriod = period * 1.5;
    const fallPhase = (time / fallPeriod + blob.orbitPhase * 0.7) * 2 * Math.PI;
    const rawWave = Math.sin(fallPhase);
    const skewedWave = (rawWave >= 0 ? 1 : -1) * Math.pow(Math.abs(rawWave), 0.6);
    const currentRadius = blob.minRadius + (blob.maxRadius - blob.minRadius) * ((skewedWave + 1) / 2);

    const x = Math.cos(angle) * currentRadius;
    const y = Math.sin(angle) * currentRadius;

    // Calculate size based on distance
    const distanceRatio = (currentRadius - blob.minRadius) / (blob.maxRadius - blob.minRadius);
    const sizeRatio = blob.minSizeRatio + (1 - blob.minSizeRatio) * distanceRatio;
    const size = blob.baseSize * sizeRatio;

    return { x, y, size };
  };

  // Don't render on server
  if (!mounted) {
    return <div className={`relative overflow-hidden ${className}`} style={{ height }} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      {/* Toggle button */}
      <button
        onClick={toggleAnimation}
        className="absolute top-4 right-4 z-20 px-3 py-1.5 text-xs rounded-full bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors text-gray-600 dark:text-gray-300"
        aria-label={enabled ? 'Disable animation' : 'Enable animation'}
      >
        {enabled ? 'Pause' : 'Play'} Animation
      </button>

      {enabled ? (
        <>
          {/* SVG filters for metaball effects */}
          <svg className="absolute w-0 h-0">
            <defs>
              {/* Goo filter for fills - creates merged metaball shape */}
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
              {/* Goo outline filter - creates border of the merged shape only */}
              <filter id="goo-outline" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
                  result="goo"
                />
                {/* Expand the merged shape */}
                <feMorphology in="goo" operator="dilate" radius="1" result="expanded" />
                {/* Shrink the merged shape */}
                <feMorphology in="goo" operator="erode" radius="0.5" result="shrunk" />
                {/* Subtract to get only the outline */}
                <feComposite in="expanded" in2="shrunk" operator="out" result="outline" />
                {/* Make it white/visible */}
                <feColorMatrix
                  in="outline"
                  mode="matrix"
                  values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"
                />
              </filter>
            </defs>
          </svg>

          {/* Scattered background bubbles */}
          <div className="absolute inset-0">
            {scatteredBubbles.map((bubble) => (
              <div
                key={`bubble-${bubble.id}`}
                className="absolute rounded-full"
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: bubble.size,
                  height: bubble.size,
                  background: `
                    radial-gradient(ellipse at 25% 15%, rgba(255,255,255,0.4) 0%, transparent 40%)
                  `,
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  opacity: bubble.opacity + 0.3,
                }}
              />
            ))}
          </div>

          {/* Glass fill layer with metaball merge + refraction */}
          <div
            className="absolute inset-0"
            style={{ filter: 'url(#goo)' }}
          >
            {blobs.map((blob) => {
              const { x, y, size } = getOrbitalPosition(blob, currentTime);
              return (
                <div
                  key={`blob-fill-${blob.id}`}
                  className="absolute rounded-full will-change-transform"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: size,
                    height: size,
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px) saturate(1.2)',
                    WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
                  }}
                />
              );
            })}
          </div>

          {/* Border layer - outline of merged shape only (dissolves at overlap points) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ filter: 'url(#goo-outline)' }}
          >
            {blobs.map((blob) => {
              const { x, y, size } = getOrbitalPosition(blob, currentTime);
              return (
                <div
                  key={`blob-border-${blob.id}`}
                  className="absolute rounded-full will-change-transform"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: size,
                    height: size,
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    background: 'white',
                  }}
                />
              );
            })}
          </div>

          {/* Specular highlights */}
          <div className="absolute inset-0 pointer-events-none">
            {blobs.map((blob) => {
              const { x, y, size } = getOrbitalPosition(blob, currentTime);
              return (
                <div
                  key={`blob-highlight-${blob.id}`}
                  className="absolute rounded-full will-change-transform"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: size * 0.6,
                    height: size * 0.4,
                    transform: `translate(calc(-50% + ${x - size * 0.12}px), calc(-50% + ${y - size * 0.22}px))`,
                    background: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.35) 0%, transparent 70%)`,
                  }}
                />
              );
            })}
          </div>

        </>
      ) : (
        // Static gradient when disabled
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center top, ${tintColor} 0%, transparent 70%)`,
            opacity: 0.3,
          }}
        />
      )}
    </div>
  );
}
