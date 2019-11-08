import React, { Component } from 'react';
import { Card } from 'antd';
import Father from './Father';

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unmount: false,
		};
	}
	render() {
		const { unmount } = this.state;
		return (
			<div style={{ width: 600, margin: '20px auto' }}>
				<Card
					title="顶级"
					extra={
						<a
							onClick={() => {
								this.setState({
									unmount: !unmount,
								});
							}}
						>
							{unmount ? '生成' : '销毁'}
						</a>
					}
				>
					{!unmount && <Father appProp="appProp" />}
				</Card>
			</div>
		);
	}
}
