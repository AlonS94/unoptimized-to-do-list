import React from 'react'
import { observer } from 'mobx-react-lite'
import { Header } from '../Header'
import { TodoList } from '../TodoList'
import { Footer } from '../Footer'
import { useStore } from '../../store/useStore'

export const App = observer(() => {
  const { todoStore } = useStore()
  const { todo } = todoStore
  return (
    <>
      <Header />
      <TodoList />
      {todo.length ? <Footer /> : null}
    </>
  )
})
