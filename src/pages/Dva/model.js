export default {
	namespace: 'dva',
	state: {
		num: 1,
	},
	reducers: {
		plus(state, { payload }) {
			return {
				...state,
				num: state.num + 1,
			};
		},
	},
};
