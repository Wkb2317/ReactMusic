import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { getNewAlbumsAction } from '../../store/actionCreators';
import WYthemeHeaderRCM from '@/components/theme-header-rcm';
import WYAlbumCover from '@/components/album-cover/index.jsx';
import { NewAlbumWrapper } from './style';

export default memo(function WYnewAlbum() {
	/*
	 *  redux hooks
	 * */
	const dispatch = useDispatch();

	const { newALbums } = useSelector((state) => ({ newALbums: state.getIn(['recommend', 'newAlbums']) }), shallowEqual);

	/*
	 *  react hooks
	 * */

	const swiper = useRef();
	useEffect(() => {
		dispatch(getNewAlbumsAction(10));
		// console.log(newALbums);
	}, [dispatch]);

	return (
		<div>
			<WYthemeHeaderRCM title="新碟上架" />
			<NewAlbumWrapper>
				<div onClick={(e) => swiper.current.prev()} className="arrow arrow-left sprite_02" />
				<div className="album">
					<Carousel dots={false} ref={swiper}>
						{[0, 1].map((item) => {
							return (
								<div key={item} className="page">
									{newALbums.slice(item * 5, (item + 1) * 5).map((iten) => {
										return <WYAlbumCover key={iten.name} width="118px" size={100} bgp="-570px" info={iten} />;
									})}
								</div>
							);
						})}
					</Carousel>
				</div>
				<div onClick={(e) => swiper.current.next()} className="arrow arrow-right sprite_02" />
			</NewAlbumWrapper>
		</div>
	);
});
