import { createStore } from 'redux';

// 상태 초기값 설정
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// [ 4가지 액션 ] : 증가, 삭제, 텍스트 변경, 리스트 목록 추가
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 초기 상태(=initialState) 설정, default가 undefined로 반환되지 않도록
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        // list: state.list.concat(action.item),
        list: [...state.list, action.item],
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);
console.log('스토어 확인', store.getState());

// 스토어 리스너
const listener = () => {
  // 스토어 직접 호출(getState)
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe;

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('텍스트 변경!'));
store.dispatch(addToList({ id: 1, text: '리스트 추가' }));

// 콘솔에서 store 인스턴스 사용
// store.getState()
// store.dispatch({ type: 'DECREASE' })
// store.dispatch({ type: 'ADD_TO_LIST', item: { id: 2, text: '텍스트 2' }});
window.store = store;
window.unsubscribe = unsubscribe;
