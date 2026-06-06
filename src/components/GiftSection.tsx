/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower, Sparkles, Heart, Info, Check, RotateCcw } from 'lucide-react';
import { FLOWERS_INFO, GIFT_QUOTES, FlowerData } from '../types';
import { CuteCloud, CuteStar, CuteHeart } from './DoodleDecorations';

// Beautiful custom SVGs for the detailed flowers in full colored glory
function BlueHydrangeaSVG({ className = '', animateSway = true }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-36 h-36 ${animateSway ? 'animate-sway' : ''} ${className}`}>
      {/* Leaves background */}
      <path d="M 40,110 C 15,115 15,85 35,90 C 45,92 50,110 40,110 Z" fill="#90b3e4" opacity="0.6" stroke="#4a6ca0" strokeWidth="1.5" />
      <path d="M 120,105 C 145,110 145,80 125,85 C 115,87 110,105 120,105 Z" fill="#90b3e4" opacity="0.6" stroke="#4a6ca0" strokeWidth="1.5" />
      {/* Stem */}
      <path d="M 80,100 L 80,150" stroke="#5d85bf" strokeWidth="3" strokeLinecap="round" />
      
      {/* Big gorgeous Hydrangea head cluster */}
      <circle cx="80" cy="70" r="45" fill="#d2e3fc" opacity="0.8" />
      
      {/* Flower blossoms layered */}
      <g stroke="#4f7cb8" strokeWidth="1.2">
        {/* Center blossom */}
        <path d="M 80,60 C 72,60 70,70 80,70 C 90,70 88,60 80,60 Z" fill="#a0c0f8" />
        <path d="M 70,70 C 70,62 80,60 80,70 C 80,80 70,78 70,70 Z" fill="#a0c0f8" />
        <circle cx="80" cy="70" r="2.5" fill="#fce085" />

        {/* Top blossom */}
        <path d="M 80,35 C 74,35 72,42 80,42 C 88,42 86,35 80,35 Z" fill="#baccfd" />
        <path d="M 74,42 C 74,36 80,35 80,42 C 80,48 74,47 74,42 Z" fill="#baccfd" />
        <circle cx="80" cy="42" r="2" fill="#fce085" />

        {/* Left blossom */}
        <path d="M 52,65 C 46,65 44,72 52,72 C 60,72 58,65 52,65 Z" fill="#a4c4fc" />
        <path d="M 46,72 C 46,66 52,65 52,72 C 52,78 46,77 46,72 Z" fill="#a4c4fc" />
        <circle cx="52" cy="72" r="2" fill="#fce085" />

        {/* Right blossom */}
        <path d="M 108,68 C 102,68 100,75 108,75 C 116,75 114,68 108,68 Z" fill="#9cbbfc" />
        <path d="M 102,75 C 102,69 108,68 108,75 C 108,81 102,80 102,75 Z" fill="#9cbbfc" />
        <circle cx="108" cy="75" r="2" fill="#fce085" />

        {/* Bottom blossom */}
        <path d="M 82,90 C 76,90 74,97 82,97 C 90,97 88,90 82,90 Z" fill="#baccfd" />
        <path d="M 76,97 C 76,91 82,90 82,97 C 82,103 76,102 76,97 Z" fill="#baccfd" />
        <circle cx="82" cy="97" r="2" fill="#fce085" />

        {/* Extra filler blossom blobs */}
        <circle cx="62" cy="50" r="6" fill="#cbdcf8" />
        <circle cx="98" cy="48" r="6" fill="#cbdcf8" />
        <circle cx="64" cy="88" r="6" fill="#cbdcf8" />
        <circle cx="96" cy="90" r="6" fill="#cbdcf8" />
      </g>
    </svg>
  );
}

function ForgetMeNotSVG({ className = '', animateSway = true }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-36 h-36 ${animateSway ? 'animate-sway' : ''} ${className}`}>
      {/* Leaf */}
      <path d="M 40,115 C 20,120 20,105 35,108 C 42,109 45,115 40,115 Z" fill="#8db4eb" opacity="0.5" stroke="#4471b0" strokeWidth="1.2" />
      <path d="M 120,120 C 140,125 140,110 125,113 C 118,114 115,120 120,120 Z" fill="#8db4eb" opacity="0.5" stroke="#4471b0" strokeWidth="1.2" />
      
      {/* Stem */}
      <path d="M 80,80 Q 85,120 78,150" stroke="#5d85bf" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Starry flower arrangement */}
      {/* Main Center Petal Flower */}
      <g transform="translate(80, 75)" stroke="#3e6cb0" strokeWidth="1.5">
        {/* Yellow starry center ring */}
        <circle cx="0" cy="0" r="5" fill="#fce085" stroke="#ce992e" strokeWidth="1" />
        <circle cx="0" cy="0" r="1.5" fill="#2d4263" />

        {/* 5 rounded cute blue petals */}
        {/* Top */}
        <path d="M 0,-5 C -7,-5 -12,-16 0,-16 C 12,-16 7,-5 0,-5 Z" fill="#7da6f3" />
        {/* Left top */}
        <path d="M -4,-3 C -10,-8 -20,-3 -13,5 C -6,13 -1,5 -4,-3 Z" fill="#7da6f3" />
        {/* Right top */}
        <path d="M 4,-3 C 10,-8 20,-3 13,5 C 6,13 1,5 4,-3 Z" fill="#7da6f3" />
        {/* Bottom left */}
        <path d="M -3,3 C -8,8 -14,20 -5,22 C 4,24 2,11 -3,3 Z" fill="#7da6f3" />
        {/* Bottom right */}
        <path d="M 3,3 C 8,8 14,20 5,22 C -4,24 -2,11 3,3 Z" fill="#7da6f3" />
      </g>

      {/* Tiny companion floret upper left */}
      <g transform="translate(48, 52) scale(0.6)" stroke="#3e6cb0" strokeWidth="1.5">
        <circle cx="0" cy="0" r="5" fill="#fce085" />
        <path d="M 0,-5 C -7,-5 -12,-16 0,-16 C 12,-16 7,-5 0,-5 Z" fill="#9dc3f9" />
        <path d="M -4,-3 C -10,-8 -20,-3 -13,5 C -6,13 -1,5 -4,-3 Z" fill="#9dc3f9" />
        <path d="M 4,-3 C 10,-8 20,-3 13,5 C 6,13 1,5 4,-3 Z" fill="#9dc3f9" />
        <path d="M -3,3 C -8,8 -14,20 -5,22 C 4,24 2,11 -3,3 Z" fill="#9dc3f9" />
        <path d="M 3,3 C 8,8 14,20 5,22 C -4,24 -2,11 3,3 Z" fill="#9dc3f9" />
      </g>

      {/* Tiny companion floret right */}
      <g transform="translate(112, 60) scale(0.5)" stroke="#3e6cb0" strokeWidth="1.5">
        <circle cx="0" cy="0" r="5" fill="#fce085" />
        <path d="M 0,-5 C -7,-5 -12,-16 0,-16 C 12,-16 7,-5 0,-5 Z" fill="#a4caff" />
        <path d="M -4,-3 C -10,-8 -20,-3 -13,5 C -6,13 -1,5 -4,-3 Z" fill="#a4caff" />
        <path d="M 4,-3 C 10,-8 20,-3 13,5 C 6,13 1,5 4,-3 Z" fill="#a4caff" />
        <path d="M -3,3 C -8,8 -14,20 -5,22 C 4,24 2,11 -3,3 Z" fill="#a4caff" />
        <path d="M 3,3 C 8,8 14,20 5,22 C -4,24 -2,11 3,3 Z" fill="#a4caff" />
      </g>
    </svg>
  );
}

function BlueDelphiniumSVG({ className = '', animateSway = true }) {
  return (
    <svg viewBox="0 0 160 160" className={`w-36 h-36 ${animateSway ? 'animate-sway' : ''} ${className}`}>
      {/* Tall Stem */}
      <path d="M 80,140 L 80,15" stroke="#527ebd" strokeWidth="3" strokeLinecap="round" />
      
      {/* Stacking flowers upward */}
      {/* Flower 1 - bottom */}
      <g transform="translate(80, 110) scale(0.8)" stroke="#3763a4" strokeWidth="1.5">
        <ellipse cx="0" cy="0" rx="14" ry="14" fill="#6997e5" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
        <circle cx="-6" cy="-4" r="3" fill="#8cb2f2" opacity="0.5" />
        <circle cx="6" cy="4" r="3" fill="#8cb2f2" opacity="0.5" />
      </g>

      {/* Flower 2 - middle-low */}
      <g transform="translate(62, 85) scale(0.75)" stroke="#3763a4" strokeWidth="1.5">
        <ellipse cx="0" cy="0" rx="14" ry="14" fill="#a0c2f7" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
      </g>

      {/* Flower 3 - middle-high */}
      <g transform="translate(98, 70) scale(0.72)" stroke="#3763a4" strokeWidth="1.5">
        <ellipse cx="0" cy="0" rx="14" ry="14" fill="#7ca6eb" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
      </g>

      {/* Flower 4 - high */}
      <g transform="translate(74, 45) scale(0.68)" stroke="#3763a4" strokeWidth="1.5">
        <ellipse cx="0" cy="0" rx="14" ry="14" fill="#90b5f1" />
        <circle cx="0" cy="0" r="4" fill="#ffffff" />
      </g>

      {/* Flower 5 - top bud */}
      <g transform="translate(86, 25) scale(0.55)" stroke="#3763a4" strokeWidth="1.5">
        <ellipse cx="0" cy="0" rx="14" ry="10" fill="#aecbf7" />
        <circle cx="0" cy="0" r="3" fill="#fcfcfc" />
      </g>
    </svg>
  );
}

export default function GiftSection() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerData | null>(FLOWERS_INFO[0]);
  const [basketFlowers, setBasketFlowers] = useState<string[]>(['hydrangea', 'forgetmenot', 'delphinium']); // default loaded
  const [isAssembled, setIsAssembled] = useState(false);
  const [customNote, setCustomNote] = useState('With endless love and effort, for you.');

  const toggleBasketFlower = (id: string) => {
    if (basketFlowers.includes(id)) {
      setBasketFlowers(basketFlowers.filter(f => f !== id));
    } else {
      setBasketFlowers([...basketFlowers, id]);
    }
  };

  const handleAssembleBouquet = () => {
    if (basketFlowers.length === 0) return;
    setIsAssembled(true);
  };

  const handleResetBouquet = () => {
    setIsAssembled(false);
    setBasketFlowers(['hydrangea', 'forgetmenot', 'delphinium']);
  };

  return (
    <motion.div
      id="gift-garden-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.0 }}
      className="w-full max-w-4xl mx-auto px-4 py-12 relative"
    >
      
      {/* Decorative stars and doodles surrounding the garden */}
      <CuteCloud className="bottom-20 right-2 opacity-50 scale-90" delay={4} />
      <CuteStar className="top-12 left-2 opacity-40" size={24} />
      <CuteHeart className="top-40 right-4 opacity-50" size={18} />

      {/* Garden Heading */}
      <div className="text-center mb-12">
        <span className="font-display text-[10px] text-sky-400 font-bold tracking-widest uppercase block mb-1">
          The Cozy Blue Conservatory
        </span>
        <h2 className="font-handwritten text-4xl sm:text-5xl text-sky-800 tracking-wide">
          Your Flowers & Messages
        </h2>
        <p className="text-sm text-sky-500 font-medium max-w-md mx-auto mt-2">
          Click on each blue flower to unlock its scientific meaning, symbolic secrets, and care instructions.
        </p>
      </div>

      {/* Flower Deck Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {FLOWERS_INFO.map((flower) => {
          const isSelected = selectedFlower?.id === flower.id;
          return (
            <motion.div
              key={flower.id}
              onClick={() => setSelectedFlower(flower)}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                isSelected 
                  ? 'bg-gradient-to-br from-white to-sky-100/50 shadow-md border-2 border-sky-300' 
                  : 'bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md border border-sky-100'
              }`}
            >
              {/* Selective colored check indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 bg-sky-200 text-sky-600 rounded-full p-1 border border-sky-300">
                  <Check size={10} strokeWidth={3} />
                </div>
              )}

              <div className="flex flex-col items-center">
                {/* Embedded Large Custom Flower Graphics */}
                {flower.id === 'hydrangea' && <BlueHydrangeaSVG />}
                {flower.id === 'forgetmenot' && <ForgetMeNotSVG />}
                {flower.id === 'delphinium' && <BlueDelphiniumSVG />}

                <h3 className="font-display font-semibold text-lg text-sky-800 mt-2">
                  {flower.name}
                </h3>
                <p className="text-[11px] font-mono text-sky-400 font-medium tracking-wide">
                  {flower.scientificName}
                </p>
                
                <span className="text-xs bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-semibold mt-3 border border-sky-100">
                  {flower.symbolism.split(',')[0]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Flower Details panel box */}
      <AnimatePresence mode="wait">
        {selectedFlower && (
          <motion.div
            key={selectedFlower.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm border border-sky-100/60 mb-16 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-28 h-28 hidden sm:flex items-center justify-center bg-sky-50 rounded-full border border-sky-100">
              {selectedFlower.id === 'hydrangea' && <BlueHydrangeaSVG animateSway={false} className="w-24 h-24" />}
              {selectedFlower.id === 'forgetmenot' && <ForgetMeNotSVG animateSway={false} className="w-24 h-24" />}
              {selectedFlower.id === 'delphinium' && <BlueDelphiniumSVG animateSway={false} className="w-24 h-24" />}
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase flex items-center justify-center md:justify-start gap-1">
                <Info size={12} /> Detail Guide & Symbolism
              </span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-sky-800 mt-1">
                About the {selectedFlower.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <span className="text-xs text-sky-400 font-bold block uppercase tracking-wider">Symbolic Heart:</span>
                  <p className="text-sm font-semibold text-sky-700 mt-0.5">{selectedFlower.symbolism}</p>
                </div>
                <div>
                  <span className="text-xs text-sky-400 font-bold block uppercase tracking-wider">Scientific Ancestry:</span>
                  <p className="text-sm font-mono text-slate-500 mt-0.5 italic">{selectedFlower.scientificName}</p>
                </div>
              </div>

              <div className="mt-4 border-t border-sky-50 pt-4">
                <span className="text-xs text-sky-450 font-bold block uppercase tracking-wider text-slate-400">Sweet Narrative:</span>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans font-medium">
                  {selectedFlower.description}
                </p>
                <div className="mt-3.5 bg-sky-50/70 border border-sky-100/50 rounded-xl p-3 text-[11px] text-sky-700 font-medium">
                  🌱 <strong className="text-sky-800">Care Tip:</strong> {selectedFlower.careTip}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hearts and Doodles divider */}
      <div className="flex justify-center gap-3 py-6 text-sky-300">
        <Heart size={14} className="fill-rose-100 text-rose-300 animate-pulse" />
        <Heart size={14} className="fill-sky-100 text-sky-300" />
        <Heart size={14} className="fill-blue-100 text-blue-300 animate-pulse" />
      </div>

      {/* Traditional Quotes and Message reveal with Bouquet building! */}
      <h2 id="gift-bouquet-card" className="font-handwritten text-4xl text-center text-sky-800 mb-6">
        Let's Gather a Bouquet for Kai
      </h2>
      <p className="text-xs text-center text-sky-500 font-medium max-w-md mx-auto mb-8">
        Check the boxes on any of the blue flowers below, then hit "Assemble" to wrap them in a cute custom vase along with sweet French and German greeting messages.
      </p>

      {/* Interactive Bouquet Customizer Grid */}
      <div className="bg-white shadow-md border border-sky-100 rounded-3xl p-6 sm:p-8 relative">
        {!isAssembled ? (
          <div>
            {/* Flower checkbox selectables */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 mt-2">
              {FLOWERS_INFO.map(flow => {
                const isActive = basketFlowers.includes(flow.id);
                return (
                  <button
                    key={flow.id}
                    onClick={() => toggleBasketFlower(flow.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl cursor-pointer hover:shadow-sm border transition-all duration-300 font-sans text-sm font-semibold
                      ${isActive 
                        ? 'bg-sky-100 border-sky-300 text-sky-700' 
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                      }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all
                      ${isActive 
                        ? 'bg-sky-500 border-sky-500 text-white' 
                        : 'bg-white border-slate-300'
                      }`}
                    >
                      {isActive && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span>{flow.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Ribbon tag input box */}
            <div className="max-w-md mx-auto mb-8 font-sans">
              <label className="text-xs font-bold text-sky-400 block mb-1.5 uppercase tracking-wide">
                Write a small tag message for the vase:
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                maxLength={70}
                className="w-full px-4 py-2.5 rounded-xl border border-sky-100 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-sky-300 focus:bg-white font-medium"
                placeholder="Write a sweet ribbon note..."
              />
            </div>

            {/* Assemble trigger button */}
            <div className="flex justify-center">
              <motion.button
                onClick={handleAssembleBouquet}
                disabled={basketFlowers.length === 0}
                className={`py-3 px-8 rounded-full font-display font-medium text-xs tracking-widest uppercase shadow-md transition-all duration-300
                  ${basketFlowers.length === 0 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-sky-400 to-blue-400 text-white hover:from-sky-500 hover:to-blue-500 cursor-pointer active:scale-95'
                  }`}
                whileHover={basketFlowers.length > 0 ? { scale: 1.05 } : {}}
                whileTap={basketFlowers.length > 0 ? { scale: 0.95 } : {}}
              >
                Assemble Bouquet ({basketFlowers.length}) 💐
              </motion.button>
            </div>
          </div>
        ) : (
          /* Wrapped vase and sweet quotes revealed! (Meets all requested points beautifully) */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Sparkles effect behind the vase */}
            <div className="absolute top-10 left-10 text-amber-300 animate-pulse"><Sparkles size={24} /></div>
            <div className="absolute top-20 right-10 text-sky-300 animate-pulse"><CuteStar size={20} /></div>

            {/* Beautiful Custom Vase Illustration containing chosen flowers rendering dynamically! */}
            <div className="relative w-72 h-64 flex justify-center items-end select-none mt-4 mb-2">
              
              {/* Selected flower graphics protruding from top of vase */}
              <div className="absolute inset-x-0 bottom-20 flex justify-center items-center gap-1">
                {basketFlowers.includes('hydrangea') && (
                  <motion.div 
                    animate={{ rotate: [-2, 2, -2], y: [-1, 1, -1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                    className="absolute -top-16 -left-12 z-0"
                  >
                    <BlueHydrangeaSVG className="w-28 h-28" animateSway={false} />
                  </motion.div>
                )}

                {basketFlowers.includes('delphinium') && (
                  <motion.div 
                    animate={{ rotate: [1, -2, 1], y: [1, -1, 1] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                    className="absolute -top-24 z-1"
                  >
                    <BlueDelphiniumSVG className="w-28 h-28" animateSway={false} />
                  </motion.div>
                )}

                {basketFlowers.includes('forgetmenot') && (
                  <motion.div 
                    animate={{ rotate: [3, -3, 3], y: [-2, 1, -2] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                    className="absolute -top-14 -right-12 z-0"
                  >
                    <ForgetMeNotSVG className="w-28 h-28" animateSway={false} />
                  </motion.div>
                )}
              </div>

              {/* Ceramic glass Mason Jar/Vase wrapper */}
              <div className="relative z-10 w-32 h-36">
                <svg viewBox="0 0 100 120" className="w-full h-full filter drop-shadow-md">
                  {/* Glass backing */}
                  <path d="M 20,20 L 80,20 L 76,108 C 76,115 70,120 62,120 L 38,120 C 30,120 24,115 24,108 Z" fill="#e8f3ffa0" stroke="#7796c7" strokeWidth="2" />
                  {/* Water inside */}
                  <path d="M 24,65 C 38,62 62,68 76,65 L 75,108 C 75,113 70,118 62,118 L 38,118 C 30,118 25,113 25,108 Z" fill="#cbe4ff80" />
                  {/* Highlights */}
                  <path d="M 28,30 L 28,110" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  
                  {/* Custom Canvas Tag with Note */}
                  <rect x="18" y="75" width="64" height="20" rx="3" fill="#faf6e8" stroke="#cebca0" strokeWidth="1" />
                  {/* Little tiny string holding note tag */}
                  <ellipse cx="50" cy="50" rx="36" ry="6" stroke="#907955" fill="none" strokeWidth="1" />
                </svg>

                {/* Tag Note scribbled text representation */}
                <div className="absolute inset-x-0 bottom-12 text-center text-[7px] text-[#867151] font-display font-medium px-2 truncate leading-tight select-none">
                  “{customNote}”
                </div>
              </div>
            </div>

            {/* Revealing the requested specific translations and quotes */}
            <div className="w-full max-w-xl text-center space-y-6 mt-6 pb-4">
              
              <div className="border-t border-sky-100 pt-6">
                <span className="text-[10px] uppercase tracking-widest font-bold font-display text-sky-400">German</span>
                {GIFT_QUOTES.filter(q => q.language === 'German').map(q => (
                  <div key={q.language} className="mt-2 text-slate-800">
                    {q.lines.map(line => (
                      <p key={line} className="font-display font-semibold text-base sm:text-lg leading-snug tracking-wide text-sky-850">
                        {line}
                      </p>
                    ))}
                    <p className="text-xs text-sky-500 font-sans mt-2 italic">
                      {q.translation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-sky-100 pt-5">
                <span className="text-[10px] uppercase tracking-widest font-bold font-display text-sky-400">French</span>
                {GIFT_QUOTES.filter(q => q.language === 'French').map(q => (
                  <div key={q.language} className="mt-2 text-slate-800">
                    {q.lines.map(line => (
                      <p key={line} className="font-display font-semibold text-base sm:text-lg leading-snug tracking-wide text-sky-850">
                        {line}
                      </p>
                    ))}
                    <p className="text-xs text-sky-500 font-sans mt-2 italic">
                      {q.translation}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Restart button to try another flower basket arrangement */}
            <button
              onClick={handleResetBouquet}
              className="mt-6 flex items-center gap-1.5 text-xs text-sky-400 font-bold tracking-wider hover:text-sky-600 transition-colors cursor-pointer uppercase"
            >
              <RotateCcw size={12} />
              Re-arrange Bouquet
            </button>
            
          </motion.div>
        )}
      </div>

    </motion.div>
  );
}
