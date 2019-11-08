import React, { Component } from 'react';
import { Button } from 'antd';
import Children from './Children';

export default class Father extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
		};
		console.log(`father constructor 参数长度:${arguments.length}`, arguments);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log(`father getDerivedStateFromProps 参数长度:${arguments.length}`, arguments);
		thisState.xx = 123;
		return {
			appProp: nextProps.appProp,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(`father shouldComponentUpdate 参数长度:${arguments.length}`, arguments);
		return true;
	}

	render() {
		console.log(this.state.xx);
		console.log(`father render 参数长度:${arguments.length}`);
		const { num, appProp } = this.state;
		return (
			<div className="father">
				father:
				<div>父组件传过来的appProp: {appProp}</div>
				<Button onClick={this.add}>{num}</Button>
				<Button
					onClick={() => {
						this.forceUpdate();
					}}
				>
					forceUpdate
				</Button>
				<Children num={num} />
			</div>
		);
	}

	add = () => {
		this.setState({
			num: this.state.num + 1,
		});
	};

	componentDidMount() {
		console.log(`father componentDidMount 参数长度:${arguments.length}`, arguments);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(`father getSnapshotBeforeUpdate 参数长度:${arguments.length}`, arguments);
		return 1;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(`father componentDidUpdate 参数长度:${arguments.length}`, arguments);
	}

	componentWillUnmount() {
		console.log(`father componentWillUnmount  参数长度:${arguments.length}`, arguments);
	}
}
