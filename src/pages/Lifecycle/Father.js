import React, { Component } from 'react';
import { Button } from 'antd';
import Children from './Children';
import Children2 from './Children2';

export default class Father extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
		};
		console.log('father constructor');
	}

	// 即将废弃
	// componentWillMount() {
	//   console.log('father componentWillMount');
	// }

	/**
	 * 时机： 在shouldComponentUpdate之前调用
	 * 场景： 当state需要从props初始化时使用，eg: 单获取默认值
	 * 禁止： 除生成衍生state外的其他操作
	 */
	static getDerivedStateFromProps(nextProps, thisSta) {
		console.log('father getDerivedStateFromProps');
		return {
			appProp: nextProps.appProp,
		};
	}

	/**
	 * 时机： props或者state修改后
	 * 场景： 性能优化
	 * 禁止： 不改变数据，只返回布尔类型数据
	 */
	shouldComponentUpdate() {
		console.log('father shouldComponentUpdate');
		return true;
	}

	/**
	 * 时机： 在shouldComponentUpdate返回true后
	 * 场景： --
	 * 禁止： 任何直接触发重渲染的操作
	 */
	render() {
		console.log('father render');
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
				{/* <Children2 num={num} /> */}
			</div>
		);
	}

	/**
	 * 时机： 首次渲染后
	 * 场景： 获取外部资源；事件注册
	 */
	componentDidMount() {
		console.log('father componentDidMount');
	}

	// 即将废弃
	// componentWillReceiveProps(nextProps) {
	//   console.log('father componentWillReceiveProps')
	// }

	// 即将废弃
	// componentWillUpdate(nextProps, nextState) {
	//   console.log('father componentWillUpdate')
	// }

	/**
	 * 时机： 在render后，挂载前；返回值作为componentDidUpdate的第三个参数
	 * 场景： 获取render之前的dom状态
	 * 禁止： 不改变数据，只返回数据
	 */
	getSnapshotBeforeUpdate() {
		console.log('father getSnapshotBeforeUpdate');
		return 1;
	}

	/**
	 * 时机： dom更新后
	 * 场景： 获通过props重新获取数据; dom操作
	 * 禁止： 无条件的执行this.setState
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(`father componentDidUpdate, snapshot: ${snapshot}`);
	}

	/**
	 * 时机： 注销前
	 * 场景： 资源释放-事件监听器、定时器
	 * 禁止： setState
	 */
	componentWillUnmount() {
		console.log('father componentWillUnmount');
	}

	/**
	 * 时机： 捕获树中子组件的错误，不能捕获本身的错误
	 * 场景： 错误捕获
	 */
	componentDidCatch(error, info) {
		console.log('father componentDidCatch; error:', error, '; info', info);
		this.setState({
			hasError: true,
		});
	}

	// static getDerivedStateFromError(error) {
	// 	// 更新状态来显示错误触发的UI
	// 	return { hasError: true };
	// }

	add = () => {
		this.setState({
			num: this.state.num + 1,
		});
	};
}
