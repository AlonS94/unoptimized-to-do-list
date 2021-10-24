import React, { useState } from 'react'
import classes from './filters.module.scss'

type filtersProps = {
  onChangeHidden: (name: string) => void
}

export const Filters = ({ onChangeHidden }: filtersProps) => {
  const [filters, setFilters] = useState([
    { name: 'All', active: true },
    { name: 'Active', active: false },
    { name: 'Completed', active: false },
  ])

  const onActiveFilters = (name: string) => {
    setFilters(() => filters.map((filter) => ({ ...filter, active: filter.name === name })))
    onChangeHidden(name)
  }

  const filtersList = filters.map((filter) => {
    return (
      <li className={classes.filters__item} key={filter.name}>
        <button
          disabled={filter.active}
          className={`${classes.filters__filter}
          ${filter.active ? classes.filters__filter_active : ''}`}
          onClick={() => onActiveFilters(filter.name)}
        >
          {filter.name}
        </button>
      </li>
    )
  })

  return <ul className={classes.filters}>{filtersList}</ul>
}
