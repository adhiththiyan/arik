import React from "react";
import HeroBannerImageSource from '@arik-portfolio/images/hero-banner.png';
import badge1 from "@arik-portfolio/images/Badge.png"
import badge2 from "@arik-portfolio/images/Badge (1).png"
import badge3 from "@arik-portfolio/images/Badge (2).png"
import badge4 from "@arik-portfolio/images/Badge (3).png"



function HeroSection({ image }) {
  return (
    <div className="relative">
      <div className="flex justify-center items-center h-screen">
        <img src={HeroBannerImageSource} alt="Image" width={700} height={500} />
      </div>
     <div className="flex justify-betwenn">
        <h2 className='text-5xl font-thin absolute top-56 right-4'>Andersson</h2>
        <h2 className='text-5xl font-thin absolute top-56'>Arik Andersso</h2>
     </div>
      <div className="flex gap-16 mx-auto w-3/4">
      <div className="flex-1">
        <h2 className='text-5xl font-thin'>A website that leaves
          a lasting impression!</h2>
      </div>
      <div className="flex-1"> 
        <p className='para text-left'>Hi, I'm Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!</p>
        <div className="mt-5">
          <ul className="flex gap-3">
            <li><img src={badge1}/></li>
            <li><img src={badge2}/></li>
            <li><img src={badge3}/></li>
            <li><img src={badge4}/></li>
          </ul>
         </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
