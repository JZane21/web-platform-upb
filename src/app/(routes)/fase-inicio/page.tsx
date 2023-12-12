"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const FaseInicio = () => {
  return (
    <ContentPage>
      <div className="h-full overflow-y-auto p-4">
        {/* Sección de Fase de Inicio */}
        <h2 className="text-4xl font-semibold mb-4">Fase de Inicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Análisis de la problemática */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Análisis de la problemática
              </h3>
              <p>
                ¿Cómo podríamos brindar la información necesaria para la
                integración de los nuevos empleados en la Universidad Privada
                Boliviana con uso de nuevas tecnologías web?
              </p>
            </div>

            {/* Objetivo Principal */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Objetivo Principal</h3>
              <p>
                Desarrollar un sistema de comunicación para la integración de
                nuevos empleados en la Universidad Privada Boliviana
              </p>
            </div>

            {/* Objetivos Específicos */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Objetivos Específicos
              </h3>
              <ul>
                <li>
                  Proponer la comunicación y eficiencia en los equipos de
                  trabajo de la universidad.
                </li>
                <li>
                  Implementar procesos para la actualización y aplicación
                  efectiva de los conocimientos adquiridos en capacitaciones.
                </li>
                <li>
                  Emitir información de los servicios ofrecidos por la
                  universidad.
                </li>
                <li>
                  Plantear el proceso de onboarding para los nuevos empleados
                  para una mejor integración y comprensión de la universidad.
                </li>
              </ul>
            </div>

            {/* Alcances */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Alcances</h3>
              {/* ... (Resto del contenido) */}
            </div>

            {/* Límites */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Límites</h3>
              {/* ... (Resto del contenido) */}
            </div>

            {/* Título del proyecto */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Título del proyecto
              </h3>
              <p>
                Sistema de comunicación e Integración de nuevos empleados - Caso
                Universidad Privada Boliviana
              </p>
            </div>

            {/* Análisis BPWin a 2do nivel */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Análisis BPWin a 2do nivel
              </h3>
              <a
                className="text-blue-400 hover:font-semibold hover:text-blue-800"
                href="RedLaboralUPB.drawio"
                target="_blank"
                rel="noopener noreferrer"
              >
                RedLaboralUPB.drawio
              </a>
            </div>
          </div>

      </div>
    </ContentPage>
  );
};

export default FaseInicio;
