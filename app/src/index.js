import React from 'react'
import ReactDOM from 'react-dom/client'

function Greetering() {
  // return <h2>My First Component</h2>
  // return React.createElement('h2', {}, 'My First Component')
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'My First Component')
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greetering />)
