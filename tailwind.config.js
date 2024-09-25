const plugin = require("tailwindcss/plugin")

const svgToDataUri = require("mini-svg-data-uri")
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    /* šis nav vajadzīgs vai jāņem ārā, jo to zemāk atslēdz 
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      9: "9",
      16: "16",
    },
    */
    screens: {
      mobile: { max: "768px" },
      portrait: { raw: "(orientation: portrait)" },
      landscape: { raw: "(orientation: landscape)" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      maxWidth: {
        medium: "632px",
        110: "110px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        '8xl': '96rem',
      },
      minWidth: {
        320: "300px",
      },
      fontSize: {
        xxs: ["0.6rem", "0.6rem"],
        "size-1": ["12px", "16px"],
        "size-2": ["14px", "20px"],
        "size-3": ["16px", "24px"],
        "size-4": ["18px", "24px"],
        "size-5": ["22px", "28px"],
        "size-6": ["26px", "36px"],
        "size-7": ["32px", "40px"],
        "size-8": ["40px", "50px"],
        "size-9": ["40px", "52px"],
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "32px",
        8: "40px",
        9: "48px",
        10: "64px",
        11: "72px",
        12: "96px",
        13: "128px",
        14: "144px",
        15: "160px",
        16: "216px",
      },
      colors: {
        black: "#000000",
        dark: "#141414",
        blue: {
          DEFAULT: "#28A7FC",
          50: "#FFFFFF",
          100: "#F1F9FF",
          200: "#BFE5FE",
          300: "#8DD0FD",
          400: "#5ABCFD",
          500: "#28A7FC",
          600: "#0390EE",
          700: "#0371BB",
          800: "#025389",
          900: "#013457",
        },
        currentColor: "currentColor",
        brand: "#28a7fc",
        "brand-lighter": "#BAE3FF",
        "brand-lightest": "#E9F6FF",
        warning: "#B07A29",
        "warning-lighter": "#FFE9B7",
        "warning-lightest": "#FFFAED",
        danger: "#E23C39",
        "danger-lighter": "#FFB8B7",
        "danger-lightest": "#FFE9E9",
        success: "#32B791",
        "success-lighter": "#8FE4CA",
        "success-lightest": "#E1F3D3",
        "neutral-0": "#FFFFFF",
        "neutral-1": "#EEF2F4",
        "neutral-2": "#DAE4EA",
        "neutral-3": "#B5BFC6",
        "neutral-4": "#6F7D87",
        "neutral-5": "#28263F",
        "neutral-6": "#373552",
        'primary': '#0077E4',
        'primary-darker': '#0062bc',
        'secondary': '#28263F',
      },
      backgroundImage: (theme) => ({
        "multiselect-caret": `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`
        )}")`,

        "multiselect-spinner": `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="${theme(
            "colors.green.500"
          )}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`
        )}")`,

        "multiselect-remove": `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`
        )}")`,

        "gradient-45deg": 'linear-gradient(45deg, #ff7e5f, #feb47b)',  // You can replace these colors with your theme colors if needed.
      }),
    }
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
    extend: {
      backgroundColor: ["group-focus"],
      textColor: ["group-focus"],
    },
  },
  corePlugins: {
    // aspectRatio: false, // šis ir kaitīgs, jo izslēdz aspectRatio un mans dizains vairāk nestrādā
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("iframe", [
        ":merge(body.iframe) &",
        // ":merge(html.iframe) &"
      ])
      addVariant("browser", [
        ":merge(body.browser) &",
        // ":merge(html.browser) &"
      ])
    }),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
