//this file is needed in order to use postCSS
//tell PostCSS to use tailwindcss package:
module.exports = () => ({
    plugins: [require("tailwindcss")],
});