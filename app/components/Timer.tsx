import { useState } from 'react';

interface TimerProps {
  onTimerSet: (minutes: number) => void;
}

export default function Timer({ onTimerSet }: TimerProps) {
  const [time, setTime] = useState<number>(0);

  const handleSetTimer = (minutes: number) => {
    setTime(minutes);
    onTimerSet(minutes);
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Timer</h2>
      <button onClick={() => handleSetTimer(60)} className="block mb-2">1 Hour</button>
      <button onClick={() => handleSetTimer(30)} className="block mb-2">30 Minutes</button>
      <button onClick={() => handleSetTimer(0)} className="block">Stop</button>
    </div>
  );
} 