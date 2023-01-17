/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                secondary: '#64748b',
                dark: '#0f172a',
                youtube: '#c4302b',
                tiktok: '#000000',
                linkedin: '#0077b5'
            },
            screens: {
                '2xl': '1200px',
            },
        },
    },
    plugins: [],
};
