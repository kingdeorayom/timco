/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.vue"],
    theme: {
        extend: {
            colors: {
                "timco-red": {
                    DEFAULT: "var(--timco-red)",
                },
                "timco-blue": {
                    DEFAULT: "var(--timco-blue)",
                },
                "timco-dark-blue": {
                    DEFAULT: "var(--timco-dark-blue)",
                },
                "timco-slate": {
                    DEFAULT: "var(--timco-slate)",
                },
                "timco-orange": {
                    DEFAULT: "var(--timco-orange)",
                },
                "timco-content": {
                    DEFAULT: "var(--timco-content)",
                },
                "timco-white": {
                    DEFAULT: "var(--timco-white)",
                },
                "timco-off-white": {
                    DEFAULT: "var(--timco-off-white)",
                },
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                marquee: "marquee 50s linear infinite",
            },
        },
    },
    plugins: [],
};
