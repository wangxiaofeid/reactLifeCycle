import React from 'react';
import { Router, Route, Switch, NavLink } from 'dva/router';
import { ConfigProvider, Spin, Menu } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';

const LoadingComponent = () => {
	return <Spin size="large" className="globalSpin" />;
};

// 设置默认的加载组件
dynamic.setDefaultLoadingComponent(() => {
	return <LoadingComponent />;
});

// dynamic包装 函数
const dynamicWrapper = ({ app, models = [], component }) => dynamic({ app, models, component });
// dynamic包装mobx 函数
const dynamicWrapperMobx = (Comp, stores) => {
	const LazyComp = React.lazy(Comp);
	return props => (
		<Provider {...stores}>
			<Suspense fallback={<LoadingComponent />}>
				<LazyComp {...props} />
			</Suspense>
		</Provider>
	);
};

export default function RouterConfig({ history, app }) {
	return (
		<ConfigProvider locale={zhCN}>
			<Router history={history}>
				<div>
					<Menu mode="horizontal">
						<Menu.Item>
							<NavLink to="/lifecycle">生命周期</NavLink>
						</Menu.Item>
						<Menu.Item>
							<NavLink to="/props">参数</NavLink>
						</Menu.Item>
						<Menu.Item>
							<NavLink to="/compType">函数类型</NavLink>
						</Menu.Item>
					</Menu>

					<Switch>
						<Route
							key="lifecycle"
							path="/lifecycle"
							component={dynamicWrapper({
								component: () => import('./pages/Lifecycle'),
							})}
						/>
						<Route
							key="props"
							path="/props"
							component={dynamicWrapper({ component: () => import('./pages/Props') })}
						/>
						<Route
							key="compType"
							path="/compType"
							component={dynamicWrapper({
								component: () => import('./pages/CompType'),
							})}
						/>
					</Switch>
				</div>
			</Router>
		</ConfigProvider>
	);
}
