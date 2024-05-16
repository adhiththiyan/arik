import React from "react";
import Header from "@arik-portfolio/components/Header";
import ServiceListItems from "@arik-portfolio/components/ContentPane/ServiceListItems";
import CompanyListItems from "@arik-portfolio/components/ContentPane/CompanyListItems";
import WorkTypeItemList from "@arik-portfolio/components/ContentPane/WorkTypeItemList";
import ProcessList from "@arik-portfolio/components/ContentPane/ProcessList";
import TestimonialsList from "@arik-portfolio/components/ContentPane/TestimonialsList";
import HeroSection from "@arik-portfolio/components/ContentPane/HeroSection";
import UserWeb from "@arik-portfolio/components/UserInfo";
import FooterBanner from "/src/Footer/FooterBanner/FooterBanner.js";



function FrontPage() {
  return (
    <div className="container mx-auto">
      <Header />
      <CompanyListItems />
      <ServiceListItems />
      <WorkTypeItemList />
      <ProcessList/>
      <TestimonialsList/>
      <HeroSection/>
      <UserWeb/>
      <FooterBanner/>
    </div>
  );
}

export default FrontPage;
