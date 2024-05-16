import React from "react";
import WorkTypeItem from "./WorkTypeItem";
import Heading from "@arik-portfolio/components/Heading";
import linkImg from "@arik-portfolio/images/ph_arrow-up-right-light.png"


const WORK_TYPES = [
  { type: "Sonic", image: "images/worktype3.png" },
  { type: "Space", image: "images/worktype1.png" },
  { type: "Solar", image: "images/worktype4.png" },
  { type: "Nova", image: "images/worktype2.png" },

];

function WorkTypeItemList() {
  return (
    <div className="mt-24 ">
      <div className="flex justify-between items-center mb-5">
      <Heading type="h2" overrideClassNames="text-6xl font-thin">Selected Work</Heading>
      <p className="link flex gap-2 item-center uppercase opacity-50"><span><img src={linkImg} className=""/></span>see all</p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        {WORK_TYPES.map((item) => (
        <WorkTypeItem type={item.type} image={item.image} />
      ))}
    </div>
    </div>
  );
}

export default WorkTypeItemList;
