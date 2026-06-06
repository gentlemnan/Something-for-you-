/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppState {
  LOCKED = 'LOCKED',
  OPENING = 'OPENING',
  REVEALED = 'REVEALED'
}

export interface FlowerData {
  id: string;
  name: string;
  scientificName: string;
  symbolism: string;
  description: string;
  careTip: string;
  primaryColor: string;
  accentColor: string;
}

export interface QuoteData {
  language: string;
  lines: string[];
  translation: string;
}

export const FLOWERS_INFO: FlowerData[] = [
  {
    id: 'hydrangea',
    name: 'Blue Hydrangea',
    scientificName: 'Hydrangea macrophylla',
    symbolism: 'Gratitude, Grace & Heartfelt Emotion',
    description: 'With rich clusters of sky-blue petals, the hydrangea represents deep, authentic love, understanding, and heartfelt gratitude for someone who holds a sacred place in your soul.',
    careTip: 'These flowers thrive when given constant, gentle nourishment—just like a relationship filled with active listening and care.',
    primaryColor: '#809bce',
    accentColor: '#95b8d1'
  },
  {
    id: 'forgetmenot',
    name: 'Forget-Me-Not',
    scientificName: 'Myosotis sylvatica',
    symbolism: 'True Love, Loyalty & Lasting Memories',
    description: 'Tiny but incredibly persistent, these starry five-petaled blossoms whisper of eternal remembrance, faithful connections, and soft memories that time can never fade.',
    careTip: 'They bloom in sweet fields, reminding us that even the smallest, most ordinary moments can grow into beautiful lifelong treasures.',
    primaryColor: '#7097e6',
    accentColor: '#adc1ec'
  },
  {
    id: 'delphinium',
    name: 'Blue Delphinium',
    scientificName: 'Delphinium elatum',
    symbolism: 'New Joy, Open Hearts & Infinite Possibilities',
    description: 'Reaching tall and proud like blue steeples towards the heavens, Delphiniums embody lighthearted optimism, deep bonds, and the courage to open your heart to a fresh new chapter.',
    careTip: 'They stand tall, teaching us strength, patience, and the value of putting in the work to rise together through difficult days.',
    primaryColor: '#5c80c9',
    accentColor: '#8ca6dc'
  }
];

export const GIFT_QUOTES: QuoteData[] = [
  {
    language: 'German',
    lines: [
      'Ich Bin Froh, Dass Du In Meinem Leben Bist.',
      'Danke, Dass Du Du Bist.'
    ],
    translation: '“I am glad that you are in my life. Thank you for being you.”'
  },
  {
    language: 'French',
    lines: [
      "Je Suis Heureux De T'avoir Dans Ma Vie.",
      "Merci D'être Toi."
    ],
    translation: '“I am happy to have you in my life. Thank you for being you.”'
  }
];

export interface PolaroidMemory {
  id: string;
  title: string;
  caption: string;
  date: string;
  angle: number; // visual tilt degrees
  iconName: string;
}

export const POLAROIDS_LIST: PolaroidMemory[] = [
  {
    id: 'mem1',
    title: 'The Beginnings',
    caption: 'Our first spark...',
    date: 'A beautiful step',
    angle: -3,
    iconName: 'heart'
  },
  {
    id: 'mem2',
    title: 'Everyday Joy',
    caption: 'Small coffees & big laughs',
    date: 'Ordinary magic',
    angle: 4,
    iconName: 'coffee'
  },
  {
    id: 'mem3',
    title: 'Growing Together',
    caption: 'Learning through shadows',
    date: 'Stronger and wiser',
    angle: -2,
    iconName: 'sparkles'
  }
];
