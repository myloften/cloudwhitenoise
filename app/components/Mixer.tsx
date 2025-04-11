import React, { useState } from 'react';

interface Sound {
  id: string;
  name: string;
  volume: number;
}

const initialSounds: Sound[] = [
  { id: '1', name: '海浪', volume: 50 },
  { id: '2', name: '雨声', volume: 50 },
  { id: '3', name: '风声', volume: 50 },
];

const Mixer: React.FC = () => {
  const [sounds, setSounds] = useState<Sound[]>(initialSounds);

  const handleVolumeChange = (id: string, volume: number) => {
    setSounds((prevSounds) =>
      prevSounds.map((sound) =>
        sound.id === id ? { ...sound, volume } : sound
      )
    );
  };

  return (
    <div className="mixer">
      <h2 className="text-xl font-bold mb-4">声音混音器</h2>
      {sounds.map((sound) => (
        <div key={sound.id} className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            {sound.name}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={sound.volume}
            onChange={(e) => handleVolumeChange(sound.id, Number(e.target.value))}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Mixer; 