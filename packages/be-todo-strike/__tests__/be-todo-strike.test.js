"use strict"

const { describe, expect, test } = require("@jest/globals")
const beTodoStrike = require("../dist/lib/be-todo-strike.js")

describe("be-todo-strike", () => {
  test("should be return string", () => {
    // arrange
    const sut = beTodoStrike
    const value = "todo"
    const expected = "todo: Done"

    // act
    const actual = sut(value)

    // assert
    expect(actual).toBe(expected)
  })
})
