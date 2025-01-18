/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#fff",
        primary: "#888888",
        graySecondary: "#dcdce4"
      },
      fontFamily: {
        "inter-tight": ['"Inter tight"', "sans-serif"],
      },
      screens: {
        ls: "320px",
        xxs: "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        xlmd: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
