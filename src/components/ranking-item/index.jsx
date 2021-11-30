import React, { memo } from 'react';

import { RankingItemWrapper } from './style';
export default memo(function RankingItem(props) {
	let { coverImgUrl, name, tracks = [] } = props.props;

	return (
		<RankingItemWrapper>
			<div className="top">
				<div className="img">
					<img src={coverImgUrl + '?param=80y80'} alt="" />
				</div>
				<div className="title">
					<h3>{name}</h3>
					<div className="btn">
						<div className="sprite_02 btn1"></div>
						<div className="sprite_02 btn2"></div>
					</div>
				</div>
			</div>
			<div className="list">
				{tracks.slice(0, 10).map((item, index) => {
					return (
						<div className="list-item" key={item.id}>
							<div className="rank">{index + 1}</div>
							<div className="info">
								<div className="name text-nowrap">{item.name}</div>
								<div className="icon">
									<a href="/" className="btn play sprite_02">
										paly
									</a>
									<a href="/" className="btn add sprite_icon2">
										add
									</a>
									<a href="/" className="btn favor sprite_02">
										favor
									</a>
								</div>
							</div>
						</div>
					);
				})}

				<div className="footer">查看全部{'>'} </div>
			</div>
		</RankingItemWrapper>
	);
});
