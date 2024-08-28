/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#5A5959",
      yello: "#FFEAAE",
      orange: "#F6820C",
      white: "white",
      balck: "black",
      tomato: "tomato",
      transparent: "transparent",
      "dark-yello": "#FCCA3F",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [
    {
      plugins: ["prettier-plugin-tailwindcss"],
    },
  ],
};
