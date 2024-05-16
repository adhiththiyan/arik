import React from "react";
import HeaderBanner from "./HeaderBanner";
import HeaderMenu from "./HeaderMenu";
import Heading from "@arik-portfolio/components/Heading";
import ParagraphContent from "@arik-portfolio/components/ParagraphContent";

function Header() {
  return <>
    <div className="menu">
  <HeaderMenu />
</div>

<div className="banner">
  <HeaderBanner />
</div>
<div className="banner-text-container flex justify-center items-center">
<div className="banner-text mt-10 md:mt-16 lg:mt-20 px-4">
  <Heading type="h1" overrideClassNames="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
    Web Designer & Developer
  </Heading>
  <div className="mt-5 max-w-3xl">
    <ParagraphContent>
      Premium web design, development, and SEO services to help your business stand out.
    </ParagraphContent>
  </div>
</div>
</div>


  </>
}

export default Header;
