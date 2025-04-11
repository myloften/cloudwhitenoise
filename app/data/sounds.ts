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
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_1fb4e87c55.mp3',
    description: 'Calming ocean waves for relaxation and focus'
  },
  {
    id: 'rain',
    name: '雨声',
    category: 'weather',
    icon: icons.rain,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_dc39bde808.mp3',
    description: 'Gentle rainfall sounds for peaceful sleep'
  },
  {
    id: 'forest',
    name: '森林',
    category: 'nature',
    icon: icons.forest,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e40d6.mp3',
    description: 'Serene forest ambience with bird songs'
  },
  {
    id: 'fire',
    name: '壁炉',
    category: 'ambient',
    icon: icons.fire,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_1fb4e87c55.mp3',
    description: 'Cozy fireplace crackling sounds'
  },
  {
    id: 'wind',
    name: '风声',
    category: 'weather',
    icon: icons.wind,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e40d6.mp3',
    description: 'Gentle wind sounds for meditation'
  },
  {
    id: 'birds',
    name: '鸟鸣',
    category: 'nature',
    icon: icons.birds,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_1fb4e87c55.mp3',
    description: 'Peaceful bird songs'
  },
  {
    id: 'cafe',
    name: '咖啡厅',
    category: 'urban',
    icon: icons.cafe,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_dc39bde808.mp3',
    description: 'Cozy cafe atmosphere'
  },
  {
    id: 'fan',
    name: '电扇',
    category: 'urban',
    icon: icons.fan,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e40d6.mp3',
    description: 'White noise from a fan'
  },
  {
    id: 'train',
    name: '火车',
    category: 'urban',
    icon: icons.train,
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_88447e40d6.mp3',
    description: 'Rhythmic train sounds'
  }
]; 