"use strict"

const beTodoStrike = require("be-todo-strike")

module.exports = beTodoCore

function beTodoCore() {
  const todos: string[] = []

  function add(value: string): void {
    todos.push(value)
  }

  function remove(index: number): void {
    todos.splice(index, 1)
  }

  function strike(index: number): void {
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
