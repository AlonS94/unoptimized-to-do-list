import { makeAutoObservable } from 'mobx'
import { todo } from '../../models/todo'

export class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  todo: todo[] = [
    { label: 'дело №1', id: `${new Date()}1`, completed: false, hidden: false, date: new Date() },
    { label: 'дело №2', id: `${new Date()}2`, completed: false, hidden: false, date: new Date() },
    { label: 'дело №3', id: `${new Date()}3`, completed: false, hidden: false, date: new Date() },
  ]

  todoCounter = this.todo.filter((todo) => !todo.completed).length

  toggleCompleted = (id: string) => {
    this.todo = this.todo.map((todos) => {
      if (id === todos.id) return { ...todos, completed: !todos.completed }
      return todos
    })
  }

  onDeleted = (id: string) => {
    this.todo = this.todo.filter((todos) => id !== todos.id)
  }

  onAddTodo = (label: string) => {
    this.todo = [
      ...this.todo,
      { label, id: `${new Date()} ${label}`, completed: false, hidden: false, date: new Date() },
    ]
  }

  onChangeHidden = (filter: string) => {
    this.todo = this.todo.map((todo) => {
      if (filter === 'Active') return { ...todo, hidden: todo.completed }
      if (filter === 'Completed') return { ...todo, hidden: !todo.completed }
      return { ...todo, hidden: false }
    })
  }

  ocClearCompleted = () => {
    this.todo = this.todo.filter((todo) => !todo.completed)
  }

  onChangeTodo = (id: string, label: string) => {
    this.todo = this.todo.map((todo) => {
      if (id === todo.id) return { ...todo, label }
      return todo
    })
  }
}
