import React from 'react'
import Heading from "@arik-portfolio/components/Heading";
import ParagraphContent from "@arik-portfolio/components/ParagraphContent";

function ProcessList({title = "THE PROCESS", heading = "Your Website in 5 steps", desc = "Our process ensures that we create a website tailored to your business needs."}) {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 text-center mx-auto mt-16 md:mt-24 lg:mt-32 grid gap-4">
  <ParagraphContent>
    <div className="text-base md:text-lg lg:text-xl">
      {title}
    </div>
  </ParagraphContent>
  <Heading type="h2" overrideClassNames="text-5xl md:text-7xl lg:text-9xl font-thin">
    {heading}
  </Heading>
  <ParagraphContent>
    <div className="text-sm md:text-base lg:text-lg">
      {desc}
    </div>
  </ParagraphContent>
</div>

  )
}

export default ProcessList
