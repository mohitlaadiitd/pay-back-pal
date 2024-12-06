/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "bg-grey": "#D3D9D4",
        "nav-base": "#124E66",
        "bg-grey-dark": "#2E3944",
        "website-dark": "#212A31",
        "base-body": "#748D92"
      }
    },
    fontFamily: {
      sans: ["Inter", "Lato", "Roboto", "sans-serif"],
    },  
  },
  plugins: [],
}

