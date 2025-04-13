import { icons } from './icons';

export interface Sound {
  id: string;
  name: string;
  category: string;
  icon: string;
  audioUrl: string;
  description: string;
}

export const soundCategories = [
  'nature',
  'ambient',
  'weather',
  'urban',
  'meditation'
] as const;

export const sounds: Sound[] = [
  {
    id: 'ocean',
    name: 'Ocean Waves',
    category: 'nature',
    icon: icons.ocean,
    audioUrl: '/sounds/nature/ocean.mp3',
    description: 'Calming ocean waves for relaxation and focus'
  },
  {
    id: 'rain',
    name: 'Rain',
    category: 'weather',
    icon: icons.rain,
    audioUrl: '/sounds/weather/rain.mp3',
    description: 'Gentle rainfall sounds for peaceful sleep'
  },
  {
    id: 'forest',
    name: 'Forest',
    category: 'nature',
    icon: icons.forest,
    audioUrl: '/sounds/nature/forest.mp3',
    description: 'Serene forest ambience with bird songs'
  },
  {
    id: 'fire',
    name: 'Fireplace',
    category: 'ambient',
    icon: icons.fire,
    audioUrl: '/sounds/ambient/fire.mp3',
    description: 'Cozy fireplace crackling sounds'
  },
  {
    id: 'wind',
    name: 'Wind',
    category: 'weather',
    icon: icons.wind,
    audioUrl: '/sounds/weather/wind.mp3',
    description: 'Gentle wind sounds for meditation'
  },
  {
    id: 'birds',
    name: 'Birds',
    category: 'nature',
    icon: icons.birds,
    audioUrl: '/sounds/nature/birds.mp3',
    description: 'Peaceful bird songs'
  },
  {
    id: 'cafe',
    name: 'Cafe',
    category: 'urban',
    icon: icons.cafe,
    audioUrl: '/sounds/urban/cafe.mp3',
    description: 'Cozy cafe atmosphere'
  },
  {
    id: 'fan',
    name: 'Fan',
    category: 'urban',
    icon: icons.fan,
    audioUrl: '/sounds/urban/fan.mp3',
    description: 'White noise from a fan'
  },
  {
    id: 'train',
    name: 'Train',
    category: 'urban',
    icon: icons.train,
    audioUrl: '/sounds/urban/train.mp3',
    description: 'Rhythmic train sounds'
  },
  {
    id: 'stream',
    name: 'Stream',
    category: 'nature',
    icon: icons.stream,
    audioUrl: '/sounds/nature/stream.mp3',
    description: 'Peaceful stream and river sounds'
  },
  {
    id: 'thunder',
    name: 'Thunder',
    category: 'weather',
    icon: icons.thunder,
    audioUrl: '/sounds/weather/thunder.mp3',
    description: 'Rolling thunder sounds'
  },
  {
    id: 'cricket',
    name: 'Crickets',
    category: 'nature',
    icon: icons.cricket,
    audioUrl: '/sounds/nature/cricket.mp3',
    description: 'Peaceful cricket chirping'
  },
  {
    id: 'waterfall',
    name: 'Waterfall',
    category: 'nature',
    icon: icons.waterfall,
    audioUrl: '/sounds/nature/waterfall.mp3',
    description: 'Powerful waterfall white noise'
  },
  {
    id: 'library',
    name: 'Library',
    category: 'urban',
    icon: icons.library,
    audioUrl: '/sounds/urban/library.mp3',
    description: 'Quiet library ambience'
  },
  {
    id: 'typing',
    name: 'Typing',
    category: 'urban',
    icon: icons.typing,
    audioUrl: '/sounds/urban/typing.mp3',
    description: 'Rhythmic keyboard typing sounds'
  },
  {
    id: 'whitenoise',
    name: 'White Noise',
    category: 'ambient',
    icon: icons.whitenoise,
    audioUrl: '/sounds/ambient/whitenoise.mp3',
    description: 'Pure white noise for focus'
  },
  {
    id: 'bell',
    name: 'Meditation Bell',
    category: 'meditation',
    icon: icons.bell,
    audioUrl: '/sounds/meditation/bell.mp3',
    description: 'Meditation bell sounds'
  },
  {
    id: 'night',
    name: 'Night',
    category: 'nature',
    icon: icons.night,
    audioUrl: '/sounds/nature/night.mp3',
    description: 'Peaceful night ambience'
  }
]; 