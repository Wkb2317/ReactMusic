import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style.js';
import { headerLinks } from '../../common/local-data.js';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
export default memo(function WYheader() {
	const selectItem = (item, index) => {
		if (index <= 2) {
			return (
				<NavLink to={item.link}>
					{item.title}
					<i className="icon sprite_01"></i>
				</NavLink>
			);
		} else {
			return <a href={item.link}>{item.title}</a>;
		}
	};

	return (
		<HeaderWrapper>
			{/*内容*/}
			<div className="content wrap-v1">
				{/* 左部分 */}
				<HeaderLeft>
					<a href="#/" className="logo sprite_01">
						{' '}
					</a>
					<div className="select-list">
						{headerLinks.map((item, index) => {
							return (
								<div key={item.title} className="select-item">
									{selectItem(item, index)}
								</div>
							);
						})}
					</div>
				</HeaderLeft>
				{/* 右部分 */}
				<HeaderRight>
					<Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
					<div className="create">创作者中心</div>
					<div className="login">登录</div>
				</HeaderRight>
			</div>
			{/* 红线 */}
			<div className="bottom"></div>
		</HeaderWrapper>
	);
});
