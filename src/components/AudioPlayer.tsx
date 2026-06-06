/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PianoSynth } from '../utils/audioSynth';

// Shared singleton instance to avoid multiple AudioContext activations
const synthInstance = new PianoSynth();

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Synchronize initial state
    setIsPlaying(synthInstance.getIsPlaying());
    setIsMuted(synthInstance.getMuteState());

    // Clean up when tab is closed
    return () => {
      // We don't forcefully stop unless unmounted completely, 
      // but keeping it running is fine for tab lifespans
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      synthInstance.stop();
      setIsPlaying(false);
    } else {
      synthInstance.start();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering play toggles
    const muted = synthInstance.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div id="audio-player-container" className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="hidden sm:block bg-white/90 backdrop-blur-sm text-sky-800 text-xs py-1.5 px-3 rounded-full shadow-sm border border-sky-100 font-medium"
          >
            🎵 Press for soft background piano melody...
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        id="audio-music-box"
        className="flex items-center gap-2.5 px-3 py-2 rounded-full glass-panel-heavy shadow-md border border-white/60 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={handleTogglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated spinning record or musical note */}
        <div className="relative w-7 h-7 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
          {isPlaying && !isMuted ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="flex items-center justify-center text-sky-600"
            >
              <Disc size={16} className="text-sky-600" />
            </motion.div>
          ) : (
            <Music size={14} className="text-sky-400" />
          )}

          {/* Sparkles on music play */}
          {isPlaying && !isMuted && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          )}
        </div>

        {/* Play/Pause Label */}
        <div className="flex flex-col items-start pr-1 select-none">
          <span className="text-[10px] uppercase tracking-wider text-sky-400/80 font-bold font-display">
            Music Box
          </span>
          <span className="text-xs font-semibold text-sky-700 font-sans">
            {isPlaying ? 'Playing Melody' : 'Tap to Play Piano'}
          </span>
        </div>

        {/* Pause/Play Icon controls */}
        <button
          id="btn-play-pause"
          className="p-1 rounded-full text-sky-600 hover:bg-sky-200/50 transition-colors"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-sky-600" />}
        </button>

        {isPlaying && (
          <button
            id="btn-music-mute"
            onClick={handleToggleMute}
            className="p-1 rounded-full text-sky-500 hover:text-sky-700 hover:bg-sky-200/50 transition-colors"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </motion.div>
    </div>
  );
}
