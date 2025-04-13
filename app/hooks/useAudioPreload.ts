import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { sounds } from '../data/sounds';

// 最常用的音效ID列表
const PRELOAD_SOUND_IDS = ['ocean', 'rain', 'birds', 'forest', 'whitenoise'];

export function useAudioPreload() {
  const preloadedSounds = useRef<Map<string, Howl>>(new Map());

  useEffect(() => {
    // 预加载常用音效
    PRELOAD_SOUND_IDS.forEach(id => {
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

  // 动态预加载场景相关的音效
  const preloadSceneSounds = (soundIds: string[]) => {
    soundIds.forEach(id => {
      if (!preloadedSounds.current.has(id)) {
        const sound = sounds.find(s => s.id === id);
        if (sound) {
          const howl = new Howl({
            src: [sound.audioUrl],
            preload: true,
            html5: true,
            format: ['mp3']
          });
          preloadedSounds.current.set(id, howl);
        }
      }
    });
  };

  return {
    getPreloadedSound,
    preloadSceneSounds
  };
} 