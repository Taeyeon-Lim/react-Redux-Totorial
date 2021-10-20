import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// 일부러 connect를 사용한 리팩토링( 기본 사용은 Hook을 이용하는 것 )
function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback(text => addTodo(text), [addTodo]);
  const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]);

  return (
    <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
  );
}

// const mapStateToProps = state => ({ todos: state.todos });
// const mapDispatchToProps = {
//   addTodo,
//   toggleTodo,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodosContainer);

// connet에 직접 넣어주기
export default connect(state => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
