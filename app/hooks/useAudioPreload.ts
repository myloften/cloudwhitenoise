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
  // nature场景
  'forest',
  // peace场景
];

// 其他音效（后续加载）
const SECONDARY_SOUND_IDS = [
  'fire', 'fan', 'train', 'library',
  'thunder', 'cricket', 'waterfall'
];

export function useAudioPreload() {
  const preloadedSounds = useRef<Map<string, Howl>>(new Map());

  useEffect(() => {
    // 先加载优先级高的音效
    const loadPrioritySounds = async () => {
      for (const id of PRIORITY_SOUND_IDS) {
        const sound = sounds.find(s => s.id === id);
        if (sound && !preloadedSounds.current.has(id)) {
          const howl = new Howl({
            src: [sound.audioUrl],
            preload: true,
            html5: true,
            format: ['mp3']
          });
          preloadedSounds.current.set(id, howl);
          // 等待当前音效加载完成
          await new Promise(resolve => {
            howl.once('load', resolve);
          });
        }
      }

      // 优先音效加载完成后，开始加载次要音效
      SECONDARY_SOUND_IDS.forEach(id => {
        const sound = sounds.find(s => s.id === id);
        if (sound && !preloadedSounds.current.has(id)) {
          const howl = new Howl({
            src: [sound.audioUrl],
            preload: true,
            html5: true,
            format: ['mp3']
          });
          preloadedSounds.current.set(id, howl);
        }
      });
    };

    loadPrioritySounds();

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