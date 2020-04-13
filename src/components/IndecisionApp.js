import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [], 
		selectedOption: undefined
	};

	//when the component first mounts
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) this.setState(() => ({ options }));
		} catch (e) {
			console.log(e);
		}
	}

	//when the comonent is updated and re-rendered
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	//when component is removed
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	//delete all the options
	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	}

	//delete a single option
	handleDeleteOption = (optionToRemove) => {
		this.setState(prevState => ({ options: prevState.options.filter( option => option != optionToRemove )}));
	}

	//pick one of the options
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const selectedOption = this.state.options[randomNum];
		this.setState(() => ({ selectedOption }));
	}

	//add a new option
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter a valid option';
		} else if  (this.state.options.includes(option)) {
			return 'The option already exists';
		}

		this.setState(prevState => ({ options: prevState.options.concat(option) }));
	}

	//to close the react modal
	handleModalClose = () => {
		this.setState(() => ({ selectedOption: undefined }));
	}

	//render the component on the webpage
	render() {
		const subTitle = 'Put your life in the hands of a computer';

		return (
			<div>
		
				<Header 
				subTitle={subTitle} 
				/>

				<div className="conatiner">
					
					<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
					/>

					<div className="widget">
						<Options
						options={this.state.options}
						handleDeleteOptions={this.handleDeleteOptions}
						handleDeleteOption={this.handleDeleteOption}
						/>

						<AddOption
						handleAddOption={this.handleAddOption}
						/>
					</div>

					<OptionModal 
					selectedOption={this.state.selectedOption}
					handleModalClose={this.handleModalClose}
					/>

				</div>

			</div>
		);
	}
}