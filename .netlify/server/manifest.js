export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","start-line-no-kite.jpeg","tuesday-sailboat-outlined.svg","sailboat-hr.svg","sailboat-hr-test.svg","sailboat-hr-test-op.svg","gps-location-symbol-op.svg","map-marker-EZ.svg","start-line-op_hpda3d_c_scale,w_998.webp","start-line-op_hpda3d_c_scale,w_1080.webp","start-line-op_hpda3d_c_scale,w_320.webp","start-line-op_hpda3d_c_scale,w_638.webp","start-line-op_hpda3d_c_scale,w_834.webp"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-a97a592d.js","imports":["_app/immutable/start-a97a592d.js","_app/immutable/chunks/index-953fe873.js","_app/immutable/chunks/singletons-37a0903c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
