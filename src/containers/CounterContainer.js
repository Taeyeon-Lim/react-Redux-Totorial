// contaniners: 리덕스에 있는 상태 조회 또는 디스패치하는 폴더
import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
// import { bindActionCreators } from 'redux';

function CounterContainer({
  number,
  diff,
  increase,
  decrease,
  setDiff,
}) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapDispatchToProps = dispatch => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: diff => dispatch(setDiff(diff)),
// });

// // 1) mapDispatchToProps 리팩토링( bindActionCreators 사용 )
// // onIncrese => increase 등....CounterContainer의 props 모두 변경
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch,
//   );

// 2)  mapDispatchToProps 리팩토링( bindActionCreators 자동 )
// 객체 타입인 경우, 자동으로 bindActionCreators가 내부에서 실행
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

// connect 사용해보기( 보통은 그냥 useSelector 같은 훅을 사용함 )
// const enhance = connect(mapStateToProps, mapDispatchToPros);
// export default enhance(CounterContainer);
// 위 코드와 동일
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
