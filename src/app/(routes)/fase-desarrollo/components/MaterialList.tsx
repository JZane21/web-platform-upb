"use client";

import React from "react";

const MaterialList = () => {
  const materialList: {
    link: string;
    text: string;
  }[] = [
    {
      link: "https://docs.google.com/document/d/1qPkYEoH5hHxJ6Wa3SKWFfFIyMlSKng7PmAVz34lSCdM/edit",
      text: "Herramientas de gestion de proyectos",
    },
    {
      link: "https://docs.google.com/document/d/1c2mBlmHD3EIQXkU4a-OKCvxmIF1VVOLRJGNCgVs4Zw0/edit",
      text: "Diagramas de Secuencia",
    },
    {
      link: "https://docs.google.com/document/d/1c9RHjvgqyscIl6UhmC081he8EFfj5NCvik4UCPN4_fs/edit",
      text: "Diagramas de Actividades",
    },
    {
      link: "https://app.diagrams.net/#G1lwntGsSRZGyW3aEHoZk41k2HVGjUwwEz",
      text: "Diagramas de Paquetes",
    },
    {
      link: "https://app.diagrams.net/#G19yzHRl-4-1s4_oaKTkkp9abYXW9jue6u",
      text: "Diagramas WAE",
    },
    {
      link: "https://app.diagrams.net/#G1XHZR2mVarOpzuQDSGl9NWzMrzBcstjcP",
      text: "Diagramas de clases",
    },
    {
      link: "https://app.diagrams.net/#G1XHZR2mVarOpzuQDSGl9NWzMrzBcstjcP#%7B%22pageId%22%3A%22hlixAKjDROkvpIncMT9u%22%7D",
      text: "Diagrama C4",
    },
    {
      link: "https://app.diagrams.net/#G1AYQdEYc8iS90XvC3Am3O_2snhcdkPuxb",
      text: "Casos de uso",
    },
    {
      link: "https://docs.google.com/document/d/1lm_Kjyndg-kerxE2DrTiPx-0QWmWk-PdyDzwBgtstto/edit",
      text: "Requisitos funcionales y no funcionales",
    },
    {
      link: "https://www.figma.com/file/54mFTHiuT3MLKMPbtNIfpU/Mockups---Black%2FWhite?type=design&node-id=0-1&mode=design&t=XooEfFY7gFKOzB9I-0",
      text: "Mockups",
    },
    {
      link: "https://docs.google.com/document/d/1mIeEr6E6-9Z6CIlb0XRJfVQb9bUWGASalwWGmYiz5PQ/edit?usp=sharing",
      text: "Capas del sistema y herramientas de desarrollo",
    },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mt-4 mx-8">
        Enlaces a nuestro material
      </h2>
      <ul className="list-disc pl-6 m-2 mx-8">
        {materialList.map((item, index) => (
          <li key={index + 1}>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialList;
