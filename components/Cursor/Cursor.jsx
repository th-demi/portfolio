'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../ThemeContext';
import styles from './Cursor.module.css';

const springStep = (current, target, velocity, config, dt) => {
  const displacement = current - target;
  const springForce = -config.stiffness * displacement;
  const dampingForce = -config.damping * velocity;
  const acceleration = (springForce + dampingForce) / config.mass;
  const newVelocity = velocity + acceleration * dt;
  const newPosition = current + newVelocity * dt;
  return { position: newPosition, velocity: newVelocity };
};

const SmoothCursor = ({
  size = 32,
  color,
  stiffness = 500,
  damping = 40,
  mass = 1,
  restDelta = 0.001,
}) => {
  const { theme } = useTheme();
  const [isTouch, setIsTouch] = useState(false);
  const [angle, setAngle] = useState(0);

  const cursorColor = theme === 'dark' ? '#FFFFFF' : (color || '#000000');

  const cursorXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const cursorYRef = useRef(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const cursorXVelocityRef = useRef(0);
  const cursorYVelocityRef = useRef(0);
  const prevRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const cursorRef = useRef(null);

  const mousePosRef = useRef({ x: 0, y: 0 });
  const lastUpdateTimeRef = useRef(Date.now());

  const springConfig = useMemo(
    () => ({ damping, stiffness, mass, restDelta }),
    [damping, stiffness, mass, restDelta]
  );

  useEffect(() => {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - prevRef.current.x;
      const dy = e.clientY - prevRef.current.y;
      if (dx !== 0 || dy !== 0) {
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI) + 120);
      }
      prevRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const animate = () => {
      const now = Date.now();
      const rawDt = (now - lastUpdateTimeRef.current) / 1000;
      const dt = Math.min(rawDt > 0 ? rawDt : 0.016, 0.064);
      lastUpdateTimeRef.current = now;

      const xResult = springStep(
        cursorXRef.current,
        mousePosRef.current.x - size / 2,
        cursorXVelocityRef.current,
        springConfig,
        dt
      );
      const yResult = springStep(
        cursorYRef.current,
        mousePosRef.current.y - size / 2,
        cursorYVelocityRef.current,
        springConfig,
        dt
      );

      cursorXRef.current = xResult.position;
      cursorYRef.current = yResult.position;
      cursorXVelocityRef.current = xResult.velocity;
      cursorYVelocityRef.current = yResult.velocity;

      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate3d(${cursorXRef.current}px, ${cursorYRef.current}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, springConfig, size]);

  if (isTouch) {
    if (typeof document === 'undefined') return null;
    return createPortal(
      <div style={{ display: 'none' }} />,
      document.body
    );
  }

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={cursorRef}
      className={styles.cursor}
      style={{
        width: size,
        height: size,
        willChange: 'transform',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformOrigin: 'center center',
          transform: `rotate(${angle}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={cursorColor}
          viewBox="0 0 256 256"
          style={{ display: 'block' }}
        >
          <path d="M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z" />
        </svg>
      </div>
    </div>,
    document.body
  );
}

export default SmoothCursor;
