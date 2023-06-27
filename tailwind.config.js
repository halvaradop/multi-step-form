import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        base: '900px'
      },
      colors: {
        red: 'hsl(354, 84%, 57%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        gray: {
          DEFAULT: 'hsl(231, 11%, 63%)',
          100: 'hsl(229, 24%, 87%)'
        },
        blue: {
          DEFAULT: 'hsl(213, 96%, 18%)',
          100: 'hsl(243, 100%, 62%)',
          200: 'hsl(228, 100%, 84%)',
          300: 'hsl(206, 94%, 87%)'
        }
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('is-plan', '&.is-active'),
      addVariant('is-checked', '&:has(input:checked)'),
      addVariant('invalfo', '&:invalid:focus')
    })
  ],
}

