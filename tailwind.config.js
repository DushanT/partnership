/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: "var(--font-syncopate)",
      body: "var(--font-montserrat)",
    },
    fontSize: {
      // Convert sizes from pixels to rem (tailwind uses rem by default)
      h1: ["12.473rem", { lineHeight: "1", letterSpacing: "0.02em" }], // 199.57px
      h2: ["10.962rem", { lineHeight: "1", letterSpacing: "0.02em" }], // 175.39px
      h3: ["1.052rem", { lineHeight: "1", letterSpacing: "0.02em" }], // 16.83px
      h4: ["0.619rem", { lineHeight: "1", letterSpacing: "0.02em" }], // 9.91px
      h5: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }], // 12px
      link: ["0.625rem", { lineHeight: "1.2", letterSpacing: "0.02em" }], // 10px
      "link-lead": ["1.875rem", { lineHeight: "1", letterSpacing: "0.02em" }], // 30px
      p: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }], // 12px
      "p-wide": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.04em" }], // 12px
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
  },
  plugins: [],
};
