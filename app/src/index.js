import React from 'react'
import ReactDOM from 'react-dom/client'

function Greetering() {
  return (
    // <React.Fragment>
    <>
      <h3>My First Fragment</h3>
      <ul>
        <li>Hello world!</li>
      </ul>
    </>
    /* </React.Fragment> */
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greetering />)
