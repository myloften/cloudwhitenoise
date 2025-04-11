"use client";

import { useEffect, useRef } from 'react';
import { Sound } from '@/app/data/sounds';

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(sound.audioUrl);
      audioRef.current.loop = true;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [sound.audioUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
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
    </div>
  );
} 