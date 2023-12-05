"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const page = () => {
  return (
    <ContentPage>
      <div className="p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">
          Proyecto UPB: Soluciones y Objetivos
        </h1>

        {/* Sección de Soluciones */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Soluciones</h2>

          {/* Problema dentro de los equipos de trabajo */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Problema dentro de los equipos de trabajo
            </h3>
            <ul className="list-disc list-inside">
              <li>
                No existe una documentación detallada acerca de las metodologías
                o procesos.
              </li>
              <li>
                Los equipos de distintas áreas de la universidad no están
                relacionados entre sí por falta de comunicación.
              </li>
            </ul>
            <p className="mt-2">
              Para solventar estos problemas, se establecerán protocolos claros
              de comunicación y procesos de trabajo para cada equipo,
              facilitando la adaptación de los nuevos miembros.
            </p>
          </div>
        </div>

        {/* Sección de Objetivos Específicos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Objetivos Específicos</h2>
          <ul className="list-disc list-inside">
            <li>
              Crear un paquete de bienvenida integral para nuevos empleados.
            </li>
            <li>Establecer un programa continuo de desarrollo profesional.</li>
            {/* ... (Resto del contenido similar) */}
          </ul>
        </div>

        {/* Sección de Información Adicional */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Información Adicional</h2>
          <p className="mb-4">
            Crear un entorno acogedor y eficiente es crucial para el crecimiento
            y bienestar de la comunidad universitaria.
          </p>
          <p>
            Esta plataforma web busca brindar soluciones a problemas concretos,
            proporcionando un ambiente propicio para el aprendizaje y la
            colaboración dentro de la UPB.
          </p>
        </div>
      </div>
    </ContentPage>
  );
};

export default page;
