import React from 'react'
import FooterLinks from '../FooterLinks/FooterLinks'
import CopyrightBlock from '../CopyrightBlock/CopyrightBlock'
import NavigateToTop from '../NavigateToTop/NavigateToTop'

function FooterBanner() {
  const Links = [
    {
      head:"arik.",
      link1:"INSTAGRAM",
      link2:"TWITTER",
      link3:"DRIBBLE",
      link4:"BEHANCE",
      link5:""
    },
    {
      head:"Pages",
      link1:"HOME",
      link2:"SERVICES",
      link3:"ABOUT",
      link4:"CONTACT",
      link5:""
    },
    {
      head:"CMS",
      link1:"WORK",
      link2:"WORK SINGLE",
      link3:"BLOG",
      link4:"BLOG POST",
      link5:""
    },
    {
      head:"Utility Pages",
      link1:"404 ERROR PAGE",
      link2:"PROJECT PROTECTED",
      link3:"STYLEGUIDE",
      link4:"LICENSING",
      link5:"CHANGELOG"
    }
  ]
  return(
    <div className='mt-32 mx-auto'>
        <div className='flex justify-between flex-wrap'>
      {Links.map((link)=>(
        <FooterLinks
        head = {link.head}
        link1 = {link.link1}
        link2 = {link.link2}
        link3 = {link.link3}
        link4 = {link.link4}
        link5 = {link.link5}/>
      ))}
  </div>
  <div className='flex justify-between my-10'>
      <CopyrightBlock/>
      <NavigateToTop/>
  </div>
    </div>
  
  )
}

export default FooterBanner
