/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { AppState } from './types';
import AudioPlayer from './components/AudioPlayer';
import GiftBox from './components/GiftBox';
import LetterCard from './components/LetterCard';
import GiftSection from './components/GiftSection';

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.LOCKED);
  const [isGardenRevealed, setIsGardenRevealed] = useState(false);
  const [isBlooming, setIsBlooming] = useState(false);

  const handleOpenComplete = () => {
    setAppState(AppState.REVEALED);
  };

  const handleForYouTrigger = () => {
    // Initiate blooming transition overlay
    setIsBlooming(true);
    setIsGardenRevealed(true);

    // After 2.3s, fade out blooming overlay and smooth-scroll to garden
    setTimeout(() => {
      setIsBlooming(false);
      const target = document.getElementById('gift-garden-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 2400);
  };

  return (
    <div id="to-kai-root-viewport" className="min-h-screen relative overflow-x-hidden flex flex-col justify-between font-sans">
      
      {/* Decorative continuous top/bottom soft framing lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-200 z-40 select-none"></div>

      {/* Floating global Audio Player / Music box widget */}
      <AudioPlayer />

      {/* Primary Layout Switcher based on AppState */}
      <main id="main-content-layout" className="flex-grow pt-8 pb-16 relative">
        <AnimatePresence mode="wait">
          {appState === AppState.LOCKED ? (
            <motion.div
              key="locked-gift"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <GiftBox onOpenComplete={handleOpenComplete} />
            </motion.div>
          ) : (
            /* Revealed Digital Scrapbook Letter & Garden elements */
            <motion.div
              key="revealed-scrapbook"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* Envelope Letter Container */}
              <LetterCard 
                onNextTrigger={handleForYouTrigger} 
                isGardenRevealed={isGardenRevealed} 
              />

              {/* Dynamic Interactive Flower garden & translated quotes section below letter */}
              {isGardenRevealed && (
                <div id="revealed-flower-garden">
                  <GiftSection />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Spectacular blooming fullscreen overlay layer when "For you" clicked */}
      <AnimatePresence>
        {isBlooming && (
          <motion.div
            id="blooming-screen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-blue-50/80 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden pointer-events-none"
          >
            {/* Generate multiple gorgeous blooming SVG blue flowers, hearts, and floating petals on screen */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Central big heart flare */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: [0, 1.4, 1.2], rotate: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-sky-400 opacity-60"
              >
                <Heart size={140} fill="#cbdcf7" stroke="#4a73bd" strokeWidth={1} />
              </motion.div>

              {/* Floating petals scatter across screens */}
              {Array.from({ length: 24 }).map((_, idx) => {
                const angle = (idx * 15) * (Math.PI / 180); // Circular distribution
                const endDistance = 120 + Math.random() * 220;
                const endX = Math.cos(angle) * endDistance;
                const endY = Math.sin(angle) * endDistance;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
                    animate={{
                      x: endX,
                      y: endY,
                      scale: [0, 1.2, 0.8, 0],
                      rotate: 360,
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2.0,
                      ease: 'easeOut',
                      delay: idx * 0.04
                    }}
                    className="absolute"
                  >
                    {isEven ? (
                      /* Blue Flower blossom graphic */
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="#a4c4fc" className="stroke-sky-400" strokeWidth="1">
                        <circle cx="12" cy="12" r="3" fill="#fce085" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.3" />
                        <path d="M12 5 Q12 11 9 11 Q12 11 12 17" />
                        <path d="M5 12 Q11 12 11 9 Q11 12 17 12" />
                      </svg>
                    ) : (
                      /* Little cute heart shape leaf */
                      <Heart size={18} fill="#f1c0e8" stroke="#7da1cf" strokeWidth={1} />
                    )}
                  </motion.div>
                );
              })}
              
              {/* Core Text Label of Blooming Event */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute text-center select-none"
              >
                <span className="font-display text-[11px] text-sky-400 font-bold uppercase tracking-widest block mb-1">
                  Sweet Surprise
                </span>
                <h3 className="font-handwritten text-4xl text-sky-800">
                  Blooming for Kai...
                </h3>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Cute footer with copyright and loving credit */}
      <footer id="global-page-footer" className="w-full text-center py-6 select-none opacity-60 relative z-10">
        <p className="text-[10px] font-mono tracking-widest uppercase text-sky-400/90">
          Handcrafted Daily With Utmost Devotion © 2026
        </p>
        <p className="text-[9px] text-sky-500 font-sans mt-0.5 font-medium">
          Made by J with love
        </p>
      </footer>

    </div>
  );
}
