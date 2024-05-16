import React from 'react'

function Cards({ children, overrideClassNames = "" }) {
  return <div className="cards">{children}</div>
}

export default Cards
