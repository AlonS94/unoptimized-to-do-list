import React from 'react'
import arrow from '../../assets/img/modalWindow/arrow.svg'
import circle from '../../assets/img/modalWindow/circle.svg'
import classes from './modalWindow.module.scss'

type modalWindowProps = {
  funcYes: () => void
  funcNo: (value: boolean) => void
}

export const ModalWindow = ({ funcYes, funcNo }: modalWindowProps) => {
  return (
    <div className={classes.modalWindow}>
      <div className={classes.modalWindow__description}>
        <img src={circle} alt="warning" />
        <span className={classes.modalWindow__text}>Are you sure to delete this todo?</span>
      </div>
      <div className={classes.modalWindow__buttonWrapper}>
        <button
          onClick={() => funcNo(false)}
          className={`${classes.modalWindow__btn} ${classes.modalWindow__btn_no}`}
        >
          NO
        </button>
        <button
          onClick={funcYes}
          className={`${classes.modalWindow__btn} ${classes.modalWindow__btn_yes}`}
        >
          YES
        </button>
      </div>
      <img className={classes.modalWindow__arrow} src={arrow} alt="arrow" />
    </div>
  )
}
