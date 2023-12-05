"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";
import Image from "next/image";

const FaseDesarrollo = () => {
  return (
    <ContentPage>
      <div className="bg-slate-100 w-full min-h-screen p-10 flex flex-col">
        <h1 className="text-3xl font-bold">Fase de Diseño y Desarrollo</h1>

        <h2 className="text-xl font-bold mt-4 mx-8">
          Metodologías de desarrollo, SCRUM
        </h2>
        <div className="w-full mx-auto m-8 flex flex-row">
          <div className="flex flex-col w-1/2 p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">¿Qué es SCRUM?:</h2>

              <p className="text-gray-700">
                SCRUM es un marco de trabajo ágil que se centra en la
                flexibilidad y colaboración para el desarrollo de proyectos. Su
                enfoque se basa en entregas incrementales y adaptativas, ideal
                para proyectos web donde los requisitos pueden cambiar
                rápidamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Roles Principales:</h2>
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  Product Owner: Representa las necesidades del cliente y define
                  las prioridades del proyecto. Responsable de maximizar el
                  valor del producto.
                </li>
                <li className="text-gray-700">
                  Scrum Master: Facilita el proceso SCRUM, elimina obstáculos y
                  asegura que el equipo siga las prácticas ágiles.
                </li>
                <li className="text-gray-700">
                  Equipo de Desarrollo: Profesionales que trabajan en el
                  desarrollo del producto.
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col w-1/2 p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Elementos Clave:</h2>
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  Product Backlog: Lista priorizada de todas las funcionalidades
                  y tareas del proyecto.
                </li>
                <li className="text-gray-700">
                  Sprint Backlog: Subset del Product Backlog seleccionado para
                  un sprint específico.
                </li>
                <li className="text-gray-700">
                  Incremento: Versión mejorada y funcional del producto después
                  de cada sprint.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Ciclo de Desarrollo (Sprint):
              </h2>
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  Planning Meeting: Reunión inicial para planificar el sprint,
                  donde se seleccionan tareas del Product Backlog.
                </li>
                <li className="text-gray-700">
                  Daily Standup: Breve reunión diaria para discutir el progreso
                  y posibles problemas.
                </li>
                <li className="text-gray-700">
                  Review Meeting: Al final del sprint, se presenta el incremento
                  al Product Owner y stakeholders para obtener feedback.
                </li>
                <li className="text-gray-700">
                  Retrospective: Evaluación interna del equipo para identificar
                  mejoras continuas.
                </li>
              </ul>
            </section>
          </div>
        </div>
        <h2 className="text-xl font-bold mx-8">Herramientas</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mt-4">
              Gestionar la Organización del proyecto
            </h2>
            <Image
              src="/des6.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-3/6"
            />

            <h2 className="text-xl font-semibold mt-4">Seleccionamos:</h2>
            <Image
              src="/trello.png"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-10 w-2/5"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mt-4">
              Herramientas para el diseño de la estructura
            </h2>
            <Image
              src="/des5.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-3/5"
            />
            <h2 className="text-xl font-semibold mt-4">Seleccionamos:</h2>
            <Image
              src="/figma.png"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-2/5"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-4 mx-8">Diseño de las pantallas</h2>
        <h2 className="text-xl font-bold mt-4 mx-14">Vista de expositores</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/des3.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-4/5"
            />
            <div className="text-gray-500">Vista Desktop</div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/des4.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-4/5"
            />
            <div className="text-gray-500">Vista Mobile</div>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-4 mx-14">Vista de usuarios</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/des10.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-4/5"
            />
            <div className="text-gray-500">Vista Desktop</div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/des11.jpg"
              width={100}
              height={100}
              alt="Aqui va una imagen chida :D"
              className="my-4 w-4/5"
            />
            <div className="text-gray-500">Vista Mobile</div>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-4 mx-8">
          Enlaces a nuestro material
        </h2>
        <ul className="list-disc pl-6 m-2 mx-8">
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://docs.google.com/document/d/15rOgd75qBCAUeZ51WFTcU9rQfPkKbkUbevUp7gkRVxE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Herramientas de gestion de proyectos
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://www.figma.com/file/54mFTHiuT3MLKMPbtNIfpU/Mockups---Black%2FWhite?type=design&node-id=0%3A1&mode=design&t=lPapWLsbcwXmkOea-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mockups en Figma
            </a>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
};

export default FaseDesarrollo;
