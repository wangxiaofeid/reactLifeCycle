import dva from 'dva';
import 'moment/locale/zh-cn';
import router from './router';

const browserHistory = require('history').createBrowserHistory;

const app = dva({
	history: browserHistory(),
	onError(e) {
		console.error('catch error', e);
	},
});

app.router(router);
app.start('#root');

export default app._store;
