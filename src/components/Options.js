import React from 'react';
import Option from './Option';

const Options = props => {
	return (
		<div>
			<div className="widget-header">
				<h3 className="widget-header__title">Your Options</h3>
				<button 
				onClick={props.handleDeleteOptions}
				className="sm-btn sm-btn--link"
				>
				Remove All</button>
			</div>
			{props.options.length === 0 && <p className="widget__msg">Please enter an option to get started</p>}
			{props.options.map((option, index) => (
				<Option
				key={option}
				orderNumber={index+1}
				optionText={option}
				handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

export default Options;