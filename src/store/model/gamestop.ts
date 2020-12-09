import {Store} from './store';

export const Gamestop: Store = {
	labels: {
		inStock: [
			{
				container: '.add-to-cart',
				text: ['add to cart']
			},
			{
				container: '.add-to-cart',
				text: ['Pre-Order']
			}
		],

		maxPrice: {
			container: '.primary-details-row .actual-price',
			euroFormat: false
		},
		outOfStock: [
			{
				container: '.add-to-cart',
				text: ['not available']
			},
			{
				container: '.add-to-cart',
				text: ['Not Available']
			},
			{
				container: '.add-to-cart',
				text: ['Unavailable']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.gamestop.com/nav-pc-hardware-desktops/products/clx-set-tgmsetgxe9600bm-gaming-desktop/11096665'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.gamestop.com/video-games/playstation-5/consoles'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.gamestop.com/video-games/xbox-series-x/consoles'
		}
	],
	name: 'gamestop',
	successStatusCodes: [[0, 399], 404]
};
