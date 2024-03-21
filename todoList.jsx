// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from './actions/todoActions';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { toggleTodo, removeTodo })(TodoList);
