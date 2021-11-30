import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const WYthemeHeaderRCM = memo(function WYthemeHeaderRCM(props) {
	const { title, keyWords } = props;

	return (
		<HeaderWrapper className="sprite_02">
			<div className="left">
				<div className="title">{title}</div>
				<div className="keyword">
					{keyWords.map((item) => {
						return (
							<div key={item} className="item">
								<span className="link">{item}</span>
								<span className="divider">|</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className="right">
				<a href="todo">更多</a>
				<i className="icon sprite_02"></i>
			</div>
		</HeaderWrapper>
	);
});

WYthemeHeaderRCM.propTypes = {
	title: PropTypes.string.isRequired,
	keyWords: PropTypes.array,
};

WYthemeHeaderRCM.defaultProps = {
	keyWords: [],
};

export default WYthemeHeaderRCM;
