// contaniners: 리덕스에 있는 상태 조회 또는 디스패치하는 폴더
import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector : 리덕스 내부 상태를 조회하는 훅
  // useSelector 내부의 state === store.getState()

  // * 문제: Selector에서 매번 새로운 객체를 생성함 => todos에 diff 등에 변화가 있으면, 같이 렌더링됨

  // * 해결안 1: "useSelector를 개별 생성"
  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff)
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    // * 해결안 2: usesSelector의 2번째 파라미터에 이전 상태와 다음 상태를 비교하는 함수 입력
    // (left, right) => {
    //   return left.diff === right.diff && left.number === right.number;
    // },
    // * 해결안 3: shallowEqual 사용
    shallowEqual,
  );

  // useDispatch : 스토어의 디스패치를 함수에서 사용가능하게하는 훅
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
