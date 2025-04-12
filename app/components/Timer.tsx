import { useState, useEffect } from 'react';

interface TimerProps {
  onTimerSet: (minutes: number) => void;
}

export default function Timer({ onTimerSet }: TimerProps) {
  const [time, setTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (time > 0) {
      setRemainingTime(time * 60); // Convert minutes to seconds
      timer = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setTime(0);
            onTimerSet(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setRemainingTime(0);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time, onTimerSet]);

  const handleSetTimer = (minutes: number) => {
    setTime(minutes);
    onTimerSet(minutes);
    setIsOpen(false);
  };

  const formatTime = (seconds: number) => {
    if (seconds === 0) return '';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Timer Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group bg-[var(--mint)]/10 backdrop-blur-sm hover:bg-[var(--mint)]/20 text-[var(--mint)] p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--mint)] focus:ring-opacity-50 border border-[var(--mint)]/20"
          title={remainingTime > 0 ? `${formatTime(remainingTime)} remaining` : "Set Timer"}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {remainingTime > 0 && (
              <div className="absolute -top-1 -right-1 bg-[var(--mint)] text-black text-xs font-medium px-2 py-0.5 rounded-full min-w-[20px] flex items-center justify-center">
                {formatTime(remainingTime)}
              </div>
            )}
          </div>
        </button>

        {/* Timer Menu */}
        {isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-48 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out">
            <div className="p-2 space-y-1">
              <button
                onClick={() => handleSetTimer(60)}
                className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>1 Hour</span>
              </button>
              
              <button
                onClick={() => handleSetTimer(30)}
                className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 rounded-xl transition-colors duration-200 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30 Minutes</span>
              </button>

              <button
                onClick={() => handleSetTimer(0)}
                className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors duration-200 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Stop</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 