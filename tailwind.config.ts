import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'spotify-gray': '#121212',
        'spotify-inactive-link-gray': '#B3B3B3',
        'spotify-card-dark-gray': '#242424',
        'spotify-black': '#0f0f0f',
        'spotify-black5': '#181818',
        'spotify-chevron-black': '#090909',
        'spotify-gray2': '#9f9f9f',
        'mid-gray': '#A7A7A7',
        'gradient-gray': '#222222',
      },
    },
  },
  plugins: [],
}
export default config
