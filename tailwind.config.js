/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                josefin: ['Josefin Sans', 'sans-serif'],
            },
            backgroundImage: {
                'bloom': "url('/images/bloom-tratada-resize.png')",
            }
        },
    },
    plugins: [],
};
