import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        volkhov: ["vokhov", "sans-serif"],
      },
      colors: {
        header: "#212832",
        orange: "#DF6951",
        btnYellow: "#F1A501",
        category: "#5E6282",
        pinky: "#DFD7F9",
      },
      boxShadow: {
        card: " 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
        button:
          "0px 18.047758102416992px 31.583576202392578px 0px rgba(241, 165, 1, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
