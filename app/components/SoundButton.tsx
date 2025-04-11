"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { Sound } from '../data/sounds';

interface SoundButtonProps {
  sound: Sound;
  isPlaying: boolean;
  onToggle: () => void;
  volume: number;
  onVolumeChange: (value: number) => void;
}

const SoundButton: React.FC<SoundButtonProps> = ({
  sound,
  isPlaying,
  onToggle,
  volume,
  onVolumeChange,
}) => {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const soundHowl = new Howl({
      src: [sound.audioUrl],
      loop: true,
      volume: volume,
      onload: () => setIsLoading(false),
      onloaderror: () => setError(true),
    });

    setHowl(soundHowl);
    soundRef.current = soundHowl;

    return () => {
      soundHowl.unload();
    };
  }, [sound.audioUrl]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, [volume, soundRef]);

  useEffect(() => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [isPlaying, soundRef]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
    if (soundRef.current) {
      soundRef.current.volume(newVolume);
    }
  };

  return (
    <div className={`sound-icon ${isPlaying ? 'active' : ''} ${error ? 'error' : ''}`} onClick={onToggle}>
      <div className="icon-container">
        {sound.icon}
      </div>
      <span className="sound-name">{sound.name}</span>
      <button
        disabled={isLoading || error}
        className="absolute inset-0 w-full h-full"
        aria-label={`Play ${sound.name}`}
      />
      {isPlaying && (
        <div className="volume-slider" onClick={(e) => e.stopPropagation()}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-control"
          />
        </div>
      )}
    </div>
  );
};

export default SoundButton; 