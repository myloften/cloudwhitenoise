import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { sounds } from '../data/sounds';

// 场景预设中使用的音效（优先加载）
const PRIORITY_SOUND_IDS = [
  // meditation场景
  'stream', 'birds', 'bell',
  // productivity场景
  'cafe', 'rain', 'typing',
  // relax场景
  'ocean', 'wind',
  // sleep场景
  'night', 'whitenoise',
  // focus场景
  'forest'
];

// 其他音效（按需加载）
const SECONDARY_SOUND_IDS = [
  'fire', 'fan', 'train', 'library',
  'thunder', 'cricket', 'waterfall'
];

// 音频缓存时间（24小时）
const CACHE_DURATION = 24 * 60 * 60 * 1000;

export function useAudioPreload() {
  const preloadedSounds = useRef<Map<string, Howl>>(new Map());

  useEffect(() => {
    // 创建并预加载音效
    const loadSound = (id: string) => {
      const sound = sounds.find(s => s.id === id);
      if (sound && !preloadedSounds.current.has(id)) {
        const howl = new Howl({
          src: [sound.audioUrl],
          preload: true,
          html5: true,
          format: ['mp3'],
          onload: () => {
            console.log(`Loaded: ${sound.name}`);
          },
          onloaderror: (_, error) => {
            console.error(`Error loading ${sound.name}:`, error);
          }
        });
        preloadedSounds.current.set(id, howl);
      }
    };

    // 按优先级加载音效
    PRIORITY_SOUND_IDS.forEach((id, index) => {
      setTimeout(() => {
        loadSound(id);
      }, index * 300); // 每300ms加载一个音效
    });

    // 清理函数
    return () => {
      preloadedSounds.current.forEach(howl => {
        howl.unload();
      });
      preloadedSounds.current.clear();
    };
  }, []);

  // 获取预加载的音效实例
  const getPreloadedSound = (id: string) => {
    return preloadedSounds.current.get(id);
  };

  return {
    getPreloadedSound
  };
} 