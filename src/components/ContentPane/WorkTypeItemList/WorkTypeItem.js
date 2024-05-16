import React from "react";

function WorkTypeItem({ image }) {
  return (
    <div
      className="relative h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-cover bg-center work-type-container mb-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
    </div>
  );
}

export default WorkTypeItem;
