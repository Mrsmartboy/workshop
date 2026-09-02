import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        academy: {
          blue: "#304ffe",
          "blue-hover": "#253bdf",
          "blue-dark": "#1d2fc2",
          "blue-light": "#eef1ff",
          navy: "#0d1033",
          body: "#606482",
          muted: "#888c9f",
          border: "#e7e9f3",
          card: "#ffffff",
          surface: "#f8f9fc",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 16, 51, 0.06)",
        card: "0 15px 35px rgba(22, 28, 77, 0.08)",
        "card-hover": "0 22px 45px rgba(22, 28, 77, 0.13)",
        photo: "0 24px 50px rgba(13, 16, 51, 0.12)",
        glow: "0 12px 28px rgba(48, 79, 254, 0.28)",
      },
      borderRadius: {
        "2xl": "18px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
