import { Outfit, Ovo, Inter } from "next/font/google";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#0a0a0a", // Deep Void Black
        primary: "#000000",   // Black text for light mode default
        secondary: "#a1a1aa", // Gray text
        accent: "#7c3aed",    // Violet accent
        "gray-bg": "#f5f5f7",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        glow: "0 0 20px rgba(124, 58, 237, 0.5)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px , 1fr))",
      },
    },
  },
  darkMode: "class", // Changed to 'class' for manual control if needed, or keep 'selector' if using that strategy. 'selector' is fine for Next.js themes usually.
  plugins: [],
};

export default tailwindConfig;
