import { addIconSelectors } from '@iconify/tailwind'
/** @type {import('tailwindcss').Config} */
import { createPreset } from 'tailwindcss-rem2px-preset'

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        secondary: '#f00',
      },
      fontSize: {
        '2xs': '10px',
      },
    },
  },
  plugins: [
    addIconSelectors(['tdesign', 'tabler']),
  ],
  corePlugins: {
    preflight: true,
  },
  presets: [
    // 将 tailwind 中的 rem 转换成 px，再有 postcss 统一进行转换
    createPreset({
      fontSize: 16,
      unit: 'px',
    }),
  ],
}
