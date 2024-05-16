import React from "react";
import CompanyListItem from "./CompanyListItem";

const IMAGES = [
  {
    title: "Image 1",
    link: "images/company1.png",
  },
  {
    title: "Image 2",
    link: "images/logo (1).png",
  },
  {
    title: "Image 3",
    link: "images/company2.png",
  },
  {
    title: "Image 5",
    link: "images/logo (3).png",
  },
  {
    title: "Image 3",
    link: "images/company3.png",
  },
  {
    title: "Image 4",
    link: "images/company4.png",
  },
];

function CompanyListItems() {
  return (
    <div className="flex justify-between items-center company-list-container mx-20 flex-wrap">
      {IMAGES.map((item) => (
        <CompanyListItem key={item.title} title={item.title} link={item.link} />
      ))}
    </div>
  );
}

export default CompanyListItems;
