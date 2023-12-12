"use client";

import React from "react";
import ListFigures from "./ListFigures";

const Diagrams = () => {
  const diagramsList: {
    title: string;
    images: string[];
  }[] = [
    {
      title: "Diagramas de Secuencia",
      images: [
        "diagrama-secuencia-uno.png",
        "diagrama-secuencia-dos.png",
        "diagrama-secuencia-tres.png",
      ],
    },
    {
      title: "Diagramas de Actividades",
      images: [
        "diagrama-actividades-uno.png",
        "diagrama-actividades-dos.png",
        "diagrama-actividades-tres.png",
      ],
    },
    {
      title: "Diagramas WAE",
      images: [
        "diagrama-wae-uno.png",
        "diagrama-wae-dos-uno.png",
        "diagrama-wae-dos-dos.png",
      ],
    },
    {
      title: "Diagramas de Clases",
      images: ["diagrama-de-clases.png"],
    },
    {
      title: "Diagramas de Paquetes",
      images: ["diagrama-de-paquetes.png"],
    },
    {
      title: "Diagramas C4",
      images: ["diagrama-C4-uno.png", "diagrama-C4-dos.png"],
    },
    {
      title: "Casos de uso",
      images: ["caso-uso-uno.png", "caso-uso-dos.png", "caso-uso-tres.png"],
    },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mt-4 mx-8">Diagramas</h2>

      {diagramsList.map((item, index) => (
        <ListFigures
          key={index + 1}
          titleView={item.title}
          listImages={item.images}
        />
      ))}
    </div>
  );
};

export default Diagrams;
