/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Base Palette - T.H. Wearable Art */
        gallery: {
          50: '#F8F6F2',   /* Primary Gallery Canvas Background */
          100: '#F1ECE4',  /* Soft Surface Background */
          200: '#E5DFD5',  /* Border / Divider Line */
          800: '#1C1917',  /* Dark Accent */
          900: '#0B0B0B',  /* Deep Obsidian Text / CTA */
        },
        gold: {
          bronze: '#D38C37', /* Primary Brand Gold Accent */
          honey: '#E5B567',  /* Secondary Light Gold */
          light: '#F4D087',
        },
        brand: {
          dark: '#0B0B0B',
          muted: '#57534E',
          border: '#E7E5E4'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      fontSize: {
        'display': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.35' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'sub': ['0.75rem', { letterSpacing: '0.25em' }]
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em'
      },
      boxShadow: {
        'clean': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(11, 11, 11, 0.04)'
      }
    },
  },
  plugins: [],
}
