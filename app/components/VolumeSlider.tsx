'use client';

interface VolumeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function VolumeSlider({ value, onChange }: VolumeSliderProps) {
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-24 h-1 bg-[var(--mint)] rounded-lg appearance-none cursor-pointer"
    />
  );
} 