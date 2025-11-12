/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        // shadcn/ui colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        },
        
        // Complete Color Palette - CSS Variables Format
        neutral: {
          25: "hsl(var(--neutral-25))",
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))"
        },
        'neutral-cold': {
          25: "hsl(var(--neutral-cold-25))",
          50: "hsl(var(--neutral-cold-50))",
          100: "hsl(var(--neutral-cold-100))",
          200: "hsl(var(--neutral-cold-200))",
          300: "hsl(var(--neutral-cold-300))",
          400: "hsl(var(--neutral-cold-400))",
          500: "hsl(var(--neutral-cold-500))",
          600: "hsl(var(--neutral-cold-600))",
          700: "hsl(var(--neutral-cold-700))",
          800: "hsl(var(--neutral-cold-800))",
          900: "hsl(var(--neutral-cold-900))"
        },
        'neutral-navy': {
          25: "hsl(var(--neutral-navy-25))",
          50: "hsl(var(--neutral-navy-50))",
          100: "hsl(var(--neutral-navy-100))",
          200: "hsl(var(--neutral-navy-200))",
          300: "hsl(var(--neutral-navy-300))",
          400: "hsl(var(--neutral-navy-400))",
          500: "hsl(var(--neutral-navy-500))",
          600: "hsl(var(--neutral-navy-600))",
          700: "hsl(var(--neutral-navy-700))",
          800: "hsl(var(--neutral-navy-800))",
          900: "hsl(var(--neutral-navy-900))"
        },
        'neon-blue': {
          25: "hsl(var(--neon-blue-25))",
          50: "hsl(var(--neon-blue-50))",
          100: "hsl(var(--neon-blue-100))",
          200: "hsl(var(--neon-blue-200))",
          300: "hsl(var(--neon-blue-300))",
          400: "hsl(var(--neon-blue-400))",
          500: "hsl(var(--neon-blue-500))",
          600: "hsl(var(--neon-blue-600))",
          700: "hsl(var(--neon-blue-700))",
          800: "hsl(var(--neon-blue-800))",
          900: "hsl(var(--neon-blue-900))"
        },
        'sky-blue': {
          25: "hsl(var(--sky-blue-25))",
          50: "hsl(var(--sky-blue-50))",
          100: "hsl(var(--sky-blue-100))",
          200: "hsl(var(--sky-blue-200))",
          300: "hsl(var(--sky-blue-300))",
          400: "hsl(var(--sky-blue-400))",
          500: "hsl(var(--sky-blue-500))",
          600: "hsl(var(--sky-blue-600))",
          700: "hsl(var(--sky-blue-700))",
          800: "hsl(var(--sky-blue-800))",
          900: "hsl(var(--sky-blue-900))"
        },
        'autumn-green': {
          25: "hsl(var(--autumn-green-25))",
          50: "hsl(var(--autumn-green-50))",
          100: "hsl(var(--autumn-green-100))",
          200: "hsl(var(--autumn-green-200))",
          300: "hsl(var(--autumn-green-300))",
          400: "hsl(var(--autumn-green-400))",
          500: "hsl(var(--autumn-green-500))",
          600: "hsl(var(--autumn-green-600))",
          700: "hsl(var(--autumn-green-700))",
          800: "hsl(var(--autumn-green-800))",
          900: "hsl(var(--autumn-green-900))"
        },
        'shades-yellow': {
          25: "hsl(var(--shades-yellow-25))",
          50: "hsl(var(--shades-yellow-50))",
          100: "hsl(var(--shades-yellow-100))",
          200: "hsl(var(--shades-yellow-200))",
          300: "hsl(var(--shades-yellow-300))",
          400: "hsl(var(--shades-yellow-400))",
          500: "hsl(var(--shades-yellow-500))",
          600: "hsl(var(--shades-yellow-600))",
          700: "hsl(var(--shades-yellow-700))",
          800: "hsl(var(--shades-yellow-800))",
          900: "hsl(var(--shades-yellow-900))"
        },
        'peach-orange': {
          25: "hsl(var(--peach-orange-25))",
          50: "hsl(var(--peach-orange-50))",
          100: "hsl(var(--peach-orange-100))",
          200: "hsl(var(--peach-orange-200))",
          300: "hsl(var(--peach-orange-300))",
          400: "hsl(var(--peach-orange-400))",
          500: "hsl(var(--peach-orange-500))",
          600: "hsl(var(--peach-orange-600))",
          700: "hsl(var(--peach-orange-700))",
          800: "hsl(var(--peach-orange-800))",
          900: "hsl(var(--peach-orange-900))"
        },
        'cherry-red': {
          25: "hsl(var(--cherry-red-25))",
          50: "hsl(var(--cherry-red-50))",
          100: "hsl(var(--cherry-red-100))",
          200: "hsl(var(--cherry-red-200))",
          300: "hsl(var(--cherry-red-300))",
          400: "hsl(var(--cherry-red-400))",
          500: "hsl(var(--cherry-red-500))",
          600: "hsl(var(--cherry-red-600))",
          700: "hsl(var(--cherry-red-700))",
          800: "hsl(var(--cherry-red-800))",
          900: "hsl(var(--cherry-red-900))"
        },
        error: {
          25: "hsl(var(--error-25))",
          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          200: "hsl(var(--error-200))",
          300: "hsl(var(--error-300))",
          400: "hsl(var(--error-400))",
          500: "hsl(var(--error-500))",
          600: "hsl(var(--error-600))",
          700: "hsl(var(--error-700))",
          800: "hsl(var(--error-800))",
          900: "hsl(var(--error-900))"
        },
        success: {
          25: "hsl(var(--success-25))",
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          200: "hsl(var(--success-200))",
          300: "hsl(var(--success-300))",
          400: "hsl(var(--success-400))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          800: "hsl(var(--success-800))",
          900: "hsl(var(--success-900))"
        },
        // primary colors (alias)
        primary: {
          25: "hsl(var(--primary-25))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}