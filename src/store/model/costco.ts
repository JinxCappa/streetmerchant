import {Store} from './store';

export const Costco: Store = {
	labels: {
		outOfStock: {
			container: 'div[class="col-xs-12 add-to-cart-v2 out-of-stock interaction-element"]',
			text: ['']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.costco.com/sony-playstation-5-gaming-console-bundle.product.100691489.html'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.costco.com/xbox-series-x-1tb-console-with-additional-controller.product.100691493.html'
		}
	],
	name: 'costco'
};