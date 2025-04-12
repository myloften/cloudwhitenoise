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
    name: '海浪',
    category: 'nature',
    icon: icons.ocean,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
    description: 'Calming ocean waves for relaxation and focus'
  },
  {
    id: 'rain',
    name: '雨声',
    category: 'weather',
    icon: icons.rain,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    description: 'Gentle rainfall sounds for peaceful sleep'
  },
  {
    id: 'forest',
    name: '森林',
    category: 'nature',
    icon: icons.forest,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
    description: 'Serene forest ambience with bird songs'
  },
  {
    id: 'fire',
    name: '壁炉',
    category: 'ambient',
    icon: icons.fire,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3',
    description: 'Cozy fireplace crackling sounds'
  },
  {
    id: 'wind',
    name: '风声',
    category: 'weather',
    icon: icons.wind,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3',
    description: 'Gentle wind sounds for meditation'
  },
  {
    id: 'birds',
    name: '鸟鸣',
    category: 'nature',
    icon: icons.birds,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3',
    description: 'Peaceful bird songs'
  },
  {
    id: 'cafe',
    name: '咖啡厅',
    category: 'urban',
    icon: icons.cafe,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2576/2576-preview.mp3',
    description: 'Cozy cafe atmosphere'
  },
  {
    id: 'fan',
    name: '电扇',
    category: 'urban',
    icon: icons.fan,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2577/2577-preview.mp3',
    description: 'White noise from a fan'
  },
  {
    id: 'train',
    name: '火车',
    category: 'urban',
    icon: icons.train,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3',
    description: 'Rhythmic train sounds'
  },
  {
    id: 'stream',
    name: '溪流',
    category: 'nature',
    icon: icons.stream,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2579/2579-preview.mp3',
    description: 'Peaceful stream and river sounds'
  },
  {
    id: 'thunder',
    name: '雷声',
    category: 'weather',
    icon: icons.thunder,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2580/2580-preview.mp3',
    description: 'Rolling thunder sounds'
  },
  {
    id: 'cricket',
    name: '蟋蟀',
    category: 'nature',
    icon: icons.cricket,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2581/2581-preview.mp3',
    description: 'Peaceful cricket chirping'
  },
  {
    id: 'waterfall',
    name: '瀑布',
    category: 'nature',
    icon: icons.waterfall,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2582/2582-preview.mp3',
    description: 'Powerful waterfall white noise'
  },
  {
    id: 'library',
    name: '图书馆',
    category: 'urban',
    icon: icons.library,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2583/2583-preview.mp3',
    description: 'Quiet library ambience'
  },
  {
    id: 'typing',
    name: '打字',
    category: 'urban',
    icon: icons.typing,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2584/2584-preview.mp3',
    description: 'Rhythmic keyboard typing sounds'
  },
  {
    id: 'whitenoise',
    name: '白噪音',
    category: 'ambient',
    icon: icons.whitenoise,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2585/2585-preview.mp3',
    description: 'Pure white noise for focus'
  },
  {
    id: 'bell',
    name: '铃声',
    category: 'meditation',
    icon: icons.bell,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2586/2586-preview.mp3',
    description: 'Meditation bell sounds'
  },
  {
    id: 'woodfish',
    name: '木鱼',
    category: 'meditation',
    icon: icons.woodfish,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2587/2587-preview.mp3',
    description: 'Traditional wooden fish percussion'
  },
  {
    id: 'night',
    name: '夜晚',
    category: 'nature',
    icon: icons.night,
    audioUrl: 'https://assets.mixkit.co/active_storage/sfx/2588/2588-preview.mp3',
    description: 'Peaceful night ambience'
  }
]; 