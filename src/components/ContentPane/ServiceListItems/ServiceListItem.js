import React from "react";
import linkImg from "@arik-portfolio/images/ph_arrow-up-right-light.png"

function ServiceListItem({ id, title, description, link }) {
  return (
    <div className="border rounded-lg pr-card service-card mt-12">
      <div className="text-left">
        <p className="text-lg mb-2 para">{id}</p>
        <p className="text-xl mb-2">{title}</p>
        <p className="para mb-4">{description}</p>
        <div className="flex items-center">
          <p className="link flex gap-2 item-center para uppercase"><span><img src={linkImg} className=""/></span>{link}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceListItem;
