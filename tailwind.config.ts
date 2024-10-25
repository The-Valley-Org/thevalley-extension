import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7F9",
        foreground: "var(--foreground)",
        darkGreen: "#185345",
        lightGreen: "#227A5F",
        lighterGreen: "#EBEEF3"
      },
    },
  },
  plugins: [],
};
export default config;
