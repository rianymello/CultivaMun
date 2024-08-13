/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "studio-darkmode-normalsolid-icons-96a2be": "#96a2be",
        gray: {
          "100": "rgba(255, 255, 255, 0.9)",
          "200": "rgba(255, 255, 255, 0)",
        },
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        mediumseagreen: "#27b660",
        mediumslateblue: {
          "100": "#2265ff",
          "200": "#145bff",
        },
        lightsteelblue: {
          "200": "#b5bccc",
          "400": "rgba(190, 194, 234, 0.05)",
        },
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        dimgray: "#495367",
        "studio-lightmode-lightseparator-ecf0f6": "#ecf0f6",
        seagreen: "rgba(14, 138, 64, 0.1)",
        whitesmoke: "#ebeef2",
        dodgerblue: "rgba(92, 142, 255, 0.1)",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        "studio-darkmode-maincta-457eff": "#457eff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "source-code-pro": "'Source Code Pro'",
        alegreya: "Alegreya",
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      sm: "14px",
      mid: "17px",
      "7xl": "26px",
      "5xl": "24px",
      "34xl": "53px",
      "29xl": "48px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1080: {
        raw: "screen and (max-width: 1080px)",
      },
      mq960: {
        raw: "screen and (max-width: 960px)",
      },
      md: {
        max: "768px",
      },
      mq680: {
        raw: "screen and (max-width: 680px)",
      },
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
