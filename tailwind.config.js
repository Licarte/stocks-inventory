module.exports = {
    purge: [
        "./public/**/*.{html,js}",
        "./node_modules/flowbite/**/*.{css,js}"
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
}