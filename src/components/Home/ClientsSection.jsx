import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Import images
import cisco from "../../assets/cisco.png";
import version from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";

const clients = [
  { name: "Cisco", logo: cisco },
  { name: "Verizon", logo: version },
  { name: "Wells Fargo", logo: wells },
  { name: "Fidelity", logo: fidelity },
  { name: "HCL", logo: hcl },
  { name: "Infosys", logo: infosys },
];

const ClientsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const width = element.scrollWidth / 2; // since we duplicate items
    gsap.to(element, {
      x: -width,
      duration: 20, // speed
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Our Clients
      </h2>

      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-max"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-40 h-20 mx-6 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
