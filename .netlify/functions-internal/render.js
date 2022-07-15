const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","narsil-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-cdc96fad.js","js":["start-cdc96fad.js","chunks/index-c83b5075.js","chunks/index-750aea8d.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "video",
				pattern: /^\/video\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/video/index.ts.js'))
			},
			{
				type: 'endpoint',
				id: "video/invoice",
				pattern: /^\/video\/invoice\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/video/invoice.ts.js'))
			},
			{
				type: 'endpoint',
				id: "lightning/invoice",
				pattern: /^\/lightning\/invoice\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/lightning/invoice.ts.js'))
			},
			{
				type: 'page',
				id: "pages/invoice",
				pattern: /^\/pages\/invoice\/?$/,
				names: [],
				types: [],
				path: "/pages/invoice",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/keysend",
				pattern: /^\/pages\/keysend\/?$/,
				names: [],
				types: [],
				path: "/pages/keysend",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/login",
				pattern: /^\/pages\/login\/?$/,
				names: [],
				types: [],
				path: "/pages/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/node",
				pattern: /^\/pages\/node\/?$/,
				names: [],
				types: [],
				path: "/pages/node",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/scroll",
				pattern: /^\/pages\/scroll\/?$/,
				names: [],
				types: [],
				path: "/pages/scroll",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/video",
				pattern: /^\/pages\/video\/?$/,
				names: [],
				types: [],
				path: "/pages/video",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
