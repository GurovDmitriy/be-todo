"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const beTodoStrike = require("be-todo-strike")
module.exports = beTodo
function beTodo() {
  const todos = []
  function add(value) {
    todos.push(value)
  }
  function remove(index) {
    todos.splice(index, 1)
  }
  function strike(index) {
    if (todos[index]) {
      todos[index] = beTodoStrike(todos[index])
    }
  }
  return {
    todos,
    add,
    remove,
    strike,
  }
}
