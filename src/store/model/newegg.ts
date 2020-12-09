import {Store} from './store';
import fetch from 'node-fetch';

export const Newegg: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: {
			container: '#ProductBuy',
			text: ['add to cart']
		},
		maxPrice: {
			container:
				'#app > div.page-content > div.page-section > div > div > div.row-side > div.product-buy-box > div:nth-child(3) > div.product-price > ul > li.price-current'
		}
	},
	links: [
			{
				brand: 'test:brand',
				itemNumber: '14-500-495',
				model: 'test:model',
				series: 'test:series',
				url:
					'https://www.newegg.com/zotac-geforce-rtx-2060-zt-t20600k-10m/p/N82E16814500495'
			},
			{
				brand: 'microsoft',
				model: 'xbox series x',
				series: 'xboxsx',
				url: 'https://www.newegg.com/p/N82E16868105273'
			},
			{
				brand: 'microsoft',
				model: 'xbox series s',
				series: 'xboxss',
				url: 'https://www.newegg.com/p/N82E16868105274'
			},
			{
				brand: 'sony',
				model: 'ps5 console',
				series: 'sonyps5c',
				url: 'https://www.newegg.com/p/N82E16868110292'
			},
			{
				brand: 'sony',
				model: 'ps5 digital',
				series: 'sonyps5de',
				url: 'https://www.newegg.com/p/N82E16868110293'
			}
	],
	name: 'newegg',
	realTimeInventoryLookup: async (itemNumber: string) => {
		const request_url =
			'https://www.newegg.com/product/api/ProductRealtime?ItemNumber=' +
			itemNumber;
		const response = await fetch(request_url);
		const response_json = await response.json();
		return (
			response_json.MainItem !== undefined &&
			response_json.MainItem.Instock === true
		);
	}
};
