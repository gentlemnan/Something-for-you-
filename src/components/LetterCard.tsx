/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { SketchDivider } from './DoodleDecorations';

interface LetterCardProps {
  onNextTrigger: () => void;
  isGardenRevealed: boolean;
}

export default function LetterCard({ onNextTrigger, isGardenRevealed }: LetterCardProps) {
  return (
    <div id="letter-section" className="w-full max-w-2xl mx-auto px-4 py-8">
      
      {/* Interactive floating digital letter envelope representation */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="relative bg-[#fafbfe] shadow-xl rounded-3xl p-6 sm:p-10 border border-sky-100/70 overflow-hidden animate-soft-float"
      >
        {/* Lined paper visual texture backing */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none" style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 0), linear-gradient(#e0ecff 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px, 100% 28px',
          backgroundPosition: '0 0, 0 10px'
        }}></div>

        {/* Vintage envelope wax seal decoration topright */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-sky-200/50 rounded-full flex items-center justify-center opacity-65 transform rotate-12 select-none border border-sky-300 border-dashed">
          <Heart size={20} className="text-sky-500 fill-sky-200" />
        </div>

        {/* Header Ribbon tape effects on left and right */}
        <div className="absolute -top-1.5 left-10 w-16 h-5 bg-sky-300/25 border-b border-sky-400/20 transform -rotate-2"></div>
        <div className="absolute -top-1.5 right-12 w-14 h-5 bg-sky-300/25 border-b border-sky-400/20 transform rotate-1"></div>

        {/* Letter Metadata Info (like a real typewriter/letter header) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-sky-400 font-medium tracking-wide border-b border-sky-100 pb-4 mb-6 relative z-10 font-sans">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Mail size={13} className="text-sky-400" />
            <span className="font-semibold uppercase tracking-wider text-sky-500">Subject: Just for you</span>
          </div>
          <div className="flex items-center gap-4 text-sky-400/80">
            <span className="flex items-center gap-1">
              <Clock size={12} /> Today
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} /> From My Heart
            </span>
          </div>
        </div>

        {/* Letter Body - Displays exact requested text */}
        <div className="relative z-10 text-slate-800 font-sans leading-relaxed text-[15px] space-y-6 px-1 font-light tracking-wide">
          
          {/* Handwritten/Serif Pair Heading */}
          <h2 className="font-serif italic text-4xl text-sky-600 mb-8 border-b border-sky-100/70 pb-4">
            Hi Kai,
          </h2>

          <p>
            i've been thinking about a lot of things recently. Not just about the good memories 
            we shared, but also everything we learned along the way. And the more i think about 
            it, the more i realize that what i miss the most isn't the past, it's you.
          </p>

          <p>
            I know we both had moments that were difficult, <span className="text-sky-500 font-semibold italic">kita masih banyak salah nya dan kurang dewasa.</span> Dan apapun yang udah terjadi, i still love you like the first time we fell in love. 
            Kalau suatu hari kita mutusin buat memulai lagi, aku harap kita udah sama-sama jadi 
            versi terbaik, dan introspeksi diri. Dan kalaupun suatu hari itu, hari ini, i don't 
            want you to answer just because you feel like you should. Apapun jawaban kamu, aku mau 
            itu hasil dari kamu berpikir.
          </p>

          <p>
            I can't promise a perfect relationship, no one can. There will still be bad days, 
            busy days, and days when things feel complicated. But, i can promise that i'll put 
            in the effort, i'll listen more, i'll try to understand before i react, and i'll keep 
            choosing us, even on the ordinary days.
          </p>

          <p className="font-semibold text-sky-800 font-sans">
            And if you're willing to take that step with me, i'd like to start a new chap together.
          </p>
          
          {/* Signoff */}
          <div className="mt-8 flex justify-between items-end border-t border-sky-100/50 pt-6">
            <div className="space-y-1 text-left">
              <p className="text-[10px] text-sky-300 uppercase tracking-widest font-bold">Always yours,</p>
              <p className="text-3xl font-serif italic text-sky-500">J.</p>
            </div>
            
            <div className="flex gap-1.5 pb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sky-100"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sky-50"></div>
            </div>
          </div>
        </div>

        {/* Underlay cute sketches for visual effort */}
        <div className="absolute bottom-4 left-6 opacity-35 scale-90">
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="stroke-sky-300 stroke-2">
            <path d="M 50,15 C 30,15 15,30 15,50 C 15,70 30,85 50,85 C 70,85 85,70 85,50" strokeLinecap="round" />
            <path d="M 50,15 C 60,35 60,65 50,85" strokeDasharray="3,3" />
            <path d="M 15,50 C 35,60 65,60 85,50" strokeDasharray="3,3" />
          </svg>
        </div>
      </motion.div>

      {/* Heartfelt Call to Action Button: "For you" */}
      <div className="flex flex-col items-center justify-center pt-8 pb-12">
        {!isGardenRevealed ? (
          <motion.button
            id="btn-reveal-gift-section"
            onClick={onNextTrigger}
            className="group px-8 py-4 rounded-full bg-white text-sky-600 font-display font-semibold text-sm tracking-widest uppercase shadow-md border border-sky-100 hover:bg-sky-50 hover:text-sky-700 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>For you</span>
            <Sparkles size={16} className="text-sky-400 group-hover:animate-pulse" />
          </motion.button>
        ) : (
          <p className="text-xs font-mono text-sky-300 text-center tracking-widest uppercase">
            scroll down to explore your garden below 💙
          </p>
        )}
      </div>

    </div>
  );
}
