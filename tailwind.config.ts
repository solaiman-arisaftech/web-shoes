import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-bg': "url('../../public/resources/bg1.png')"
      },
      backgroundColor:{
        NeonPink:"#C72092",
        purple:"#6c14d0"

      },
      colors:{
        NeonPink:"#C72092",
        purple:"#6c14d0"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
