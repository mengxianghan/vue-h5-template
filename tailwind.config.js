/** @type {import('tailwindcss').Config} */

import { addIconSelectors } from '@iconify/tailwind'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      fontSize: {
        '2xs': 'var(--text-2xs)',
      },
      textColor: {
        body: 'var(--text-color-body)',
      },
      background: {
        body: 'var(--background-color-body)',
      },
      borderColor: {
        divider: 'var(--border-color-divider)',
      },
    },
  },
  plugins: [
    addIconSelectors(['tdesign']),
  ],
}
