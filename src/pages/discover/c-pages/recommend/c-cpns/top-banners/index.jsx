import React, { useEffect, memo, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

import { getTopBannersAction } from '../../store/actionCreators';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
export default memo(function WYtopBanner() {
	/**
	 *  state
	 */
	const [currentIndex, setCurrentIndex] = useState(0);

	/**
	 *   store
	 */
	const { banners } = useSelector((state) => ({ banners: state.getIn(['recommend', 'topBanners']) }), shallowEqual); // 添加shallowEqual会进行浅层比较

	/**
	 *   hooks
	 */
	const swiper = useRef();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTopBannersAction());
	}, [dispatch]);

	/**
	 *   other
	 */

	const bannerChange = useCallback((from, to) => {
		setCurrentIndex(to); // 拿到当前的图片索引
	}, []);
	//  拿到当前的背景图片
	const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20';

	return (
		<BannerWrapper bgImage={bgImage}>
			<div className="wrap-v2 banner">
				<BannerLeft>
					<Carousel ref={swiper} beforeChange={bannerChange} autoplay>
						{banners.map((item) => {
							return (
								<div key={item.imageUrl}>
									<img className="img" src={item.imageUrl} alt="" />
								</div>
							);
						})}
					</Carousel>
				</BannerLeft>
				<BannerRight>
					<a href="https://music.163.com/#/download" rel="noopener noreferrer" target="_blank">
						""
					</a>
					<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
				</BannerRight>

				<BannerControl>
					<button className="btn left" onClick={(e) => swiper.current.prev()}></button>
					<button className="btn right" onClick={(e) => swiper.current.next()}></button>
				</BannerControl>
			</div>
		</BannerWrapper>
	);
});
