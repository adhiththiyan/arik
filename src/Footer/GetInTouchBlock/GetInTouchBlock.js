import React from 'react'

function GetInTouchBlock({title}) {
  return <div className="button inline-flex items-center space-x-2">
  <button className="inline-flex items-center">
    {title}
    <span className="ml-2">
      {/* <img src={l} alt="Arrow" className="inline-block"/> */}
    </span>
  </button>
</div>

}

export default GetInTouchBlock
