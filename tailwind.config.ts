import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#7FCCAF',
        'dark-bg': '#1E2124',
        'city-red': '#FF4B4B',
      },
    },
  },
  plugins: [],
};

export default config; 