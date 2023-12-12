import React from "react";

interface Props {
  generalTitle: string;
  requisitos: {
    title: string;
    items: string[];
  }[];
}

const RequirementsList = ({ generalTitle, requisitos }: Props) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-4 mt-10">{generalTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {requisitos.map((item, indexOne) => (
          <div key={indexOne + 1} className="border p-6 rounded-md bg-white">
            <h4 className="text-lg font-bold mb-4">{item.title}</h4>
            <ul className="list-disc m-5">
              {item.items.map((element, indexTwo) => (
                <li key={indexTwo + 1} className="text-base font-normal">
                  {element}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsList;
