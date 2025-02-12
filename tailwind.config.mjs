/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "timco-red": {
          DEFAULT: "var(--timco-red)",
        },
        "timco-blue": {
          DEFAULT: "var(--timco-blue)",
        },
        "timco-dark-blue": {
          DEFAULT: "var(--timco-dark-blue)",
        },
        "timco-slate": {
          DEFAULT: "var(--timco-slate)",
        },
        "timco-orange": {
          DEFAULT: "var(--timco-orange)",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};
