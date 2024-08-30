import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
       './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(120deg, #f1a140, #c94c5a)"
      },
      borderRadius: {
        'custom': '5px'
      },
      spacing: {
        '1.5': '6px'
      },
      fontFamily: {
        custom: ['aTitleGothic', '"Malgun Gothic"', 'sans-serif'],
      },
      fontSize: {
        'xs-custom': '13px', // Custom font size for 13px
      },
    },
  },
  plugins: [],
};

export default config;
