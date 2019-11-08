import React, { Component } from 'react';
import { Button } from 'antd';

export default class Children extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log('children constructor');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('children getDerivedStateFromProps');
		return {
			num: nextProps.num,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('children shouldComponentUpdate');
		return true;
	}

	render() {
		console.log('children render');
		const { num } = this.state;
		return (
			<div className="children">
				children:
				<br />
				父组件传递过来的：{num}
				<br />
				<Button onClick={this.triggerError}>触发错误</Button>
			</div>
		);
	}

	componentDidMount(props, state) {
		console.log(`children componentDidMount 参数长度:${arguments.length}`, arguments);
	}

	shouldComponentUpdate(props, state) {
		console.log(`children shouldComponentUpdate 参数长度:${arguments.length}`, arguments);
		return true;
	}

	getSnapshotBeforeUpdate(props, state) {
		console.log(`children getSnapshotBeforeUpdate 参数长度:${arguments.length}`, arguments);
		return 1;
	}

	componentDidUpdate(props, state, snapshot) {
		console.log(`children componentDidUpdate 参数长度:${arguments.length}`, arguments);
	}

	componentWillUnmount(props, state) {
		console.log(`children componentWillUnmount  参数长度:${arguments.length}`, arguments);
	}
}
