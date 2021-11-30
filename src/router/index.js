import React from 'react';
import { Redirect } from 'react-router';

import WYdiscover from '@/pages/discover';
import WYfriend from '@/pages/friend';
import WYmine from '@/pages/mine';
import WYsongs from '@/pages/discover/c-pages/songs';
import WYrecommend from '@/pages/discover/c-pages/recommend';
import WYranking from '@/pages/discover/c-pages/ranking';
import WYdjradio from '@/pages/discover/c-pages/djradio';
import WYalbum from '@/pages/discover/c-pages/album';
import WYartist from '@/pages/discover/c-pages/artist';

const routes = [
	{
		path: '/',
		exact: true,
		render: () => <Redirect to="/discover"></Redirect>,
	},
	{
		path: '/discover',
		// exact:true,
		//  这里不能加精准匹配 ， 如果开启了就匹配不到子路由了
		component: WYdiscover,
		routes: [
			{
				path: '/discover',
				exact: true,
				render: () => <Redirect to="/discover/recommend"></Redirect>,
			},
			{
				path: '/discover/recommend',
				component: WYrecommend,
			},
			{
				path: '/discover/album',
				component: WYalbum,
			},
			{
				path: '/discover/ranking',

				component: WYranking,
			},
			{
				path: '/discover/songs',

				component: WYsongs,
			},
			{
				path: '/discover/djradio',

				component: WYdjradio,
			},
			{
				path: '/discover/artist',
				component: WYartist,
			},
		],
	},
	{
		path: '/friend',
		component: WYfriend,
		exact: true,
	},
	{
		path: '/mine',
		component: WYmine,
		exact: true,
	},
];

export default routes;
