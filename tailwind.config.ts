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
        "verde-marmita": "#2E7D32",
        "verde-escuro": "#1B5E20",
        "laranja-acento": "#FF7043",
        "preto-premium": "#111111",
        "bege-fundo": "#F5F5F0",
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
