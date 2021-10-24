import React, { useEffect, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classes from './todoItem.module.scss'
import { ModalWindow } from '../ModalWindow'

type TodoItemProps = {
  id: string
  label: string
  completed: boolean
  date: Date
  toggleCompleted: (id: string) => void
  onDeleted: (id: string) => void
  setEdit: (value: boolean) => void
}

export const TodoItem = ({
  label,
  id,
  completed,
  toggleCompleted,
  onDeleted,
  setEdit,
  date,
}: TodoItemProps) => {
  useEffect(() => () => {
    clearInterval(indexInterval)
  })
  const [visibleModal, setVisibleModal] = useState(false)
  const [dateCreated, setDateCreated] = useState(
    formatDistanceToNow(new Date(date), { addSuffix: true }),
  )
  const todoDelete = () => {
    onDeleted(id)
  }

  const indexInterval = setInterval(() => {
    setDateCreated(formatDistanceToNow(new Date(date), { addSuffix: true }))
  }, 10000)

  return (
    <div className={classes.todoItem}>
      <input
        className={classes.todoItem__checkbox}
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => toggleCompleted(id)}
      />
      <label
        htmlFor={id}
        className={`${classes.todoItem__label} ${completed ? classes.todoItem__label_checked : ''}`}
      >
        <span className={`${completed ? classes.todoItem__description_checked : ''}`}>{label}</span>
        <span className={classes.todoItem__timeCreated}>created {dateCreated}</span>
      </label>
      <button
        className={`${classes.todoItem__icon} ${classes.todoItem__IconEdit}`}
        onClick={() => setEdit(true)}
      />
      <button
        className={`${classes.todoItem__icon} ${classes.todoItem__iconDestroy}`}
        onClick={() => setVisibleModal(true)}
      />
      {visibleModal ? <ModalWindow funcYes={todoDelete} funcNo={setVisibleModal} /> : null}
    </div>
  )
}
