import React from 'react';

import ArikLogo from '@arik-portfolio/images/arik.png';
import Cards from '@arik-portfolio/components/Cards';
import Button from '@arik-portfolio/components/CallToAction/Button';

function HeaderMenu() {
  return <>
    <div className="flex header-menu items-center justify-center mt-5">
      <Cards>
        <div className="flex py-2">
          <div className="px-4 py-2">
            <img src={ArikLogo} alt="Arik" width={51} height={18} />
          </div>
          <div className="px-4 py-2">
            <ul className="flex list-none p-0 satoshi">
              <li className="mx-2 uppercase tracking-widest navbar-menu-item"><a href="#services">Services</a></li>
              <li className="mx-2 uppercase tracking-widest navbar-menu-item"><a href="#work">Work</a></li>
              <li className="mx-2 uppercase tracking-widest navbar-menu-item"><a href="#about">About</a></li>
              <li className="mx-2 uppercase tracking-widest navbar-menu-item"><a href="#blog">Blog</a></li>
              <li className="mx-2 uppercase tracking-widest navbar-menu-item"><a href="#pages">Pages</a></li>
            </ul>
          </div>
          <div className="mr-2">
            <Button title="Let's talk" />
          </div>
        </div>
      </Cards>
    </div>

  </>
}

export default HeaderMenu
