/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
          xxl: "1170px",
        },
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        success: "#00ff00",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
