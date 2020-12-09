import {Store} from './store';

export const Amazon: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: [
			{
				container: '#add-to-cart-button',
				text: ['add to cart']
			},
			{
				container: '#buy-now-button',
				text: ['buy now']
			}
		],
		maxPrice: {
			container: '#priceblock_ourprice'
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07TDN1SC5&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B07TDN1SC5'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.com/dp/B08FC5L3RG'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.com/dp/B08FC6MR62'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.amazon.com/dp/B08H75RTZ8'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.amazon.com/dp/B08G9J44ZN'
		}
	],
	name: 'amazon'
};
