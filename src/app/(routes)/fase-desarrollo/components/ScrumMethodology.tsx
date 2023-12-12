"use client";

import React from "react";

const ScrumMethodology = () => {
  const cicloDesarrolloSprint: string[] = [
    `Planning Meeting: Reunión inicial para planificar el sprint,
    donde se seleccionan tareas del Product Backlog.`,
    `Daily Standup: Breve reunión diaria para discutir el progreso
    y posibles problemas.`,
    `Review Meeting: Al final del sprint, se presenta el incremento
    al Product Owner y stakeholders para obtener feedback.`,
    `Retrospective: Evaluación interna del equipo para identificar
    mejoras continuas.`,
  ];

  const elementosClaveSprint: string[] = [
    `Product Backlog: Lista priorizada de todas las funcionalidades
    y tareas del proyecto.`,
    `Sprint Backlog: Subset del Product Backlog seleccionado para
    un sprint específico.`,
    `Incremento: Versión mejorada y funcional del producto después
    de cada sprint.`,
  ];

  const rolesPrincipalesScrum: string[] = [
    `Product Owner: Representa las necesidades del cliente y define
    las prioridades del proyecto. Responsable de maximizar el
    valor del producto.`,
    `Scrum Master: Facilita el proceso SCRUM, elimina obstáculos y
    asegura que el equipo siga las prácticas ágiles.`,
    `Equipo de Desarrollo: Profesionales que trabajan en el
    desarrollo del producto.`,
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mt-4 mx-8">
        Metodologías de desarrollo, SCRUM
      </h2>
      <div className="w-full mx-auto m-8 flex flex-row">
        <div className="flex flex-col w-1/2 p-8">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">¿Qué es SCRUM?:</h2>

            <p className="text-gray-700">
              SCRUM es un marco de trabajo ágil que se centra en la flexibilidad
              y colaboración para el desarrollo de proyectos. Su enfoque se basa
              en entregas incrementales y adaptativas, ideal para proyectos web
              donde los requisitos pueden cambiar rápidamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Roles Principales:</h2>
            <ul className="list-disc pl-6">
              {rolesPrincipalesScrum.map((item, index) => (
                <li key={index + 1} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="flex flex-col w-1/2 p-8">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Elementos Clave:</h2>
            <ul className="list-disc pl-6">
              {elementosClaveSprint.map((item, index) => (
                <li key={index + 1} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Ciclo de Desarrollo (Sprint):
            </h2>
            <ul className="list-disc pl-6">
              {cicloDesarrolloSprint.map((item, index) => (
                <li key={index + 1} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScrumMethodology;
