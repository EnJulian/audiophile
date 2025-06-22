/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      
      colors: {
        dark: '#000000',
        'lighter-dark': '#101010',
        light: '#ffffff',
        'darker-light': '#fafafa',
        grey: '#f1f1f1',
        accent: '#D87D4A',
        'lighter-accent': '#FBAF85',
      },
      
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
      
      fontSize: {
        'h1-mobile': '2.25rem',  
        'h1-tablet': '3.5rem',   
        'h2-mobile': '1.75rem',  
        'h2-tablet': '2.5rem',   
        'h3-mobile': '1.75rem',  
        'h3-tablet': '2rem',     
        'h4': '1.75rem',         
        'body': '0.9375rem',     
        'overline': '0.875rem',  
        'subtitle': '0.8125rem', 
      },
      
      fontWeight: {
        reg: '400',
        bold: '500',
        bolder: '700',
      },
      
      screens: {
        'tablet': '380px',
        
        'desktop': '760px',
        
        'desktop-lg': '2770px', 
      },
      
      letterSpacing: {
        'wide-lg': '10px',
        'wide-md': '2px',
        'wide-sm': '1px',
      },
    },
  },
  plugins: [],
}

