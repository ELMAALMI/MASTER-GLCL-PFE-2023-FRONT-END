const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Roboto', 'sans-serif']
        },
        colors: {
            slate: {
                DEFAULT: '#111827',
                50: '#659FEA',
                100: '#5393E8',
                200: '#2F7DE3',
                300: '#1C69CE',
                400: '#1756AA',
                500: '#124486',
                600: '#0B2B55',
                700: '#051223',
                800: '#000000',
                900: '#000000'
            }
        }
    },
    plugins: []
});
