import servicesData from "../../data/servicesData.js";
import Services from "./Services.jsx";

import React from "react";

function ServicesList() {
  return (
    <div className="d-flex flex-wrap  gap-3">
      {servicesData.map((service, index) => {
      return(
          <Services
          key={index}
          icon={service.icon}
          bgImage={service.bgImage}
          description={service.description}
        />
      )
      })}
    </div>
  );
}

export default ServicesList;
