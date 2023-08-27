/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      "chat-background": "url('/chat-bg.jpg')",
    },
    
    colors: {
      "input-background": " #2a3942",
      "conversation-border": "rgba(134,150,160,0.15)",
      "panel-header-background": "#202c33",
      "icon-green": "#00a884",
      "search-input-container-background": "#111b21",
      "primary-strong": "#e9edef",
      "secondary-strong": "#8696a0",
      "border-strong": "rgba(134,150,160,0.15)",
      // "incoming-svg": "#262d31"
    },
    gridTemplateColumns: {
      main: "1fr 2.4fr",
    },
    // tail:{
    //     transform: scaleX(-1)
    // }
  },
};
export const plugins = [];
