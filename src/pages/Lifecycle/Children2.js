import React, { Component } from 'react';
import { Button } from 'antd';

export default class children2 extends Component {
	constructor(props) {
		super(props);
		this.state = { showError: false };
		console.log('children2 constructor');
	}

	//根据父组件传来的props按需更新自己的state;
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('children2 getDerivedStateFromProps');
		return {
			num: nextProps.num,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('children2 shouldComponentUpdate');
		return true;
	}

	render() {
		console.log('children2 render');
		const { num, showError } = this.state;
		if (showError) {
			return a[1];
		}
		return (
			<div className="children2">
				children2:
				<br />
				父组件传递过来的：{num}
				<br />
				<Button onClick={this.triggerError}>触发错误</Button>
			</div>
		);
	}

	componentDidMount() {
		console.log('children2 componentDidMount');
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('children2 getSnapshotBeforeUpdate');
		return 1;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// JSON.parse('{"dd":1');
		console.log(`children2 componentDidUpdate, snapshot: ${snapshot}`);
	}

	componentWillUnmount() {
		console.log('children2 componentWillUnmount');
	}

	triggerError = () => {
		// JSON.parse('{"dd":1');
		this.setState({
			showError: true,
		});
	};
}
