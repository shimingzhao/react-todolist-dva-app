import _ from 'lodash';
export default {

  namespace: 'example',
  state: {
    list: [
      {
        name: 'Task 1',
        status: true
      }, {
        name: 'Task 2',
        status: false
      }, {
        name: 'Task 3',
        status: true
      },{
        name: 'Task 4',
        status: true
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    add(state, { item }) {
      return {
        ...state,
        list: state.list.concat([item]),
      };
    },

    check(state, { index, value }) {
      console.log(state.list[index]);
      console.log(value)
      const newState = state.list.slice(0);
      newState[index].status = value;
      console.log(newState[index].status);
      return {
        ...state,
        list: newState,
      };
    },

    delete(state, { index }) {
      return {
        ...state,
        list: _.filter(state.list, (item, i) => !_.isEqual(index, i)),
      };
    },
  },

};
