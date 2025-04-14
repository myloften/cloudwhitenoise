// Google Analytics 配置
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// 初始化 Google Analytics
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// 事件跟踪
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// 音频事件跟踪
export const trackAudioEvent = (soundId: string, action: 'play' | 'stop' | 'volume_change') => {
  event({
    action,
    category: 'Audio',
    label: soundId,
  });
};

// 场景预设事件跟踪
export const trackPresetEvent = (presetName: string) => {
  event({
    action: 'apply_preset',
    category: 'Preset',
    label: presetName,
  });
};

// 定时器事件跟踪
export const trackTimerEvent = (minutes: number) => {
  event({
    action: 'set_timer',
    category: 'Timer',
    label: `${minutes} minutes`,
    value: minutes,
  });
}; 