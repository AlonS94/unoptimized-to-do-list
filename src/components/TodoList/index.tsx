import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/useStore'
import classes from './todoList.module.scss'
import { Todo } from './Todo'

export const TodoList = observer(() => {
  const { todoStore } = useStore()
  const { todo } = todoStore

  const list = todo.map((todos) => {
    const { id, hidden } = todos
    return (
      <li key={id} className={`${classes.todoList__listItem} ${hidden ? classes.hidden : ''}`}>
        <Todo {...todos} />
      </li>
    )
  })

  return <ul className={classes.todoList__list}>{list}</ul>
})
