import React, { memo } from 'react';

import { getImgSize } from '@/utils/data-format';
import { AlbumCoverWrapper } from './style';

export default memo(function WYAlbumCover(props) {
	const { info, size = 100, width = '118px', bgp = '-570px' } = props;

	return (
		<AlbumCoverWrapper width={width} bgp={bgp} size={size}>
			<div className="albumItem" key={info.name}>
				<div className="albumImage">
					<img className="image" src={getImgSize(info.picUrl, size)} alt="" />
					<a href="/todo" className="cover sprite_covor" title={info.name}>
						{info.name}
					</a>
				</div>
				<div className="albumInfo">
					<div className="name text-nowrap">{info.name}</div>
					<div className="artist text-nowrap">{info.artist.name}</div>
				</div>
			</div>
		</AlbumCoverWrapper>
	);
});
