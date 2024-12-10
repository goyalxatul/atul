import React from "react";

const Timeline = () => {
  const timelineData = [
    { year: "2024", items: ["Quartic.ai"] },
    { year: "2023", items: ["HiLabs", "Shelf"] },
    { year: "2022", items: ["Parth"] },
    { year: "2021", items: ["Fieldproxy YC W22", "Appsecure"] },
  ];

  return (
    <div className="flex overflow-x-auto bg-gray-900 py-6 px-4 h-72">
      <div className="flex items-center space-x-10">
        {timelineData.map((data) => (
          <div key={data.year} className="text-center">
            <h3 className="text-gray-400 text-lg mb-4">{data.year}</h3>
            {data.items.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-800 text-white text-sm py-4 px-6 rounded-lg mb-4"
              >
                {item}
                <div className="absolute h-12 w-0.5 bg-lime-400 left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
