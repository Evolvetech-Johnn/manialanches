import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "amarelo-marca": "#FFD100",
        bordô: "#7A0019",
        "vermelho-principal": "#C1121F",
        "vermelho-escuro": "#8B0000",
        "preto-premium": "#111111",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        "20": "20px",
        "24": "24px",
      },
    },
  },
  plugins: [],
};
export default config;
