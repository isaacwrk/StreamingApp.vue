module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily:{
                sans:['Roboto']
            },

            colors:{
                "strong-purple": "#8b3cfa",
                "base-purple":"#f2e8ff",
                "buttom-pink":"#f974ca",
                "base-white":"#ffffff",
                "yellow-star":"#f0bb40",
                "font-black":"#32404a",
                "bottom-purple":"#e7d6ff",
                "text-purple":"#cfaeff",
                "sub-gray":"#a2a2b4"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
