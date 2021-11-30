import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HotRecommendWrapper } from './style';
import WYthemeHeaderRCM from '@/components/theme-header-rcm';
import { getHotRecommendsAction } from '../../store/actionCreators';
import WYsongsCover from '@/components/songs-cover';

export default memo(function WYhotRecommend() {
	const dispatch = useDispatch();
	const { hotRecommends } = useSelector((state) => ({ hotRecommends: state.getIn(['recommend', 'hotRecommends']) }), shallowEqual);

	useEffect(() => {
		dispatch(getHotRecommendsAction());
	}, [dispatch]);

	return (
		<HotRecommendWrapper>
			<WYthemeHeaderRCM title="热门推荐" keyWords={['华语', '流行', '摇滚', '民谣', '电子']} />
			<div className="hotrecommend">
				{hotRecommends.map((item) => {
					return <WYsongsCover info={item} key={item.id} />;
				})}
			</div>
		</HotRecommendWrapper>
	);
});
