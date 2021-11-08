module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors:{
                "strong-purple": "#8b3cfa",
                "base-purple":"#f2e8ff",
                "buttom-pink":"#f974ca",
                "base-white":"#ffffff",
                "yellow-star":"#f0bb40"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
