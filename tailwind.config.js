module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}", // Added the app folder
	],
	theme: {
		extend: {
			colors: {
				// Primary colors
				'mint-green': '#3EB489',
				'deep-blue': '#2C3E50',

				// Secondary colors
				'soft-gold': '#F1C40F',
				'light-gray': '#ECF0F1',

				// Accent colors
				'coral': '#E74C3C',
				'white': '#FFFFFF',
			},
			fontFamily: {
				'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
				'serif': ['Merriweather', 'ui-serif', 'Georgia'],
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				pennypath: {
					'primary': '#3EB489',
					'secondary': '#2C3E50',
					'accent': '#E74C3C',
					'neutral': '#3D4451',
					'base-100': '#FFFFFF',
					'info': '#2094f3',
					'success': '#009485',
					'warning': '#ff9900',
					'error': '#ff5724',
				},
			},
		],
	},
}
