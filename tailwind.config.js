/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          darkslategray: {
            "100": "#3d4461",
            "200": "#363e62",
            "300": "#383e56",
            "400": "#2c3454",
            "500": "#33363f",
            "600": "rgba(61, 68, 97, 0.75)",
            "700": "rgba(61, 68, 97, 0.89)",
          },
          black: "#000",
          gray: {
            "100": "rgba(118, 118, 118, 0.81)",
            "200": "rgba(0, 0, 0, 0.46)",
            "300": "rgba(0, 0, 0, 0.66)",
            "400": "rgba(0, 0, 0, 0.36)",
            "500": "rgba(0, 0, 0, 0.62)",
            "600": "rgba(0, 0, 0, 0.53)",
          },
          tomato: "#ff5851",
          dodgerblue: {
            "100": "#5398ff",
            "200": "#3b80e6",
          },
        },
        spacing: {},
        fontFamily: {
          poppins: "Poppins",
          inherit: "inherit",
        },
        borderRadius: {
          "10xs": "3px",
          "8xs": "5px",
          "14xl": "33px",
        },
      },
      fontSize: {
        lg: "18px",
        sm: "14px",
        xs: "12px",
        "4xs": "9px",
        "2xs": "11px",
        "13xl": "32px",
        "3xl": "22px",
        inherit: "inherit",
      },
      screens: {
        mq430: {
          raw: "screen and (max-width: 430px)",
        },
        mq421: {
          raw: "screen and (max-width: 421px)",
        },
        mq409: {
          raw: "screen and (max-width: 409px)",
        },
        mq397: {
          raw: "screen and (max-width: 397px)",
        },
        mq390: {
          raw: "screen and (max-width: 390px)",
        },
        mq389: {
          raw: "screen and (max-width: 389px)",
        },
        mq386: {
          raw: "screen and (max-width: 386px)",
        },
        mq385: {
          raw: "screen and (max-width: 385px)",
        },
        mq376: {
          raw: "screen and (max-width: 376px)",
        },
        mq341: {
          raw: "screen and (max-width: 341px)",
        },
        mq312: {
          raw: "screen and (max-width: 312px)",
        },
        mq258: {
          raw: "screen and (max-width: 258px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  