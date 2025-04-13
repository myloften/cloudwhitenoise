"use client";

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Sound } from '@/app/data/sounds';
import { useAudioPreload } from '@/app/hooks/useAudioPreload';

export interface SoundIconProps {
  sound: Sound;
  isPlaying: boolean;
  volume: number;
  onVolumeChange: (volume: number) => void;
  onClick: () => void;
}

export default function SoundIcon({
  sound,
  isPlaying,
  volume,
  onVolumeChange,
  onClick,
}: SoundIconProps) {
  const { getPreloadedSound } = useAudioPreload();
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // 使用预加载的音频实例
    const preloadedSound = getPreloadedSound(sound.id);
    if (preloadedSound) {
      soundRef.current = preloadedSound;
    } else {
      // 如果没有预加载，创建新的实例
      soundRef.current = new Howl({
        src: [sound.audioUrl],
        loop: true,
        volume: volume,
        html5: true,
        preload: true,
        format: ['mp3']
      });
    }

    return () => {
      if (soundRef.current && !preloadedSound) {
        soundRef.current.unload();
        soundRef.current = null;
      }
    };
  }, [sound.audioUrl, getPreloadedSound]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.stop();
      }
    }
  }, [isPlaying]);

  return (
    <div 
      className={`sound-icon ${isPlaying ? 'active' : ''}`}
      onClick={onClick}
    >
      <div dangerouslySetInnerHTML={{ __html: sound.icon }} />
      <span className="sound-name">{sound.name}</span>
      {isPlaying && (
        <div className="volume-slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
} 