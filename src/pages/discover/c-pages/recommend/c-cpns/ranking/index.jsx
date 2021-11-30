import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import WYthemeHeaderRCM from '@/components/theme-header-rcm';
import RankingItem from '@/components/ranking-item';
import { getTopRankingAction } from '../../store/actionCreators';
import { RankingWapper } from './style';

export default memo(function WYranking() {
	const dispatch = useDispatch();
	const { upRanking } = useSelector((state) => ({ upRanking: state.getIn(['recommend', 'upRanking']) }), shallowEqual);
	const { newRanking } = useSelector((state) => ({ newRanking: state.getIn(['recommend', 'newRanking']) }), shallowEqual);
	const { originRanking } = useSelector((state) => ({ originRanking: state.getIn(['recommend', 'originRanking']) }), shallowEqual);

	console.log(upRanking);
	console.log(newRanking);
	console.log(originRanking);

	useEffect(() => {
		dispatch(getTopRankingAction(0));
		dispatch(getTopRankingAction(2));
		dispatch(getTopRankingAction(3));
	}, [dispatch]);

	return (
		<div>
			<WYthemeHeaderRCM title="榜单" />
			<RankingWapper>
				<div className="ranking">
					<RankingItem props={upRanking} className="rankingitem"></RankingItem>
					<RankingItem props={newRanking} className="rankingitem"></RankingItem>
					<RankingItem props={originRanking} className="rankingitem"></RankingItem>
				</div>
			</RankingWapper>
		</div>
	);
});
