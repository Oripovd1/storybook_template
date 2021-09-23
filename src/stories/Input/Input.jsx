import React, { useState } from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cls from './Input.module.scss'

export default function Input({
  id,
  label,
  type,
  placeholder,
  size,
  boxStyles,
  ...props
}) {
  const [mode, setMode] = useState(true)

  return (
    <div className={cls.root} style={boxStyles}>
      <label htmlFor={id} className={cls.label}>
        {label}
      </label>
      <div className={cls.input_wrapper}>
        <input
          id={id}
          type={type === 'password' ? (mode ? 'password' : 'text') : type}
          placeholder={placeholder}
          {...props}
          className={cls.input}
        />
        {type === 'password' && (
          <button
            type='button'
            className={cls.icon}
            onClick={() => setMode(!mode)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        )}
      </div>
    </div>
  )
}
