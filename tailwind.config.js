/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-input': 'rgb(255 237 213)',
			},
		},
	},
	plugins: [],
};
