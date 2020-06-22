import TodoApp from "./TodoApp.js";

const $targetTodoList = document.querySelector("#todo-list");
const $targetTodoInput = document.querySelector("#new-todo-title");
const data = [
  {
    content: "새로운 타이틀",
    isCompleted: false,
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
  },
];
const params = {
  $targetTodoList,
  $targetTodoInput,
  data,
};

new TodoApp(params);
