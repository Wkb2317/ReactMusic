import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { DiscoverWrapper, TopMenu } from './style';
import { discoverMenu } from '@/common/local-data';
export default memo(function WYdiscover(props) {
	const { route } = props;
	// console.log(route);
	return (
		<DiscoverWrapper>
			<div className="content">
				<TopMenu className="wrap-v1">
					<ul className="nav">
						{discoverMenu.map((item) => {
							return (
								<li key={item.title}>
									{' '}
									<NavLink to={item.link}>{item.title}</NavLink>
								</li>
							);
						})}
					</ul>
				</TopMenu>
			</div>
			{renderRoutes(route.routes)}
		</DiscoverWrapper>
	);
});
