const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			// use colors only specified
			white: colors.white,
			gray: colors.gray,
			blue: colors.blue
		},
		extend: {
			colors: {
				black: '#111111',
				dark: '#222222',
				lightdark: '#333333',
				yellow: '#E4A400',
				lightyellow: '#F9C400'
			}
		}
	},
	plugins: []
}
