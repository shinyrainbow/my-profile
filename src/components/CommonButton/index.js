import React from 'react'
import className from 'classnames'
import './index.scss'

const CommonButton = ({ text, color }) => {
  return (
    <button className={className('common-button', color==='white'&&'white-border')} >{text}</button>
  )
}

export default CommonButton