import React, { memo } from 'react';
// import { Button } from 'antd';
import { LoginWapper } from './style';
export default memo(function login() {
	return (
		<LoginWapper>
			<div className="sprite_02 box">
				<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
				<a href="/" className="sprite_02 btn">
					用户登录
				</a>
			</div>
		</LoginWapper>
	);
});
