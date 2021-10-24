import React, { useState } from 'react'
import { CheckCircleTwoTone, CloseCircleOutlined } from '@ant-design/icons'
import classes from './todoEdit.module.scss'

type TodoEditProps = {
  id: string
  label: string
  setEdit: (value: boolean) => void
  onChangeTodo: (id: string, label: string) => void
}

export const TodoEdit = ({ label, id, setEdit, onChangeTodo }: TodoEditProps) => {
  const [value, setValue] = useState(label)

  const onSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onClickOk = () => {
    onChangeTodo(id, value)
    setEdit(false)
  }

  const onSubmit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') onClickOk()
    if (event.key === 'Escape') setEdit(false)
  }

  return (
    <div>
      <input
        type="text"
        className={classes.todoEdit__edit}
        id={id}
        defaultValue={value}
        onChange={(event) => onSetValue(event)}
        onKeyDown={(event) => onSubmit(event)}
      />
      <button
        className={`${classes.todoEdit__btn} ${classes.todoEdit__btn_cancel}`}
        onClick={() => setEdit(false)}
      >
        <CloseCircleOutlined />
      </button>
      <button
        className={`${classes.todoEdit__btn} ${classes.todoEdit__btn_ok}`}
        onClick={onClickOk}
      >
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </button>
    </div>
  )
}
