import React from 'react';

const TestimonialCard = ({ logo, heading, desc, person, pname, pcompany, classes }) => {
  return (
    <div className={`card2 flex flex-col gap-4 p-4 md:p-6 lg:p-8 ${classes}`}>
      <div className='img-width'>
        <img src={logo} alt="Logo" className='w-full h-auto' />
      </div>
      <div>
        <h2 className='text-left text-lg md:text-xl lg:text-2xl font-semibold'>{heading}</h2>
      </div>
      <div>
        <p className='para text-left text-base md:text-lg lg:text-xl'>{desc}</p>
      </div>
      <div>
        <div className='logo flex items-center gap-4'>
          <img src={person} alt="Person" className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full' />
          <div>
            <span className='block text-left text-xs md:text-sm lg:text-base'>{pname}</span>
            <span className='text-left opacity-50 text-xs md:text-sm lg:text-base'>{pcompany}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
