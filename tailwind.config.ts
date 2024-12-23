import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#1c1c1c",
        accent: "#d99100",
        "black-2": "#040F0F",
        primary: "#323d97",
        secondary: "#2D3797",
        stroke: "#E2E8F0",
        graydark: "#333A48",
        greenD: "#00AB11",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "gray-1": "#d1d5db",
        "gray-4": "#4b5563",
        "dark-4": "#2d2d2d",
        "dark-5": "#1a1a1a",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
     fontFamily:{
      tav:["var(--font-tav)"],
      ep:["var(--font-ep)"],
      mul:["var(--font-mul)"],
     }
    },
  },
  plugins: [],
} satisfies Config;
