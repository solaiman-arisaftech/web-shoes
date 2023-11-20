import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-bg': "url('../../public/resources/bg1.png')",
          'login-bg': "url('../../public/resources/bg2.png')"
      },
      backgroundColor:{
        NeonPink:"#C72092",
        purple:"#6c14d0",
        goldlight:"#f3f1f1"

      },
      colors:{
        NeonPink:"#C72092",
        purple:"#6c14d0",
        goldlight:"#f3f1f1"
      },
      borderWidth:{
        "1":"1px",
      },
      blur:{
        1:"1px",
        "half":"0.5px"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
