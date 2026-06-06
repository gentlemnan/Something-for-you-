/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Beautiful, soft, emotional piano chord progression
// I - F Major 9
// II - G Major 6
// III - E Minor 7
// IV - A Minor 7
interface Chord {
  root: number;     // Bass note frequency
  notes: number[];  // Arpeggio notes frequencies
}

export class PianoSynth {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private currentStep: number = 0;
  private currentChordIdx: number = 0;
  private timerId: any = null;
  private masterGain: GainNode | null = null;
  private delayNode: DelayNode | null = null;

  // Chord notes mapping (Hz)
  private chords: Chord[] = [
    {
      // F3 (root) & F4, A4, C5, E5, G5
      root: 174.61, 
      notes: [349.23, 440.00, 523.25, 659.25, 783.99]
    },
    {
      // G3 (root) & G4, B4, D5, E5, A5
      root: 196.00,
      notes: [392.00, 493.88, 587.33, 659.25, 880.00]
    },
    {
      // E3 (root) & G4, B4, D5, G5, B5
      root: 164.81,
      notes: [392.00, 493.88, 587.33, 783.99, 987.77]
    },
    {
      // A3 (root) & A4, C5, E5, G5, C6
      root: 220.00,
      notes: [440.00, 523.25, 659.25, 783.99, 1046.50]
    }
  ];

  constructor() {
    // Lazy loaded context
  }

  private initCtx() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime); // Soft volume

      // Create a warm delay and reverb-like loop for lushness
      this.delayNode = this.audioCtx.createDelay(1.0);
      const delayFeedback = this.audioCtx.createGain();
      
      this.delayNode.delayTime.setValueAtTime(0.35, this.audioCtx.currentTime); // Sweet delay
      delayFeedback.gain.setValueAtTime(0.3, this.audioCtx.currentTime); // feedback amount
      
      this.delayNode.connect(delayFeedback);
      delayFeedback.connect(this.delayNode);
      
      // Connect sound path
      this.masterGain.connect(this.audioCtx.destination);
      this.delayNode.connect(this.audioCtx.destination);
      this.masterGain.connect(this.delayNode);
    }
    
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public start() {
    if (this.isPlaying) return;
    this.initCtx();
    this.isPlaying = true;
    this.currentStep = 0;
    this.currentChordIdx = 0;
    this.scheduleNextTick();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.audioCtx) {
      const vol = this.isMuted ? 0 : 0.08;
      this.masterGain.gain.setTargetAtTime(vol, this.audioCtx.currentTime, 0.1);
    }
    return this.isMuted;
  }

  public getMuteState() {
    return this.isMuted;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  // Cute trigger piano key logic
  private playPianoKey(freq: number, isBass: boolean = false, velocity: number = 0.5) {
    if (!this.audioCtx || !this.masterGain) return;
    
    const now = this.audioCtx.currentTime;
    
    // Core Oscillator for warm soft sound: blend Triangle and Sine of same frequency
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const voiceGain = this.audioCtx.createGain();

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq, now);

    // Warm, round timbre selection
    osc1.type = 'triangle';
    osc2.type = 'sine';

    // Detune slightly for an organic, slightly tape-warped, soulful aesthetic
    osc2.detune.setValueAtTime(isBass ? -4 : 6, now);

    // Exponential Decay Envelope (Piano-like)
    voiceGain.gain.setValueAtTime(0, now);
    // Smooth attack
    voiceGain.gain.linearRampToValueAtTime(velocity * (isBass ? 0.6 : 0.4), now + 0.04);
    
    // Smooth decay/release
    const decayTime = isBass ? 2.5 : 1.8;
    voiceGain.gain.exponentialRampToValueAtTime(0.001, now + decayTime);

    // Filter to warm it up (cut harsh highs)
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBass ? 400 : 1200, now);

    // Connections
    osc1.connect(voiceGain);
    osc2.connect(voiceGain);
    voiceGain.connect(filter);
    filter.connect(this.masterGain);

    // Start & Stop
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + decayTime + 0.1);
    osc2.stop(now + decayTime + 0.1);
  }

  private scheduleNextTick() {
    if (!this.isPlaying || !this.audioCtx) return;

    const tempo = 132; // Comfy soothing lullaby speed
    const stepDuration = 60 / tempo; // duration in seconds per beat
    
    const activeChord = this.chords[this.currentChordIdx];

    // Every bar consists of 8 steps
    const barStep = this.currentStep % 8;

    if (barStep === 0) {
      // Step 0: Trigger deep calming bass tone
      this.playPianoKey(activeChord.root, true, 0.8);
    }

    // Comfy soft arpeggio logic (handmade, organic feeling spacing)
    if (barStep === 0 || barStep === 2 || barStep === 4 || barStep === 6) {
      // Pick notes from the chord to sound like flowing water
      let noteIdx = 0;
      if (barStep === 0) noteIdx = 0;
      else if (barStep === 2) noteIdx = 2;
      else if (barStep === 4) noteIdx = 1;
      else if (barStep === 6) noteIdx = 3;

      const randomMod = Math.random() > 0.85 ? 4 : noteIdx;
      const finalFreq = activeChord.notes[randomMod] || activeChord.notes[0];
      
      this.playPianoKey(finalFreq, false, 0.4 + Math.random() * 0.15);
    }

    // Starry sparkles / occasional delicate melody on off-beats
    if ((barStep === 1 || barStep === 3 || barStep === 5) && Math.random() > 0.4) {
      // Choose high notes
      const highNotes = activeChord.notes.slice(2);
      const randomNote = highNotes[Math.floor(Math.random() * highNotes.length)];
      this.playPianoKey(randomNote, false, 0.25);
    }

    // Step Increment
    this.currentStep++;
    if (this.currentStep % 8 === 0) {
      // Move to next chord
      this.currentChordIdx = (this.currentChordIdx + 1) % this.chords.length;
    }

    // Schedule next callback
    this.timerId = setTimeout(() => {
      this.scheduleNextTick();
    }, stepDuration * 1000);
  }
}
