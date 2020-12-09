import {Store} from './store';

export const Adorama: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['please verify you are a human']
		},
		inStock: {
			container: '.buy-section.purchase',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.your-price',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.adorama.com/l/Computers/Gaming/Console-Gaming/Xbox-Series-X/Xbox-Series-X-Consoles'
		}
	],
	name: 'adorama'
};
