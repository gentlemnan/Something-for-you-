/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CuteStar, CuteHeart, CuteCloud, CuteRibbon } from './DoodleDecorations';

interface GiftBoxProps {
  onOpenComplete: () => void;
}

interface Particle {
  id: number;
  x: number;   // Target end coordinates X
  y: number;   // Target end coordinates Y
  rotation: number;
  scale: number;
  type: 'petal' | 'heart' | 'sparkle';
  color: string;
}

export default function GiftBox({ onOpenComplete }: GiftBoxProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Create 35 cute popping floating elements
    const newParticles: Particle[] = Array.from({ length: 35 }).map((_, idx) => {
      const typeRand = Math.random();
      const type = typeRand < 0.4 ? 'petal' : typeRand < 0.75 ? 'heart' : 'sparkle';
      
      // Target random endpoints (x range: -180 to 180, y range: -240 to -80)
      const angle = (Math.random() * 180 + 180) * (Math.PI / 180); // upper semi circle 180-360 deg
      const distance = 80 + Math.random() * 150;
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - 40; // upward bias

      // Color palette (dreamy pastel blues, pinks, soft creams)
      let color = '#a3c4f3'; // pastel blue
      if (type === 'heart') {
        color = Math.random() > 0.5 ? '#f8ad9d' : '#f1c0e8'; // sweet peach/rose
      } else if (type === 'sparkle') {
        color = '#fdf0d5'; // golden sparkle
      } else {
        color = Math.random() > 0.5 ? '#b9fbc0' : '#cfdbf1'; // mint or light blue petal
      }

      return {
        id: idx,
        x,
        y,
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
        type,
        color
      };
    });

    setParticles(newParticles);

    // Transition complete after letting the animation finish
    setTimeout(() => {
      onOpenComplete();
    }, 2800);
  };

  return (
    <div id="gift-box-landing" className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 overflow-hidden select-none">
      
      {/* Background doodles only on landing */}
      <CuteCloud className="top-12 left-6 opacity-60" delay={0} />
      <CuteCloud className="top-24 right-10 opacity-50 scale-75" delay={2} />
      <CuteStar className="top-40 left-1/4 opacity-45" size={24} delay={1} />
      <CuteHeart className="bottom-24 left-10 opacity-40" size={20} delay={1.5} />
      <CuteStar className="bottom-36 right-16 opacity-50" size={30} delay={3} />

      <motion.div
        className="flex flex-col items-center text-center max-w-sm z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Cute subtle floating ribbon tag above Title */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="mb-1"
        >
          <CuteRibbon />
        </motion.div>

        {/* Title */}
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-sky-800 tracking-tight flex items-center gap-1">
          To Kai <span className="text-sky-500 animate-pulse">💙</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-sans text-sky-500 font-medium text-sm sm:text-base mt-2 tracking-wide">
          Something for you.
        </p>
        
        {/* Interactive Box Illustration and Animation Container */}
        <div className="relative w-64 h-64 my-6 flex items-center justify-center">
          
          {/* Particles burst when opening */}
          <AnimatePresence>
            {isOpening && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      scale: p.scale,
                      opacity: [1, 1, 0],
                      rotate: p.rotation + 360
                    }}
                    transition={{
                      duration: 2.2,
                      ease: 'easeOut',
                      delay: Math.random() * 0.15
                    }}
                    className="absolute z-20"
                  >
                    {/* Render customized particles */}
                    {p.type === 'heart' ? (
                      <Heart size={18} fill={p.color} stroke="#7da1cf" strokeWidth={1} />
                    ) : p.type === 'sparkle' ? (
                      <Sparkles size={16} className="text-amber-300 fill-amber-100" />
                    ) : (
                      // A sweet little leaf/petal shape
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={p.color} className="stroke-sky-300/60" strokeWidth="1">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        <path d="M12 6a6 6 0 00-6 6c0 1.5.54 2.87 1.44 3.93C8.42 15 10.1 13.5 12 13.5s3.58 1.5 4.56 2.43c.9-1.06 1.44-2.43 1.44-3.93a6 6 0 00-6-6z" />
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Core Gift Box Visuals */}
          <div className="relative w-48 h-48 flex flex-col items-center justify-end">
            
            {/* Box Lid - Slides Up and Out cleanly */}
            <motion.div
              id="gift-box-lid"
              className="absolute z-10 w-44"
              initial={{ y: -38, x: 0, rotate: 0 }}
              animate={isOpening ? {
                y: -120,
                x: -30,
                rotate: -25,
                opacity: [1, 1, 0],
                scale: 0.9
              } : {
                y: -36,
                x: 0,
                rotate: [0, -1.5, 1.5, 0]
              }}
              transition={isOpening ? {
                duration: 1.2,
                ease: 'easeOut'
              } : {
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut'
              }}
            >
              {/* Box Lid Visual (SVG for hand-made feeling) */}
              <svg viewBox="0 0 160 38" fill="none" className="w-full h-auto filter drop-shadow-sm">
                {/* Lid Base */}
                <rect x="2" y="16" width="156" height="18" rx="5" fill="#a4c6fc" stroke="#6893dd" strokeWidth="2.5" />
                {/* Lid Accent Band */}
                <rect x="70" y="16" width="20" height="18" fill="#ffffff" stroke="#6893dd" strokeWidth="2.5" />
                {/* Ribbon Bow */}
                {/* Left Bow Loop */}
                <path d="M 70,16 C 50,-8 50,20 70,16 Z" fill="#ffffff" stroke="#6893dd" strokeWidth="2" strokeLinejoin="round" />
                {/* Right Bow Loop */}
                <path d="M 90,16 C 110,-8 110,20 90,16 Z" fill="#ffffff" stroke="#6893dd" strokeWidth="2" strokeLinejoin="round" />
                {/* Knot */}
                <rect x="68" y="10" width="24" height="10" rx="3" fill="#e1ecfe" stroke="#6893dd" strokeWidth="2" />
              </svg>
            </motion.div>

            {/* Box Body - Smashes slightly then expands */}
            <motion.div
              id="gift-box-body"
              className="w-40 h-36"
              initial={{ scale: 1 }}
              animate={isOpening ? {
                scale: [1, 1.08, 0],
                y: [0, 8, 20],
                opacity: [1, 1, 0]
              } : {
                y: [0, -3, 0],
                scaleX: [1, 1.02, 1]
              }}
              transition={isOpening ? {
                duration: 1.0,
                ease: 'backIn'
              } : {
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut'
              }}
            >
              <svg viewBox="0 0 140 120" fill="none" className="w-full h-full filter drop-shadow-md">
                {/* Container box */}
                <path d="M 6,2 L 134,2 L 126,114 C 126,117 122,120 118,120 L 22,120 C 18,120 14,117 14,114 Z" fill="#baccfd" stroke="#6893dd" strokeWidth="2.5" />
                {/* Center Ribbon tape */}
                <path d="M 62,2 L 78,2 L 78,120 L 62,120 Z" fill="#ffffff" stroke="#6893dd" strokeWidth="2.5" />
                {/* Cute star doodles painted on box */}
                <path d="M 30,30 L 33,36 L 40,37 L 35,42 L 36,49 L 30,45 L 24,49 L 25,42 L 20,37 L 27,36 Z" fill="#ffffff" opacity="0.7" />
                <path d="M 110,70 L 112,74 L 117,75 L 113.5,79 L 114,84 L 110,81 L 106,84 L 106.5,79 L 103,75 L 108,74 Z" fill="#ffffff" opacity="0.7" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Buttons and actions */}
        <div className="z-10 mt-2 px-10 w-full">
          <motion.button
            id="btn-open-gift"
            onClick={handleOpen}
            disabled={isOpening}
            className={`w-full py-3.5 px-6 rounded-full font-display font-semibold shadow-md tracking-wider transition-all duration-300 transform 
              ${isOpening 
                ? 'bg-sky-100 text-sky-400 cursor-not-allowed border border-sky-200' 
                : 'bg-gradient-to-r from-sky-400 to-blue-400 text-white cursor-pointer active:scale-95 hover:from-sky-500 hover:to-blue-500 hover:shadow-lg hover:shadow-sky-200'
              }`}
            whileHover={!isOpening ? { scale: 1.03 } : {}}
            whileTap={!isOpening ? { scale: 0.97 } : {}}
          >
            {isOpening ? 'Opening box...' : 'Open'}
          </motion.button>
        </div>

        <p className="text-[10px] text-sky-400 font-mono tracking-widest uppercase mt-6 select-none">
          Made for Kai with Love
        </p>
      </motion.div>
    </div>
  );
}
