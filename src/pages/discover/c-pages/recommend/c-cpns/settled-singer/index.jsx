import React, { memo, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getSettledSingerAction } from '../../store/actionCreators';
import { SettledSingerWrapper } from './style';
export default memo(function SettledSinger() {
	const dispatch = useDispatch();
	const { artists } = useSelector((state) => ({ artists: state.getIn(['recommend', 'artists']) }), shallowEqual);
	console.log('====================================');
	console.log(artists);
	console.log('====================================');
	useEffect(() => {
		dispatch(getSettledSingerAction(5001, 5));
	}, [dispatch]);
	return (
		<SettledSingerWrapper>
			<div className="box">
				<div className="header">
					<div>入驻歌手</div>
					<div>查看全部{'>'}</div>
				</div>

				<div className="list">
					{artists.map((item) => {
						return (
							<a href="/" className="list-item" key={item.id}>
								<img className="img" src={item.picUrl + '?param=80y80'} alt="" />
								<div className="info">
									<h3>{item.alias[0] ? item.alias[0] : item.name}</h3>
									<span>{item.name}</span>
								</div>
							</a>
						);
					})}
				</div>

				<a href="/" className="footer">
					申请成为音乐人
				</a>
			</div>
		</SettledSingerWrapper>
	);
});
