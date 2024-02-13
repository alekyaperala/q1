// NotFound.js

import React from 'react'
import './index.css'

const NotFound = ({changeRoute}) => {
  const handleClick = () => {
    changeRoute('/')
  }

  return (
    <div className="not-found-container">
      <h2>Page Not Found</h2>
      <button onClick={handleClick}>Go Home</button>
    </div>
  )
}

export default NotFound
