/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    corePlugins: { preflight: false },
    important: true,
    theme: {
        extend: {},
    },
    plugins: [],
};
