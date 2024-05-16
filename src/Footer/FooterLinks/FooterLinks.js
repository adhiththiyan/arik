import React from 'react'

function FooterLinks({head,link1, link2, link3, link4, link5 }) {
  return(
  <div className='footer'>
      <div className='footer-head'>
        <h1>{head}</h1>
      </div>
      <ul>
        <li>{link1}</li>
        <li>{link2}</li>
        <li>{link3}</li>
        <li>{link4}</li>
        <li>{link5}</li>
      </ul>
  </div>
  )
}

export default FooterLinks
