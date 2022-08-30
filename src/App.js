import React from 'react'
import './Main.scss'
import btnStyles from './Button.module.css'
import LOGO from './images/reactlogo.png'

const App = () => {
  return (
    <div>
    <h1>I am heading</h1>
    <button className={btnStyles.success}>SUCCESS</button>
    <button className={btnStyles.error}>ERROR</button>
    <img src={LOGO} />
    </div>
  )
}

export default App