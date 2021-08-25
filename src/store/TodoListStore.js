import { types } from 'mobx-state-tree';

export const TodoItem = types
  .model('TodoItem', {
    id: Math.random(),
    title: '',
    isComplete: false,
    isEdit: false,
  })
  .actions((self) => ({
    setComplete() {
      self.isComplete = !self.isComplete;
    },
    setEdit() {
      self.isEdit = !self.isEdit;
    },
    setAgreeEdit(title) {
      self.title = title;
      self.isEdit = !self.isEdit;
    },
  }));

export const TodoList = types
  .model('TodoList', {
    todoItems: types.array(TodoItem),
  })
  .actions((self) => ({
    addTodo(newTodoItem) {
      self.todoItems.push(newTodoItem);
    },

    setComplete(id) {
      const item = self.todoItems.find((item) => item.id == id);
      item.setComplete();
    },

    setEdit(id) {
      const item = self.todoItems.find((item) => item.id == id);
      item.setEdit();
    },

    setAgreeEdit(title, id) {
      const item = self.todoItems.find((item) => item.id == id);
      item.setAgreeEdit(title);
    },

    removeTodo(id) {
      const index = self.todoItems.findIndex((item) => item.id == id);
      console.log('removeTodo index ', index);
      self.todoItems.splice(index, 1);
    },
  }));

export const todoList = TodoList.create({});
