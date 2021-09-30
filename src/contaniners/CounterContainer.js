// contaniners: 리덕스에 있는 상태 조회 또는 디스패치하는 폴더
import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector : 리덕스 내부 상태를 조회하는 훅
  // useSelector 내부의 state === store.getState()
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

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
