import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux Todo App</h1>
      <TodoList />
      {}
    </div>
  </Provider>
);

export default App;
