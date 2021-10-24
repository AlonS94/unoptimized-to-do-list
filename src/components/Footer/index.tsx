import React from 'react'
import { observer } from 'mobx-react-lite'
import { Filters } from './Filters'
import classes from './footer.module.scss'
import { useStore } from '../../store/useStore'

export const Footer = observer(() => {
  const { todoStore } = useStore()
  const { onChangeHidden, todo, ocClearCompleted } = todoStore

  const todoCounter = todo.filter((todos) => !todos.completed).length

  return (
    <footer className={classes.footer}>
      <span>{todoCounter} items left</span>
      <Filters onChangeHidden={onChangeHidden} />
      <button onClick={ocClearCompleted} className={classes.footer__clearBtn}>
        Clear completed
      </button>
    </footer>
  )
})
