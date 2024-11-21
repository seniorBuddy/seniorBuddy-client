import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 'class' 모드로 다크 모드 활성화
  theme: {
    extend: {
      colors: {
        blue: '#126aff',
        sigred: "#c84040",
        sigyellow: "#363030",
        sigblue: "#252737",
        sigpurple: "#391D6C",
        darkblue: "#002D78",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },

      backgroundImage: {
        'grd-red': 'linear-gradient(to bottom, #FF9398, #E2EA46)', 
        'grd-pink': 'linear-gradient(to bottom, #D489FF, #FF3F78)', 
        'grd-yellow': 'linear-gradient(to bottom, #9ADF59, #3CCABA)', 
        'grd-blue': 'linear-gradient(to bottom, #6C79E5, #01EED2)', 
        'grd-purple': 'linear-gradient(to bottom, #688EFF, #C06EFF)', 
        'grd-bg': 'bg-gradient-to-r from-indigo-400 to-sky-600', 
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
export default config;
