import React from 'react';

const Option = (props) => (
	<div className="option">
		<p className="option__text">{props.orderNumber}. {props.optionText}</p>
		<button
		onClick={(e) => { props.handleDeleteOption(props.optionText); }}
		className="sm-btn sm-btn--link"
		>
		Remove
		</button>
	</div>
);

export default Option;
