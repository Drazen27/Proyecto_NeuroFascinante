import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        'sky-blue': '#88CDD3',
        'light-orange': '#F39325',
        'light-green': '#95C11F',
        'dark-purple': '#81549D',
        'pink-panter': '#EA5297',
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeLeft: 'fadeInLeft .5s ease-in-out',
        fadeRight: 'fadeInRight .5s ease-in-out',
        fadeTop: 'fadeInTop .5s ease-in-out',
        fadeBottom: 'fadeInBottom .5s ease-in-out',
        fadeOut: 'fadeOut .5s ease-in-out', // Nueva animación fadeOut
        fadeOutLeft: 'fadeOutLeft .5s ease-in-out', // Nueva animación fadeOutLeft
        fadeOutRight: 'fadeOutRight .5s ease-in-out', // Nueva animación fadeOutRight
        fadeOutTop: 'fadeOutTop .5s ease-in-out', // Nueva animación fadeOutTop
        fadeOutBottom: 'fadeOutBottom .5s ease-in-out', // Nueva animación fadeOutBottom
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInTop: {
          from: { opacity: '0', transform: 'translateY(-100px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBottom: {
          from: { opacity: '0', transform: 'translateY(100px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: { // Nuevos keyframes para la animación fadeOut
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        fadeOutLeft: { // Nuevos keyframes para la animación fadeOutLeft
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-100px)' },
        },
        fadeOutRight: { // Nuevos keyframes para la animación fadeOutRight
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(100px)' },
        },
        fadeOutTop: { // Nuevos keyframes para la animación fadeOutTop
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-100px)' },
        },
        fadeOutBottom: { // Nuevos keyframes para la animación fadeOutBottom
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(100px)' },
        },
      },
      screens: {

        'nv':'953px',

        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',

      }
    },
  },
  plugins: [],
};
export default config;
