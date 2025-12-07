import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#00AEEF",
          orange: "#F7931E",
        },
        dark: {
          bg: "#0A0A0F",
          card: "#12121A",
          border: "rgba(255, 255, 255, 0.08)",
        },
        light: {
          bg: "#ffffff",
          card: "#f8fafc",
          border: "rgba(0, 0, 0, 0.08)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #00AEEF 0%, #F7931E 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #F7931E 0%, #00AEEF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 174, 239, 0.3)',
        'glow-orange': '0 0 20px rgba(247, 147, 30, 0.3)',
        'glow-gradient': '0 0 30px rgba(0, 174, 239, 0.2), 0 0 60px rgba(247, 147, 30, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
