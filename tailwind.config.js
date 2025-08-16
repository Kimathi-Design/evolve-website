/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#4fa58c",
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5fe9cc",
          400: "#2dd4b0",
          500: "#4fa58c",
          600: "#0d9979",
          700: "#0f7a63",
          800: "#115e4f",
          900: "#134e42",
          950: "#042f26",
        },
        secondary: {
          DEFAULT: "#000000",
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#5a5a5a",
          900: "#4e4e4e",
          950: "#000000",
        },
        accent: {
          DEFAULT: "#ff6b35",
          50: "#fff4f1",
          100: "#ffe6de",
          200: "#fed2c2",
          300: "#fcb199",
          400: "#f9926f",
          500: "#ff6b35",
          600: "#ed4f1a",
          700: "#c53d10",
          800: "#9c3414",
          900: "#7e2f15",
          950: "#441508",
        },
      },
      fontFamily: {
        sans: ["Mooli", "var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        mooli: ["Mooli", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(79, 165, 140, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(79, 165, 140, 0.6)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            maxWidth: "none",
            h1: {
              color: "var(--foreground)",
            },
            h2: {
              color: "var(--foreground)",
            },
            h3: {
              color: "var(--foreground)",
            },
            strong: {
              color: "var(--foreground)",
            },
            a: {
              color: "#4fa58c",
              "&:hover": {
                color: "#2dd4b0",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};