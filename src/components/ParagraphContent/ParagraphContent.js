import React from 'react'

function ParagraphContent({ children }) {
  return <div className='flex justify-center'>
    <p className='head-para'>{children}</p>
  </div>
}

export default ParagraphContent
