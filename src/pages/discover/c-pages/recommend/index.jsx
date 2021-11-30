import React, { memo } from 'react';

import WYtopBanner from './c-cpns/top-banners';
import WYhotRecommend from './c-cpns/hot-recommend/';
import WYnewAlbum from './c-cpns/new-album/';
import WYranking from './c-cpns/ranking/';
import WYLogin from './c-cpns/login/index';
import WYSettledSinger from './c-cpns/settled-singer';
import WYHotRadio from './c-cpns/hot-radio';

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
function WYrecommend() {
	return (
		<div>
			<RecommendWrapper>
				<WYtopBanner></WYtopBanner>
				<Content className="wrap-v2">
					<RecommendLeft>
						<WYhotRecommend></WYhotRecommend>
						<WYnewAlbum></WYnewAlbum>
						<WYranking></WYranking>
					</RecommendLeft>
					<RecommendRight>
						<WYLogin></WYLogin>
						<WYSettledSinger></WYSettledSinger>
						<WYHotRadio />
					</RecommendRight>
				</Content>
			</RecommendWrapper>
		</div>
	);
}

export default memo(WYrecommend);

// const mapStateToProps = (state) => {
// 	return {
// 		banners: state.recommend.topBanners,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getBanners: () => {
// 			dispatch(getTopBannersAction());
// 		},
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(memo(WYrecommend));
