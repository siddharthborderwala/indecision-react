import React from 'react';

export default class AddOption extends React.Component {
	state = {
		error: undefined
	};

	handleAddOption = (e) => {
		e.preventDefault();

		const option = e.target.elements.option.value.toString().trim();
		const error = this.props.handleAddOption(option);

		e.target.elements.option.value = '';

		this.setState(() => ({ error }));
	}

	render() {
		return (
			<div className="add-option">
				{this.state.error && <p className="add-option__err">{this.state.error}</p>}
				<form
				className="add-option__form"
				onSubmit={this.handleAddOption}
				autoComplete='off'
				>
					<input
					className="add-option__form--input"
					type='text'
					placeholder='New option here'
					name='option'
					/>
					<button type='submit' className="sm-btn">Add option</button>
				</form>
			</div>
		);
	}
}