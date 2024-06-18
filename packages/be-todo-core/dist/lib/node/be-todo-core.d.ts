declare function beTodoCore(): {
  todos: string[]
  add: (value: string) => void
  remove: (index: number) => void
  strike: (index: number) => void
}
export { beTodoCore }
