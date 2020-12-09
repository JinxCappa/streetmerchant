import {Store} from './store';

export const BestBuy: Store = {
	labels: {
		inStock: {
			container:
				'[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
			text: ['add to cart']
		},
		maxPrice: {
			container:
				'[data-sticky-media-gallery] .priceView-price .priceView-hero-price span'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.bestbuy.com/site/evga-ko-ultra-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-pci-express-3-0-graphics-card-black-gray/6403801.p?skuId=6403801&intl=nosplash'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149&intl=nosplash'
		},
		{
			brand: 'sony',
			cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?skuId=6430161&intl=nosplash'
		},
		{
			brand: 'microsoft',
			cartUrl: 'https://api.bestbuy.com/click/-/6428324/cart',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.bestbuy.com/site/microsoft-xbox-series-s-512-gb-all-digital-console-disc-free-gaming-white/6430277.p?skuId=6430277'
		}
	],
	name: 'bestbuy'
};
