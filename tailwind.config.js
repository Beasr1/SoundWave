/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        anime: "anime 2s ease-out infinite",
      },
      keyframes: {
        anime: {
          "50%, 75%": { transform: "scale(2.5)" },
          "80%, 100%": { opacity: "0" },
        },
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        //primary: "#1f0c27",//midnight
        primary: "#100015",
        //primary: `${var(--primary-color)}`,
        //secondary: `${var(--secondary-color)}`,
        //secondary: "cyan-700",
        secondary: "#0e7490",
        // headingColor: "#2e2e2e",
        // textColor: "#515151",
        // cartNumBg: "#e80013",
        // primary: "#f5f3f3",
        // cardOverlay: "rgba(256,256,256,0.4)",
        // darkOverlay: "rgba(0,0,0,0.5)",
        // lightOverlay: "rgba(256,256,256,0.2)",
        // lighttextGray: "#9ca0ab",
        // card: "rgba(256,256,256,0.8)",
        // cartBg: "#282a2c",
        // cartItem: "#2e3033",
        // cartTotal: "#343739",
        // loaderOverlay: "rgba(256,256,256,0.1)",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    // require("tailwind-scrollbar")
  ],
};
