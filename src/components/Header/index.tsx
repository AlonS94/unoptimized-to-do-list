import React, { useState } from 'react'
import classes from './header.module.scss'
import { useStore } from '../../store/useStore'

export const Header = () => {
  const { todoStore } = useStore()
  const { onAddTodo } = todoStore
  const [label, setLabel] = useState('')

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddTodo(label)
      setLabel('')
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(() => event.target.value)
  }

  return (
    <header>
      <h1 className={classes.header__heading}>todos</h1>
      <input
        className={classes.header__newTodo}
        placeholder="What needs to be done?"
        onKeyDown={(event) => onSubmit(event)}
        onChange={(event) => onChange(event)}
        value={label}
      />
    </header>
  )
}
