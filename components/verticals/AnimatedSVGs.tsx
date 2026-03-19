
import React from 'react';
import { motion } from 'framer-motion';

export const FabricKnitSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <motion.path
      d="M 50 100 Q 100 50 150 100 T 250 100 T 350 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: 1,
        y: [0, 10, 0]
      }}
      transition={{ 
        pathLength: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    <motion.path
      d="M 50 150 Q 100 100 150 150 T 250 150 T 350 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        pathLength: { duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    <motion.path
      d="M 50 200 Q 100 150 150 200 T 250 200 T 350 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: 1,
        y: [0, 10, 0]
      }}
      transition={{ 
        pathLength: { duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  </svg>
);

export const PrintingInkSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {[...Array(5)].map((_, i) => (
      <motion.rect
        key={i}
        x={50 + i * 60}
        y="100"
        width="40"
        height="200"
        fill="currentColor"
        fillOpacity="0.1"
        initial={{ height: 0 }}
        animate={{ height: [0, 200, 0] }}
        transition={{ 
          duration: 4, 
          delay: i * 0.4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    ))}
    <motion.path
      d="M 50 200 C 100 150 150 250 200 200 S 300 150 350 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      animate={{ 
        d: [
          "M 50 200 C 100 150 150 250 200 200 S 300 150 350 200",
          "M 50 200 C 100 250 150 150 200 200 S 300 250 350 200",
          "M 50 200 C 100 150 150 250 200 200 S 300 150 350 200"
        ]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const GarmentStitchSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <motion.path
      d="M 100 100 L 300 100 L 320 250 L 250 350 L 150 350 L 80 250 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="5 5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      r="4"
      fill="currentColor"
      animate={{
        offsetDistance: ["0%", "100%"]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{ offsetPath: "path('M 100 100 L 300 100 L 320 250 L 250 350 L 150 350 L 80 250 Z')" }}
    />
  </svg>
);

export const EmbroideryNeedleSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {[...Array(12)].map((_, i) => (
      <motion.path
        key={i}
        d={`M ${200 + Math.cos(i * 30 * Math.PI / 180) * 50} ${200 + Math.sin(i * 30 * Math.PI / 180) * 50} L ${200 + Math.cos(i * 30 * Math.PI / 180) * 100} ${200 + Math.sin(i * 30 * Math.PI / 180) * 100}`}
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
      />
    ))}
    <motion.circle
      cx="200"
      cy="200"
      r="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

export const ProtectiveShieldSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <motion.path
      d="M 200 50 L 320 100 V 200 C 320 280 260 340 200 360 C 140 340 80 280 80 200 V 100 L 200 50 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M 120 150 H 280 M 120 200 H 280 M 120 250 H 280"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.3"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

export const InfrastructureMotionSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <motion.circle
      cx="200"
      cy="200"
      r="80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="20 10"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="200"
      cy="200"
      r="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="10 5"
      animate={{ rotate: -360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    {[0, 90, 180, 270].map((angle) => (
      <motion.line
        key={angle}
        x1="200"
        y1="200"
        x2={200 + Math.cos(angle * Math.PI / 180) * 120}
        y2={200 + Math.sin(angle * Math.PI / 180) * 120}
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.2"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    ))}
  </svg>
);
