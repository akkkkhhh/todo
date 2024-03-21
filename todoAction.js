let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    text,
    completed: false
  }
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: id
});
