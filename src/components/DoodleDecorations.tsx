/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, Sparkles, Coffee, Smile, Clover } from 'lucide-react';

// Reusable warm hand-drawn looking SVG divider
export function SketchDivider() {
  return (
    <div className="flex items-center justify-center py-6 select-none opacity-80">
      <svg width="240" height="24" viewBox="0 0 240 24" fill="none" className="stroke-sky-300 stroke-[1.5]">
        {/* Hand-drawn look squiggle line */}
        <path d="M 10,12 C 40,8 70,16 110,12 C 120,11 125,7 130,12 C 135,17 140,12 150,11 C 180,8 210,16 230,12" strokeLinecap="round" />
        {/* Centered heart sketch */}
        <path d="M 120,4 C 117,1 113,1 111,4 C 109,7 113,12 120,16 C 127,12 131,7 129,4 C 127,1 123,1 120,4 Z" fill="#b0cbf7" />
        {/* Helper dots */}
        <circle cx="65" cy="12" r="2.5" fill="#a0c0f5" />
        <circle cx="175" cy="12" r="2.5" fill="#a0c0f5" />
      </svg>
    </div>
  );
}

// Hand-drawn cloud
export function CuteCloud({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute select-none pointer-events-none drop-shadow-sm ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, -6], rotate: [-0.5, 0.5, -0.5] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      <svg width="78" height="48" viewBox="0 0 78 48" fill="#e8f3ff" className="stroke-sky-200 stroke-2">
        <path d="M 18,36 C 8,36 4,28 8,20 C 4,12 14,4 24,10 C 30,2 44,0 48,10 C 58,2 72,10 70,22 C 76,28 72,36 64,36 C 64,36 18,36 18,36 Z" strokeLinejoin="round" />
        {/* Cute blush cheeks */}
        <ellipse cx="22" cy="24" rx="4" ry="2.5" fill="#c3dbff" opacity="0.8" />
        <ellipse cx="50" cy="24" rx="4" ry="2.5" fill="#c3dbff" opacity="0.8" />
        {/* Cute closed eyes */}
        <path d="M 28,21 Q 30,23 32,21" stroke="#5d7ba6" strokeLinecap="round" fill="none" />
        <path d="M 40,21 Q 42,23 44,21" stroke="#5d7ba6" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  );
}

// Sparkly hand-drawn star
export function CuteStar({ className = '', delay = 0, size = 28 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none text-sky-300 ${className}`}
      initial={{ scale: 0.8, rotate: 0 }}
      animate={{ 
        scale: [0.8, 1.1, 0.8], 
        rotate: [0, 15, -15, 0],
        y: [-2, 2, -2]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#fcfcf0" className="stroke-sky-300 stroke-[1.5]">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

// Hand-drawn heart doodle
export function CuteHeart({ className = '', delay = 0, size = 24 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none text-sky-400 ${className}`}
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.15, 1],
        y: [0, -3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffe3eb" className="stroke-sky-300 stroke-[1.5]">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

// Hand-drawn ribbon bow
export function CuteRibbon({ className = '' }: { className?: string }) {
  return (
    <div className={`select-none pointer-events-none ${className}`}>
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="stroke-sky-400 stroke-2">
        {/* Left loop */}
        <path d="M 24,16 C 14,6 8,16 24,16 Z" fill="#d2e4ff" />
        {/* Right loop */}
        <path d="M 24,16 C 34,6 40,16 24,16 Z" fill="#d2e4ff" />
        {/* Left tie */}
        <path d="M 22,17 C 15,22 10,28 12,30" strokeLinecap="round" />
        {/* Right tie */}
        <path d="M 26,17 C 33,22 38,28 36,30" strokeLinecap="round" />
        {/* Center knot */}
        <circle cx="24" cy="16" r="3.5" fill="#9ec5ff" className="stroke-sky-500" />
      </svg>
    </div>
  );
}

// Polaroid memory card
export interface PolaroidProps {
  key?: string;
  title: string;
  caption: string;
  date: string;
  angle: number;
  iconName: string;
}

export function Polaroid({ title, caption, date, angle, iconName }: PolaroidProps) {
  // Map friendly strings to specific icons
  const getIcon = () => {
    switch (iconName) {
      case 'heart': return <Heart className="text-rose-400 fill-rose-100" size={32} />;
      case 'sparkles': return <Sparkles className="text-amber-400 fill-amber-500/10" size={32} />;
      case 'coffee': return <Coffee className="text-amber-700" size={32} />;
      case 'smile': return <Smile className="text-amber-500" size={32} />;
      case 'clover': return <Clover className="text-emerald-500" size={32} />;
      default: return <Sparkles className="text-sky-400" size={32} />;
    }
  };

  return (
    <motion.div
      style={{ rotate: `${angle}deg` }}
      whileHover={{ y: -8, scale: 1.03, rotate: '0deg', zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="inline-block bg-white p-3 pb-5 shadow-md border border-slate-100 rounded-md max-w-[220px] select-none text-center"
    >
      {/* Tape on top */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-sky-200/40 border border-sky-300/10 border-dashed transform rotate-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"></div>

      {/* Visual content box */}
      <div className="w-[196px] h-[196px] bg-gradient-to-tr from-sky-50 to-blue-100/50 rounded-sm flex flex-col items-center justify-center p-4 border border-sky-100/50 relative overflow-hidden">
        {/* Tiny cloud floating inside polaroid */}
        <div className="absolute top-4 left-4 opacity-30 scale-70">
          <svg width="40" height="24" viewBox="0 0 78 48" fill="#99c3fc">
            <path d="M 18,36 C 8,36 4,28 8,20 C 4,12 14,4 24,10 C 30,2 44,0 48,10 C 58,2 72,10 70,22 C 76,28 72,36 64,36 Z" />
          </svg>
        </div>
        
        {getIcon()}
        
        <span className="text-sky-300 font-display text-[10px] mt-2 block tracking-widest font-bold uppercase">To Kai</span>
      </div>

      {/* Writing section */}
      <div className="mt-4 px-1 pb-1">
        <h4 className="font-handwritten text-xl text-sky-800 leading-tight">{title}</h4>
        <p className="text-[11px] text-sky-500/90 font-medium mt-1 font-sans">{caption}</p>
        <span className="text-[9px] text-sky-300 font-mono block mt-2">{date}</span>
      </div>
    </motion.div>
  );
}

// Hand-drawn floral sketches - Blue flowers
export function BlueHydrangeaSketch({ size = 120, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`select-none pointer-events-none ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Soft blue backing glow */}
        <circle cx="50" cy="50" r="30" fill="#cbdcf7" opacity="0.3" filter="blur(6px)" />
        
        {/* Hydrangea dome shape */}
        <path d="M 50,25 C 35,25 25,35 25,50 C 25,65 35,75 50,75 C 65,75 75,65 75,50 C 75,35 65,25 50,25 Z" fill="#e3ecfc" opacity="0.4" />
        
        {/* Leaves */}
        <path d="M 28,68 C 15,75 14,60 22,55 C 28,52 32,58 28,68 Z" fill="#9dbdf2" opacity="0.25" stroke="#7196d2" strokeWidth="1" />
        <path d="M 72,65 C 85,72 86,57 78,52 C 72,49 68,55 72,65 Z" fill="#9dbdf2" opacity="0.25" stroke="#7196d2" strokeWidth="1" />
        <path d="M 45,74 L 50,92 M 55,74 L 50,92" stroke="#7196d2" strokeWidth="1.5" strokeLinecap="round" />

        {/* Small four-petal blossom details sketch */}
        {/* Central bunch */}
        <circle cx="50" cy="50" r="1.5" fill="#4d7bbd" />
        <path d="M 46,50 C 44,46 56,46 54,50 C 56,54 44,54 46,50 Z" stroke="#5d8acc" strokeWidth="1" fill="#c3daf9" />
        <path d="M 50,46 C 54,44 54,56 50,54 C 46,56 46,44 50,46 Z" stroke="#5d8acc" strokeWidth="1" fill="#c3daf9" />

        {/* Blossom upper-left */}
        <circle cx="40" cy="42" r="1.5" fill="#4d7bbd" />
        <path d="M 37,42 C 35,39 45,39 43,42 C 45,45 35,45 37,42 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />
        <path d="M 40,39 C 43,37 43,47 40,45 C 37,47 37,39 40,39 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />

        {/* Blossom upper-right */}
        <circle cx="60" cy="43" r="1.5" fill="#4d7bbd" />
        <path d="M 57,43 C 55,40 65,40 63,43 C 65,46 55,46 57,43 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />
        <path d="M 60,40 C 63,38 63,48 60,46 C 57,48 57,40 60,40 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />

        {/* Blossom bottom-left */}
        <circle cx="42" cy="58" r="1.5" fill="#4d7bbd" />
        <path d="M 39,58 C 37,55 47,55 45,58 C 47,61 37,61 39,58 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />
        <path d="M 42,55 C 45,53 45,63 42,61 C 39,63 39,55 42,55 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />

        {/* Blossom bottom-right */}
        <circle cx="58" cy="58" r="1.5" fill="#4d7bbd" />
        <path d="M 55,58 C 53,55 63,55 61,58 C 63,61 53,61 55,58 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />
        <path d="M 58,55 C 61,53 61,63 58,61 C 55,63 55,55 58,55 Z" stroke="#5d8acc" strokeWidth="0.8" fill="#b9d3f7" />

        {/* Stem connection dots */}
        <path d="M 50,57 C 50,65 52,70 52,74" stroke="#7196d2" strokeWidth="1" strokeDasharray="2,2" />
        <path d="M 42,58 C 44,64 47,67 50,71" stroke="#7196d2" strokeWidth="1" strokeDasharray="2,2" />
        <path d="M 58,58 C 56,64 53,67 50,71" stroke="#7196d2" strokeWidth="1" strokeDasharray="2,2" />
      </svg>
    </div>
  );
}

export function ForgetMeNotSketch({ size = 100, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`select-none pointer-events-none ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Soft blue glow backing */}
        <circle cx="50" cy="50" r="22" fill="#abc3f4" opacity="0.3" filter="blur(5px)" />
        
        {/* Leaf */}
        <path d="M 32,58 C 20,58 24,42 34,48 Z" fill="#9dbdf2" opacity="0.2" stroke="#7196d2" strokeWidth="0.8" />
        <path d="M 68,58 C 80,58 76,42 66,48 Z" fill="#9dbdf2" opacity="0.2" stroke="#7196d2" strokeWidth="0.8" />
        
        {/* Stem */}
        <path d="M 50,55 Q 52,75 48,90" stroke="#7196d2" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Flower Center Yellow ring */}
        <circle cx="50" cy="50" r="5" fill="#fce484" stroke="#dfb62c" strokeWidth="1" />
        <circle cx="50" cy="50" r="1.5" fill="#3a5175" />

        {/* 5 Petals */}
        {/* Top petal */}
        <path d="M 50,45 C 44,45 42,32 50,32 C 58,32 56,45 50,45 Z" fill="#9dc0f6" stroke="#5d89ce" strokeWidth="1.2" />
        {/* Left top petal */}
        <path d="M 45,48 C 39,44 29,50 35,56 C 41,62 48,53 45,48 Z" fill="#9dc0f6" stroke="#5d89ce" strokeWidth="1.2" />
        {/* Right top petal */}
        <path d="M 55,48 C 61,44 71,50 65,56 C 59,62 52,53 55,48 Z" fill="#9dc0f6" stroke="#5d89ce" strokeWidth="1.2" />
        {/* Bottom left petal */}
        <path d="M 47,54 C 42,59 31,69 40,73 C 49,77 49,60 47,54 Z" fill="#9dc0f6" stroke="#5d89ce" strokeWidth="1.2" />
        {/* Bottom right petal */}
        <path d="M 53,54 C 58,59 69,69 60,73 C 51,77 51,60 53,54 Z" fill="#9dc0f6" stroke="#5d89ce" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
