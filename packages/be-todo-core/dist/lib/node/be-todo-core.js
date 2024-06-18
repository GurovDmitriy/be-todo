"use strict"

var beTodoStrike = require("@gurovdmitriy/be-todo-strike")

function beTodoCore() {
  const todos = []
  function add(value) {
    todos.push(value)
  }
  function remove(index) {
    todos.splice(index, 1)
  }
  function strike(index) {
    if (todos[index]) {
      todos[index] = beTodoStrike.beTodoStrike(todos[index])
    }
  }
  return {
    todos,
    add,
    remove,
    strike,
  }
}

exports.beTodoCore = beTodoCore
