"use client";

import { useState, useEffect } from 'react';
import { icons } from '@/app/data/icons';
import { Sound } from '@/app/data/sounds';
import { IconType } from 'react-icons';
import VolumeSlider from './VolumeSlider';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Icon = sound.icon;
  const icon = icons[sound.id as keyof typeof icons];
  if (!icon) return null;

  return (
    <div
      className={`
        relative w-24 h-24 cursor-pointer transition-all duration-300
        ${isPlaying ? 'scale-110' : 'scale-100'}
        ${isHovered ? 'opacity-100' : 'opacity-80'}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-300
          ${isPlaying ? 'bg-[#1aaba8]/20' : 'bg-transparent'}
          ${isHovered ? 'scale-110' : 'scale-100'}
        `}
      />
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${isMounted ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300
        `}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      {isPlaying && (
        <div className="absolute inset-0 animate-ping rounded-full bg-[#1aaba8]/20" />
      )}
      <div className={`
        absolute -bottom-6 left-1/2 transform -translate-x-1/2
        text-sm text-gray-300 whitespace-nowrap
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-300
      `}>
        {sound.name}
      </div>
      {isPlaying && (
        <div className="volume-slider">
          <VolumeSlider value={volume} onChange={onVolumeChange} />
        </div>
      )}
    </div>
  );
} 