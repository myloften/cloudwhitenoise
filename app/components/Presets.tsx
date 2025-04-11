import { useState, useEffect } from 'react';

interface Preset {
  id: string;
  name: string;
  sounds: {
    id: string;
    volume: number;
  }[];
}

interface PresetsProps {
  isOpen: boolean;
  onClose: () => void;
  onPresetLoad: (preset: Preset) => void;
  activeSounds: { id: string; volume: number }[];
}

export default function Presets({ isOpen, onClose, onPresetLoad, activeSounds }: PresetsProps) {
  const [presets, setPresets] = useState<Preset[]>([]);
  const [newPresetName, setNewPresetName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const savedPresets = localStorage.getItem('soundPresets');
    if (savedPresets) {
      setPresets(JSON.parse(savedPresets));
    }
  }, []);

  const savePreset = () => {
    if (!newPresetName.trim()) return;

    const newPreset: Preset = {
      id: Date.now().toString(),
      name: newPresetName.trim(),
      sounds: activeSounds,
    };

    const updatedPresets = [...presets, newPreset];
    setPresets(updatedPresets);
    localStorage.setItem('soundPresets', JSON.stringify(updatedPresets));
    setNewPresetName('');
    setIsCreating(false);
  };

  const deletePreset = (presetId: string) => {
    const updatedPresets = presets.filter((preset) => preset.id !== presetId);
    setPresets(updatedPresets);
    localStorage.setItem('soundPresets', JSON.stringify(updatedPresets));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-dark-bg border-l border-white/10 p-6 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-mint">Presets</h2>
        <button onClick={onClose} className="text-white/70 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Create New Preset */}
      {!isCreating ? (
        <button
          className="header-button w-full mb-6"
          onClick={() => setIsCreating(true)}
        >
          Create New Preset
        </button>
      ) : (
        <div className="mb-6">
          <input
            type="text"
            value={newPresetName}
            onChange={(e) => setNewPresetName(e.target.value)}
            placeholder="Preset name"
            className="w-full p-2 mb-2 bg-white/5 border border-white/10 rounded text-white"
          />
          <div className="flex gap-2">
            <button
              className="header-button flex-1"
              onClick={savePreset}
            >
              Save
            </button>
            <button
              className="header-button flex-1"
              onClick={() => {
                setNewPresetName('');
                setIsCreating(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Preset List */}
      <div className="space-y-2">
        {presets.map((preset) => (
          <div
            key={preset.id}
            className="flex items-center justify-between p-3 bg-white/5 rounded hover:bg-white/10"
          >
            <button
              className="flex-1 text-left text-white/90 hover:text-mint"
              onClick={() => onPresetLoad(preset)}
            >
              {preset.name}
            </button>
            <button
              className="text-white/50 hover:text-red-400"
              onClick={() => deletePreset(preset.id)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 