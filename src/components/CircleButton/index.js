/* eslint-disable comma-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

const CircleButton = ({
  width: buttonWidth,
  color,
  children,
  opacity,
  className,
  disable,
  style,
  ...props
}) => {
  return (
    <div
      className={classnames('circle-button-wrapper', className)}
      style={{
        ...style,
        width: buttonWidth,
        height: buttonWidth,
        border: `2px ${color} solid`,
        opacity,
        pointerEvents: disable && 'none'
      }}
      {...props}
    >
      <div className='button-icon'>
        {children}
      </div>
    </div>
  )
}

CircleButton.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
}

CircleButton.defaultProps = {
  width: '60px',
  color: '#009aef',
}

export default CircleButton
