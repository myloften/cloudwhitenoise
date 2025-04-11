"use client";

import { useState, useEffect } from 'react';
import { sounds, soundCategories } from './data/sounds';
import SoundIcon from './components/SoundIcon';
import Timer from './components/Timer';

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

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[var(--mint)] mb-4">
          Create immersive soundscapes
        </h1>
        <p className="text-xl text-black dark:text-white mb-8">
          Mix ambient sounds to boost your productivity
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['meditation', 'productivity', 'relax', 'sleep', 'zen', 'refreshing', 'focus'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-full text-sm">
              #{tag}
            </span>
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
