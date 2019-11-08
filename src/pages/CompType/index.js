import React, { Component } from 'react';
import { Xx1, Xx2, Xx3 } from './Comp';

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
			obj: { num: 1 },
		};
	}
	render() {
		const { unmount } = this.state;
		return (
			<div className="App">
				<button onClick={this.add}>{this.state.num}</button>
				<Xx1 />
				<Xx2 />
				<Xx3 />
			</div>
		);
	}

	add = () => {
		this.setState({
			num: this.state.num + 1,
		});
	};
}
