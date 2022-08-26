const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'pal-gray' : '#333533',
                'pal-gray-light' : '#D6D6D6',
                'pal-gray-dark' : '#202020',
                'pal-yellow' : '#FFD100',
                'pal-yellow-light' : '#FFEE32'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
