import React, { memo } from 'react';

import { HotRadioWapper } from './style';
import { hotRadios } from '@/common/local-data.js';
export default memo(function HotRadio() {
	return (
		<HotRadioWapper>
			<div className="header">热门主播</div>
			{hotRadios.map((item) => (
				<a href="/" className="list-item" key={item.url}>
					<img src={item.picUrl} alt="" />
					<div className="info">
						<h4>{item.name}</h4>
						<span className="text-nowrap">{item.position}</span>
					</div>
				</a>
			))}
		</HotRadioWapper>
	);
});
