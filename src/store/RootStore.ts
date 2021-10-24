import { TodoStore } from './TodoStore'

export class RootStore {
  public readonly todoStore: TodoStore

  constructor() {
    this.todoStore = new TodoStore()
  }
}
