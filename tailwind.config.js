/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"purple": "hsl(259, 100%, 65%)",
				"light-red": "hsl(0, 100%, 67%)",
				"off-white": "hsl(0, 0%, 94%)",
				"smokey-grey": "hsl(0, 1%, 44%)",
				"light-grey": "hsl(0, 0%, 86%)",
				"off-black": "hsl(0, 0%, 8%)"
			},
			fontFamily: {
				"poppins": "Poppins",
				"poppins-bold": "Poppins-Bold",
				"poppins-extrabold": "Poppins-ExtraBold",
				"poppins-italic": "Poppins-Italic",
				"poppins-boldItalic": "Poppins-BoldItalic",
				"poppins-extraboldItalic" : "Poppins-ExtraBoldItalic"
			},
			width: {
				"custom-width": "clamp(100px,100px + 2.75vw,140px)"
			}
		},
	},
	plugins: [],
}

