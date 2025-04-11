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
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_0a0a0a0a0a.mp3',
    description: 'Calming ocean waves for relaxation and focus'
  },
  {
    id: 'rain',
    name: '雨声',
    category: 'weather',
    icon: icons.rain,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_1b1b1b1b1b.mp3',
    description: 'Gentle rainfall sounds for peaceful sleep'
  },
  {
    id: 'forest',
    name: '森林',
    category: 'nature',
    icon: icons.forest,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_2c2c2c2c2c.mp3',
    description: 'Serene forest ambience with bird songs'
  },
  {
    id: 'fire',
    name: '壁炉',
    category: 'ambient',
    icon: icons.fire,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_3d3d3d3d3d.mp3',
    description: 'Cozy fireplace crackling sounds'
  },
  {
    id: 'wind',
    name: '风声',
    category: 'weather',
    icon: icons.wind,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_4e4e4e4e4e.mp3',
    description: 'Gentle wind sounds for meditation'
  },
  {
    id: 'birds',
    name: '鸟鸣',
    category: 'nature',
    icon: icons.birds,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_5f5f5f5f5f.mp3',
    description: 'Peaceful bird songs'
  },
  {
    id: 'cafe',
    name: '咖啡厅',
    category: 'urban',
    icon: icons.cafe,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_6g6g6g6g6g.mp3',
    description: 'Cozy cafe atmosphere'
  },
  {
    id: 'fan',
    name: '电扇',
    category: 'urban',
    icon: icons.fan,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_7h7h7h7h7h.mp3',
    description: 'White noise from a fan'
  },
  {
    id: 'train',
    name: '火车',
    category: 'urban',
    icon: icons.train,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_8i8i8i8i8i.mp3',
    description: 'Rhythmic train sounds'
  },
  {
    id: 'stream',
    name: '溪流',
    category: 'nature',
    icon: icons.stream,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_9j9j9j9j9j.mp3',
    description: 'Peaceful stream and river sounds'
  },
  {
    id: 'thunder',
    name: '雷声',
    category: 'weather',
    icon: icons.thunder,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_10k10k10k10k.mp3',
    description: 'Rolling thunder sounds'
  },
  {
    id: 'cricket',
    name: '蟋蟀',
    category: 'nature',
    icon: icons.cricket,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_11l11l11l11l.mp3',
    description: 'Peaceful cricket chirping'
  },
  {
    id: 'waterfall',
    name: '瀑布',
    category: 'nature',
    icon: icons.waterfall,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_12m12m12m12m.mp3',
    description: 'Powerful waterfall white noise'
  },
  {
    id: 'library',
    name: '图书馆',
    category: 'urban',
    icon: icons.library,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_13n13n13n13n.mp3',
    description: 'Quiet library ambience'
  },
  {
    id: 'typing',
    name: '打字',
    category: 'urban',
    icon: icons.typing,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_14o14o14o14o.mp3',
    description: 'Rhythmic keyboard typing sounds'
  },
  {
    id: 'whitenoise',
    name: '白噪音',
    category: 'ambient',
    icon: icons.whitenoise,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_15p15p15p15p.mp3',
    description: 'Pure white noise for focus'
  },
  {
    id: 'bell',
    name: '铃声',
    category: 'meditation',
    icon: icons.bell,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_16q16q16q16q.mp3',
    description: 'Meditation bell sounds'
  },
  {
    id: 'woodfish',
    name: '木鱼',
    category: 'meditation',
    icon: icons.woodfish,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_17r17r17r17r.mp3',
    description: 'Traditional wooden fish percussion'
  },
  {
    id: 'night',
    name: '夜晚',
    category: 'nature',
    icon: icons.night,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_18s18s18s18s.mp3',
    description: 'Peaceful night ambience'
  }
]; 