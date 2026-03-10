import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#e87bc3',
          deep: '#c955a8',
          pale: '#f7d4ee',
          ultra: '#fdf0f9',
        },
        brand: {
          black: '#111111',
          charcoal: '#1E1E1E',
          'grey-mid': '#5A5A5A',
          'grey-light': '#ABABAB',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        abril: ['"Abril Fatface"', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
