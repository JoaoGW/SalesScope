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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "purple": "var(--main-purple)",
        "blued-purple": "var(--purple-blue)",
        "gray-blue": "var(--gray-blue)",
        "gray": "var(--gray)"
      },
    },
  },
  plugins: [],
};
export default config;
