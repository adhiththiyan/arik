import React from "react";
import ServiceListItem from "./ServiceListItem";

const SERVICES = [
  {
    id: "01",
    title: "Web Design",
    description: "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    link: "About Webdesign",
  },
  {
    id: "02",
    title: "Development",
    description: "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    link: "About Webdesign",
  },
  {
    id: "03",
    title: "SEO",
    description: "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: "About Webdesign",
  },
];

function ServiceListItems() {
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-32">
      {SERVICES.map((item) => (
        <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3">
          <ServiceListItem
            id={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}
    </div>
  );
}

export default ServiceListItems;
