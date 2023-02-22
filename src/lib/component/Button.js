import React from 'react';
import './button.css'

const Button = (props) => {
  return (
    <button
      className={props.btnColor}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}>
      <h4>{props.label}</h4>
    </button>
  )
}
export default Button;