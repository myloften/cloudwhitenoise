"use client";

import { useState, useEffect } from 'react';
import { sounds, soundCategories } from './data/sounds';
import SoundIcon from './components/SoundIcon';
import Timer from './components/Timer';

// 预设场景配置
const scenePresets = {
  meditation: {
    sounds: ['stream', 'birds', 'bell'],
    volumes: { stream: 0.3, birds: 0.2, bell: 0.4 }
  },
  productivity: {
    sounds: ['cafe', 'rain', 'typing'],
    volumes: { cafe: 0.3, rain: 0.2, typing: 0.2 }
  },
  relax: {
    sounds: ['ocean', 'wind', 'birds'],
    volumes: { ocean: 0.4, wind: 0.2, birds: 0.2 }
  },
  sleep: {
    sounds: ['rain', 'night', 'whitenoise'],
    volumes: { rain: 0.3, night: 0.2, whitenoise: 0.1 }
  },
  focus: {
    sounds: ['whitenoise', 'rain', 'cafe'],
    volumes: { whitenoise: 0.2, rain: 0.2, cafe: 0.2 }
  },
  nature: {
    sounds: ['forest', 'birds', 'stream'],
    volumes: { forest: 0.3, birds: 0.2, stream: 0.2 }
  },
  peace: {
    sounds: ['bell', 'rain', 'night'],
    volumes: { bell: 0.3, rain: 0.2, night: 0.2 }
  }
};

export default function Home() {
  const [activeSounds, setActiveSounds] = useState<Record<string, boolean>>({});
  const [volumes, setVolumes] = useState<Record<string, number>>({});

  useEffect(() => {
    // 初始化音量
    const initialVolumes = sounds.reduce((acc, sound) => {
      acc[sound.id] = 0.5; // 默认音量 50%
      return acc;
    }, {} as Record<string, number>);
    setVolumes(initialVolumes);
  }, []);

  const toggleSound = (id: string) => {
    setActiveSounds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleVolumeChange = (id: string, volume: number) => {
    setVolumes(prev => ({
      ...prev,
      [id]: volume
    }));
  };

  const handleTimerSet = (minutes: number) => {
    if (minutes === 0) {
      // 立即停止所有声音
      setActiveSounds({});
    } else {
      // 设置定时器在指定时间后停止所有声音
      setTimeout(() => {
        setActiveSounds({});
      }, minutes * 60 * 1000);
    }
  };

  const applyPreset = (preset: string) => {
    const scene = scenePresets[preset as keyof typeof scenePresets];
    if (!scene) return;

    // 停止所有当前播放的声音
    setActiveSounds({});

    // 设置新的音量
    setVolumes(prev => ({
      ...prev,
      ...scene.volumes
    }));

    // 延迟一小段时间后开始播放新的组合
    setTimeout(() => {
      const newActiveSounds = scene.sounds.reduce((acc, soundId) => {
        acc[soundId] = true;
        return acc;
      }, {} as Record<string, boolean>);
      
      setActiveSounds(newActiveSounds);
    }, 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[var(--mint)] mb-4">
          Cloud White Noise
        </h1>
        <p className="text-xl text-black dark:text-white mb-8">
          Relax with soothing ambient sounds
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(scenePresets).map((tag) => (
            <button
              key={tag}
              onClick={() => applyPreset(tag)}
              className="px-4 py-2 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] rounded-full text-sm transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="opacity-60 group-hover:opacity-100">#{tag}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-6xl">
        {soundCategories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-medium text-[var(--mint)] mb-6">{category}</h2>
            <div className="sound-grid">
              {sounds
                .filter((sound) => sound.category === category)
                .map((sound) => (
                  <SoundIcon
                    key={sound.id}
                    sound={sound}
                    isPlaying={activeSounds[sound.id] || false}
                    volume={volumes[sound.id] || 0.5}
                    onVolumeChange={(volume) => handleVolumeChange(sound.id, volume)}
                    onClick={() => toggleSound(sound.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed right-8 bottom-8 z-50">
        <Timer onTimerSet={handleTimerSet} />
      </div>
    </main>
  );
}
