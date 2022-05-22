module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#F7D716',
          secondary: '#EC9B3B',
          accent: '#293462',
          neutral: '#ffffff',
          'base-100': '#ffffff',
          info: '#F73D93',
          success: '#1BBB70',
          warning: '#F59E0B',
          error: '#FB7185',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
