import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
// https://github.com/tailwindlabs/tailwindcss-container-queries
import containerQueries from '@tailwindcss/container-queries'

const config: Config = {
  darkMode: 'class',
  content: [
    './frontend/app/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/components/**/*.{js,ts,jsx,tsx,mdx}',
    './frontend/components/ui/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        day: '#f2f2f2', // 'white' bg
        night: '#1e1e1e', // 'black' bg
        midnight: '#111111', // 'black' bg
        batman: '#2c2c2c',
        outline: {
          day: '#f2f2f2',
          night: '#484848',
        },
        orange: '#c97f59',
        aqua: '#55c2f9',
        // input: {
        //   dark: '#484848',
        // },
        primary: '#7656e8',
        'custom-blue': 'rgba(0,187,255,0.5)',
        input: 'var(--input)',
        // primary: {
        //   DEFAULT: "var(--primary)",
        //   foreground: "var(--primary-foreground)",
        // },
        border: 'var(--border)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        pulse: 'pulse 4s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(0.3)', opacity: '0.6' },
        },
      },
    },
  },
  plugins: [animate, containerQueries],
}
export default config
