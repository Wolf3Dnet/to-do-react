import { types } from 'mobx-state-tree';

export const TodoItem = types
  .model('TodoItem', {
    id: Math.random(),
    name: '',
    isComplete: false,
  })
  .actions((self) => ({
    handleComplete() {
      self.isComplete = !self.isComplete;
    },
  }));

export const TodoList = types
  .model({
    todoItems: types.array(TodoItem),
  })
  .actions((self) => ({
    addTodo(newTodoItem) {
      self.todoItems.push(newTodoItem);
    },

    removeTodo(key) {
      self.todoItems.delete(key);
    },
  }));
