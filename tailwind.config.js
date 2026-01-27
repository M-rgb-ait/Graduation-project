/** @type {import('tailwindcss').Config} */

// const tailwindanimate = require("tailwindcss-animate");
// const scrollbarHide = require("tailwind-scrollbar-hide");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "occasion-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        "occasion-pattern-active":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(166, 37, 42, 0.25))",
        "occasion-pattern-active-dark":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(255, 163, 185, 0.25))",
      },
      fontFamily: {
        seaweed: ["var(--font-seaweed)"],
        edwardian: ["var(--font-edwardian)"],
        diwany: ["var(--font-diwany)"],
      },
      letterSpacing: {
        "extra-wide": "0.25em",
      },
      boxShadow: {
        "custom-red": "0 4px 50.5px 0 #741C211A ",
      },
      container: {
        center: true,
      },
      colors: {
        maroon: {
          50: "#fbeaea",
          100: "#f3c5c7",
          200: "#ea9fa2",
          300: "#e07a7d",
          400: "#d75458",
          500: "#cd2e33",
          600: "#a6252a",
          700: "#741c21",
          800: "#501419",
          900: "#2c0c10",
          950: "#20090c",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#B91C1C",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        pink: {
          50: "#fff0f8",
          100: "#ffd6ec",
          200: "#ffaddc",
          300: "#ff84cb",
          400: "#ff5bba",
          500: "#f82ba9",
          600: "#d0198f",
          700: "#a41173",
          800: "#790a55",
          900: "#52043a",
          950: "#340021",
        },
        softpink: {
          50: "#fff1f5",
          100: "#ffe0e7",
          200: "#ffc2d0",
          300: "#ffa3b9",
          400: "#ff85a2",
          500: "#ff668b",
          600: "#e65073",
          700: "#cc3a5b",
          800: "#b32443",
          900: "#99102c",
          950: "#590414",
        },
        blue: {
          50: "#eff6ff",
          100: "#DBEAFE",
          200: "#BEDBFF",
          300: "#8ec5ff",
          400: "#50A2FF",
          500: "#2B7FFF",
          600: "#155dfc",
          700: "#1447E6",
          800: "#193cb8",
          900: "#1c398e",
          950: "#162456",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a4f4cf",
          300: "#5ee9b5",
          400: "#00d492",
          500: "#00bc7d",
          600: "#009966",
          700: "#007a55",
          800: "#006045",
          900: "#004f3b",
          950: "#002c22",
        },
        gold: {
          100: "rgba(223, 172, 22, 0.25)",
          200: "rgba(223, 172, 22, 0.1)",
        },
        selver: {
          100: "rgba(117, 127, 149, 0.25)",
          200: "rgba(117, 127, 149, 0.1)",
        },
        bronze: {
          100: "rgba(145, 68, 0, 0.25)",
          200: "rgba(145, 68, 0, 0.1)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
  plugins: [tailwindanimate, scrollbarHide],
};
