import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#126aff',
        desc: "#c84040",
        remind: "#363030",
        info: "#252737",
        option: "#391D6C",
      },

      backgroundImage: {
        'desc-bg-btn': 'linear-gradient(to bottom, #FF9398, #E2EA46)', 
        'remind-bg-btn': 'linear-gradient(to bottom, #9ADF59, #3CCABA)', 
        'info-bg-btn': 'linear-gradient(to bottom, #6C79E5, #01EED2)', 
        'option-bg-btn': 'linear-gradient(to bottom, #688EFF, #C06EFF)', 
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
export default config;
