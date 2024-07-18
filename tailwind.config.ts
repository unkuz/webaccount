import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        clippath: {
          '0%, 100%': { clipPath: 'inset(0 0 98% 0)' },
          '25%': { clipPath: 'inset(0 98% 0 0)' },
          '50%': { clipPath: 'inset(98% 0 0 0)' },
          '75%': { clipPath: 'inset(0 0 0 98%)' },
        },
      },
      animation: {
        clippath: 'clippath 3s linear infinite',
        'clippath-delay': 'clippath 3s linear 1.5s infinite',
      },
    },
  },
  plugins: [],
}
export default config
