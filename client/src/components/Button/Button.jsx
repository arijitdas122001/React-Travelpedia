import React from 'react'
import './Button.css'
const Button = ({children,...others}) => {
  return (
   <button className="btn" {...others}>
    {children}
   </button>
  )
}

export default Button
