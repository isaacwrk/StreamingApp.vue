module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily:{
                sans:['Roboto']
            },
            width:{
                '28.5':'7.5rem'
            },
            height:{
                '19':'4.5rem',
                '9.5':'9.5rem',
                '17':'4.5rem',
                '20.5':'5.25rem'
            },
            margin:{
                '5.5':'1.3rem'
            },
            borderRadius:{
                '4xl':'2.3rem'
            },
            colors:{
                "dark-purple":"#823BE9",
                "strong-purple": "#8E3EFF",
                "base-purple":"#f2e8ff",
                "buttom-pink":"#f974ca",
                "base-white":"#ffffff",
                "yellow-star":"#f0bb40",
                "font-black":"#32404a",
                "bottom-purple":"#e7d6ff",
                "text-purple":"#cfaeff",
                "sub-gray":"#A8A7B9",
                "nav-white":"#FEFEFF",
                "nav-icon":"#C0C4C8"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
