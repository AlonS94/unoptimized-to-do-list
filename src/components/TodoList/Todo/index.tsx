import React, { useState } from 'react'
import { TodoItem, TodoEdit } from '../../../utils'
import { useStore } from '../../../store/useStore'

type TodoProps = {
  id: string
  label: string
  completed: boolean
  date: Date
}

export const Todo = (props: TodoProps) => {
  const { todoStore } = useStore()
  const { onChangeTodo, toggleCompleted, onDeleted } = todoStore
  const { label, id } = props
  const [edit, setEdit] = useState(false)

  return (
    <>
      {!edit ? (
        <TodoItem
          {...props}
          setEdit={setEdit}
          toggleCompleted={toggleCompleted}
          onDeleted={onDeleted}
        />
      ) : null}
      {edit ? (
        <TodoEdit label={label} id={id} setEdit={setEdit} onChangeTodo={onChangeTodo} />
      ) : null}
    </>
  )
}
