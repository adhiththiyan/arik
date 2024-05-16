import React from 'react'
import ProcessList from '../ContentPane/ProcessList/ProcessList'
import Button from '../CallToAction/Button'



function UserWeb() {
  return <>
    <ProcessList title = "Project in mind?" 
    heading = "Let’s make youWebsite shine" 
    desc = "Premium web design, webflow, and SEO services to help your business stand out."/>
    <div className='text-center mt-5'>
      <Button title="GET IN TOUCH"/>
    </div>
  </>
  
}

export default UserWeb
