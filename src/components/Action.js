import React from 'react';

const Action = (props) => (
	<div>
		<button onClick={props.handlePick} disabled={!props.hasOptions} className="bg-btn">
			What should I do?
		</button>
	</div>
);

export default Action;
