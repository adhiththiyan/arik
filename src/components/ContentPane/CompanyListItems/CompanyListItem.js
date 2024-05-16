import React from 'react'

function CompanyListItem({ title, link }) {
  return (
    <div className='img-width'>
      <img src={link} alt={title} />
    </div>
    )
}

export default CompanyListItem
