/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // yellowTag: {
        //   DEFAULT: 'hsl(var(--yellowTag))',
        //   dark: 'hsl(var(--yellow-dark))',
        //   light: 'hsl(var(--yellow-light))',
        // },
        greenTag: {
          DEFAULT: 'hsl(var(--greenTag))',
          dark: 'hsl(var(--greenTag-dark))',
          light: 'hsl(var(--greenTag-light))',
        },
        yellowTag: {
          DEFAULT: 'hsl(var(--yellowTag))',
          dark: 'hsl(var(--yellowTag-dark))',
          light: 'hsl(var(--yellowTag-light))',
        },
        orangeTag: {
          DEFAULT: 'hsl(var(--orangeTag))',
          dark: 'hsl(var(--orangeTag-dark))',
          light: 'hsl(var(--orangeTag-light))',
        },
        redTag: {
          DEFAULT: 'hsl(var(--redTag))',
          dark: 'hsl(var(--redTag-dark))',
          light: 'hsl(var(--redTag-light))',
        },
        violetTag: {
          DEFAULT: 'hsl(var(--violetTag))',
          dark: 'hsl(var(--violetTag-dark))',
          light: 'hsl(var(--violetTag-light))',
        },
        blueTag: {
          DEFAULT: 'hsl(var(--blueTag))',
          dark: 'hsl(var(--blueTag-dark))',
          light: 'hsl(var(--blueTag-light))',
        },
        oceanicTag: {
          DEFAULT: 'hsl(var(--oceanicTag))',
          dark: 'hsl(var(--oceanicTag-dark))',
          light: 'hsl(var(--oceanicTag-light))',
        },
        limeTag: {
          DEFAULT: 'hsl(var(--limeTag))',
          dark: 'hsl(var(--limeTag-dark))',
          light: 'hsl(var(--limeTag-light))',
        },
        pinkTag: {
          DEFAULT: 'hsl(var(--pinkTag))',
          dark: 'hsl(var(--pinkTag-dark))',
          light: 'hsl(var(--pinkTag-light))',
        },
        grayTag: {
          DEFAULT: 'hsl(var(--grayTag))',
          dark: 'hsl(var(--grayTag-dark))',
          light: 'hsl(var(--grayTag-light))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      // fontFamily: {
      //   sans: ['var(--font-sans)', ...DefaultTheme.fontFamily.sans],
      // },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
