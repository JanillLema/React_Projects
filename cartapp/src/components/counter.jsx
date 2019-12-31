// tutorial provided by Programming with Mosh : https://www.youtube.com/watch?v=Ke90Tje7VS0

import React, { Component } from 'react';

export default class counter extends Component {
	
	state = {
		count: 0
	};
    
    // arrow functions inherit the this key word ( do not need bind event handler )
	handleIncrement = product => {
		console.log(product); 
		this.setState( {count : this.state.count + 1} ); // syncs the dom with the virtual dom 
	}

    
	formatCount(){

		const { count } = this.state;
		return count === 0 ? 'Zero' : count;

	}

    // formats badgets using bootstrap styling 
	getBadgeClasses(){

		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes; 
	}

	render() {
		return (
			<div>

				<span className = {this.getBadgeClasses()}> {this.formatCount()} </span>

				<button 
					onClick={ () => this.handleIncrement(product) }
					className = "btn btn-secondary btn-sm"
				> 
					Increment 
				</button>

			</div>
		);
	}
}