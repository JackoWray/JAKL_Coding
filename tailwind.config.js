module.exports = {
  content: [
    './views/**/*.handlebars',
    './views/*.handlebars',
    './public/js/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
