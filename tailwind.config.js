/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#3d4461",
          "200": "#33363f",
          "300": "#003459",
          "400": "rgba(61, 68, 97, 0.81)",
          "500": "rgba(61, 68, 97, 0.96)",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.63)",
          "200": "rgba(0, 0, 0, 0.53)",
          "300": "rgba(0, 0, 0, 0.56)",
          "400": "rgba(0, 0, 0, 0.84)",
        },
        white: "#fff",
        royalblue: {
          "100": "#2b80ff",
          "200": "rgba(43, 128, 255, 0.15)",
        },
        dodgerblue: {
          "100": "#5398ff",
          "200": "#4599ff",
          "300": "#3b80e6",
          "400": "rgba(83, 152, 255, 0.56)",
          "500": "rgba(83, 152, 255, 0.1)",
          "600": "rgba(83, 152, 255, 0.87)",
        },
        tomato: {
          "100": "#ff5851",
          "200": "#e63d38",
          "300": "rgba(255, 88, 81, 0.62)",
          "400": "rgba(255, 88, 81, 0.42)",
          "500": "rgba(230, 61, 56, 0.09)",
        },
        black: "#000",
        slategray: {
          "100": "#636b87",
          "200": "rgba(99, 107, 135, 0.09)",
        },
        papayawhip: "#fceed5",
        pink: "#ffc8c6",
        lightskyblue: {
          "100": "#9fc5ff",
          "200": "rgba(158, 197, 255, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
        inherit: "inherit",
      },
      borderRadius: {
        "4xs": "9px",
        "43xl": "62px",
        "78xl-2": "97.2px",
      },
    },
    fontSize: {
      base: "16px",
      "10xl": "29px",
      sm: "14px",
      lg: "18px",
      "3xl": "22px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      "7xl": "26px",
      "11xl": "30px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
