import React from 'react'
import Heading from "@arik-portfolio/components/Heading";
import ParagraphContent from "@arik-portfolio/components/ParagraphContent";
import TestimonialCard from './TestimonialCard';
import logo1 from '@arik-portfolio/images/company1.png'
import logo2 from '@arik-portfolio/images/company2.png'
import logo3 from '@arik-portfolio/images/company3.png'
import logo4 from '@arik-portfolio/images/company4.png'
import logo5 from '@arik-portfolio/images/logo (3).png'
import logo6 from '@arik-portfolio/images/logo (1).png'

import person1 from '@arik-portfolio/images/pexels-anastasiia-chaikovska-12095131 1.png'
const cards = [
  {
    logo: logo2,
    heading: 'Amazing Results with Arik’s Premium Web Design Services.',
    desc: 'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
    person: person1,
    pname: 'John Smith',
    pcompany: 'ABC Company'
  },
  {
    logo: logo6,
    heading: 'Professional, Collaborative Web Design Experience with Arik.',
    desc: 'I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.',
    person: person1,
    pname: ' KAREN LEE',
    pcompany: 'Redwood technology'
  },
  {
    logo: logo5,
    heading: 'Web Design and Content Solutions: Stand Out from the Crowd.',
    desc: "rik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
    person: person1,
    pname: 'EMILY DAVIS',
    pcompany: 'Greenway industries'
  },
]
const cards2 = [
  {
    logo: logo4,
    heading: 'Expert Webflow and SEO Services: Excellent Work, Great Results.',
    desc: "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result",
    person: person1,
    pname: 'DAVID KIM',
    pcompany: 'Design Inc.'
  },
  {
    logo: logo3,
    heading: 'Expertise in Web Design: Second to None with Arik.',
    desc: "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
    person: person1,
    pname: 'Andrew Thompson',
    pcompany: 'Silverstone Corporation'
  },
  {
    logo: logo1,
    heading: 'High-Quality Web Design: Exceptional Attention to Detail with Arik.',
    desc: "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
    person: person1,
    pname: 'Ryan Chen',
    pcompany: 'Golden Gate Solutions'
  },
]

function TestimonialsList() {
  return <>
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center mt-10 md:mt-16 mb-10 px-4">
      <Heading type="h2" overrideClassNames="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-thin">
        What my clients say
      </Heading>
      <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
        <ParagraphContent>
          See what my clients have to say about working with me and the results I helped them achieve.
        </ParagraphContent>
      </div>
    </div>

    <div className='grid gap-3'>
      <div className='flex gap-4 mx-auto'>
        <div className='grid gap-4'>
          {cards.map((items) => (
            <TestimonialCard
              logo={items.logo}
              heading={items.heading}
              desc={items.desc}
              person={items.person}
              pname={items.pname}
              pcompany={items.pcompany}
            />
          ))}
        </div>
        <div className='grid gap-4'>
          {cards2.map((items) => (
            <TestimonialCard
              logo={items.logo}
              heading={items.heading}
              desc={items.desc}
              person={items.person}
              pname={items.pname}
              pcompany={items.pcompany}
            />
          ))}
        </div>
      </div>
    </div>
  </>
}

export default TestimonialsList
