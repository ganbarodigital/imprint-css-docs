/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ],
    plugins: [
        // require("@imprintcss/css-debugging"),
        require('@imprintcss/tailwind-plugin'),
    ],
};
