/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#41bc97', 
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#fe9a20',
        },
        red: {
          50: '#ad273f',
        },
        pink: {
          70: '#e77893',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'bg-img-1': "url('/salon_img_1.png')",
        'bg-img-2': "url('/salon_img_2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/retro_lines.png')",
        'pattern-2': "url('/retro_hair_bg.png')",
        'pattern-3': "url('/cd_wall.png')",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};