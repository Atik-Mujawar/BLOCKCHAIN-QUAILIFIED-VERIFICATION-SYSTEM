import React from 'react'
import {Link} from "react-router-dom"
import "./Button.css"

function Button() {
  return (
    <Link to="register">
        <button className='btn'>Register</button>
    </Link>
  )
}
export default Button