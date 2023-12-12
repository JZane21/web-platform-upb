"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";
import Image from "next/image";
import ishikawa from "../../../assets/ishikawa.jpg";
const FaseInicio = () => {
  return (
    <ContentPage>
      <div className="flex flex-col overflow-y-auto p-4">
        <h2 className=" text-4xl font-semibold mb-4 p-6">Fase de Inicio</h2>

        <div className="w-full flex justify-center p-4">
          <Image
            src={ishikawa}
            alt="Aqui va una imagen chida :D"
            className="border border-gray-300 shadow-md bg-white p-4 rounded-lg w-3/4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Análisis de la problemática
            </h3>
            <p className="text-lg font-light">
              ¿Cómo podríamos brindar la información necesaria para la
              integración de los nuevos empleados en la Universidad Privada
              Boliviana con el uso de nuevas tecnologías web?
            </p>
          </div>
          {/* Título del proyecto */}
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Título del proyecto</h3>
            <p className="text-lg font-light">
              Sistema de comunicación e Integración de nuevos empleados - Caso
              Universidad Privada Boliviana
            </p>
          </div>
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Objetivo Principal</h3>
            <p className="text-lg font-light">
              Desarrollar un sistema de comunicación para la integración de
              nuevos empleados en la Universidad Privada Boliviana
            </p>
          </div>

          {/* Objetivos Específicos */}
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Objetivos Específicos
            </h3>
            <ul className="text-lg font-light list-disc px-4">
              <li className="py-2">
                Proponer la comunicación y eficiencia en los equipos de trabajo
                de la universidad.
              </li>
              <li className="pb-2">
                Implementar procesos para la actualización y aplicación efectiva
                de los conocimientos adquiridos en capacitaciones.
              </li>
              <li className="pb-2">
                Emitir información de los servicios ofrecidos por la
                universidad.
              </li>
              <li className="pb-2">
                Plantear el proceso de onboarding para los nuevos empleados para
                una mejor integración y comprensión de la universidad.
              </li>
            </ul>
          </div>

          {/* Alcances */}
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg mt-4">
            <h3 className="text-2xl font-semibold mb-2">Alcances</h3>
            <p className="text-lg font-light mb-2">
              Desarrollo del Portal Web: Crear un sistema de comunicación
              orientado a la integración de personal nuevo y pasantes en la
              Universidad Privada Boliviana.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Funcionalidades</h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                Diseño adaptativo para una óptima visualización en diversos
                dispositivos (móviles, tablets, ordenadores).
              </li>
              <li className="pb-2">
                Tres niveles de usuarios: Público general, Personal y
                Administradores de la universidad.
              </li>
              <li className="pb-2">
                Secciones informativas sobre la cultura y políticas de la
                universidad, noticias, eventos y recursos para nuevos empleados.
              </li>
              <li className="pb-2">
                Formulario de registro y seguimiento para nuevos empleados y
                pasantes.
              </li>
              <li className="pb-2">
                Herramientas de comunicación interna como foros y sistemas de
                mensajería.
              </li>
              <li className="pb-2">
                Controles de versión y bases de datos para el manejo de usuarios
                y contenido.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Mantenimiento y Soporte
            </h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                Soporte técnico continuo y mantenimiento del portal durante la
                duración del contrato.
              </li>
              <li className="pb-2">
                Jornadas de mantenimiento programadas para correcciones y
                mejoras basadas en feedback.
              </li>
              <li className="pb-2">
                Soporte técnico vía correo electrónico durante horas laborales.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Hosting y Seguridad
            </h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                Servicios de hosting para manejar un tráfico significativo con
                suficiente ancho de banda y espacio de almacenamiento.
              </li>
              <li className="pb-2">Seguridad SSL para conexiones seguras.</li>
              <li className="pb-2">
                Cumplimiento de normativas legales y de accesibilidad.
              </li>
            </ul>
          </div>

          {/* Límites */}
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Límites</h3>

            <p className="text-lg font-light mb-2">
              Alcance Geográfico y de Usuarios: El portal estará inicialmente
              enfocado en la comunidad interna de la UPB, incluyendo nuevos
              empleados, pasantes y el personal existente.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Contenido y Datos
            </h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                El portal se limitará a usar información y recursos
                proporcionados por la universidad.
              </li>
              <li className="pb-2">
                No se incluirá contenido externo sin previa verificación y
                aprobación de la universidad.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Soporte y Mantenimiento
            </h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                El soporte técnico se limitará al horario laboral establecido.
              </li>
              <li className="pb-2">
                El mantenimiento post-lanzamiento estará restringido a un
                período de tres meses, a menos que se acuerde una extensión.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Funcionalidades y Personalización
            </h3>
            <ul className="text-lg font-light list-disc px-4 mb-2">
              <li className="py-2">
                Las funcionalidades del portal estarán determinadas por los
                requisitos iniciales del proyecto, con margen para ajustes
                menores basados en feedback.{" "}
              </li>
              <li className="pb-2">
                Personalizaciones extensas fuera del alcance original podrían
                requerir negociaciones adicionales bajo adenda.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Tecnología y Plataformas
            </h3>
            <p className="text-lg font-light mb-2">
              El portal se desarrollará utilizando tecnologías y plataformas
              acordadas al inicio del proyecto.
            </p>
          </div>
        </div>
        <div className="border border-gray-300 shadow-md bg-white p-4 m-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Terminos de Referencia
            </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            {/* Antecedentes y Justificación */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">1. Antecedentes y Justificación</h3>
  <ul className="text-lg font-light list-disc px-4">
    <li className="py-2">
      UPB busca excelencia académica y globalización.
    </li>
    <li className="pb-2">
      Necesidad de portal web para integrar personal y pasantes.
    </li>
  </ul>
</div>

{/* Objetivos */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">2. Objetivos</h3>
  <ul className="text-lg font-light list-disc px-4">
    <li className="py-2">
      Diseñar portal intuitivo y atractivo.
    </li>
    <li className="pb-2">
      Proporcionar información sobre cultura, noticias y requerimientos.
    </li>
  </ul>
</div>

{/* Alcance de los Servicios */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">3. Alcance de los Servicios</h3>
  {/* Desarrollo del Portal Web */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Desarrollo del Portal Web</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Implementación y diseño del portal.
      </li>
      <li className="pb-2">
        Pruebas de usabilidad y control de versiones.
      </li>
      <li className="pb-2">
        Integración de bases de datos.
      </li>
    </ul>
  </div>
  
  {/* Mantenimiento y Soporte */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Mantenimiento y Soporte</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Servicios continuos y ajustes según retroalimentación.
      </li>
      <li className="pb-2">
        Hosting, seguridad y registro de dominio.
      </li>
    </ul>
  </div>
</div>

{/* Actividades Clave */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">4. Actividades Clave</h3>
  <ul className="text-lg font-light list-disc px-4">
    <li className="py-2">
      Planificación, desarrollo y coordinación con UPB.
    </li>
    <li className="pb-2">
      Implementación, prueba y capacitación.
    </li>
  </ul>
</div>

{/* Resultados y Productos Esperados */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">5. Resultados y Productos Esperados</h3>
  {/* Plataforma Web Funcional */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Plataforma Web Funcional</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Interfaz amigable y contenido informativo.
      </li>
      <li className="pb-2">
        Documentación técnica y manuales.
      </li>
    </ul>
  </div>

  {/* Informes de Rendimiento y Uso */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Informes de Rendimiento y Uso</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Informes progresivos y datos de uso.
      </li>
    </ul>
  </div>
</div>

{/* Otros Requisitos (Wizard) */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">6. Otros Requisitos</h3>
  {/* Colaboración Constante */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Colaboración Constante</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Comunicación efectiva entre empleados.
      </li>
      <li className="pb-2">
        Diseño alineado con valores y objetivos.
      </li>
    </ul>
  </div>

  {/* Formación y Soporte Post-Lanzamiento */}
  <div className="pb-4">
    <h4 className="text-lg font-semibold mb-2">Formación y Soporte Post-Lanzamiento</h4>
    <ul className="text-lg font-light list-disc px-4">
      <li className="py-2">
        Centro de recursos y soporte técnico.
      </li>
      <li className="pb-2">
        Optimización del proceso de onboarding.
      </li>
    </ul>
  </div>
</div>

{/* Supervisión e Informes */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">7. Supervisión e Informes</h3>
  <ul className="text-lg font-light list-disc px-4">
    <li className="py-2">
      Informes presentados para comentarios y aprobación.
    </li>
  </ul>
</div>

{/* Calendario de Pagos */}
<div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
  <h3 className="text-2xl font-semibold mb-2">8. Calendario de Pagos</h3>
  <ul className="text-lg font-light list-disc px-4">
    <li className="py-2">
      Pagos basados en hitos y entregables específicos del proyecto.
    </li>
  </ul>
</div>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-4 mx-8">
          Enlaces a nuestro material
        </h2>
        <ul className="list-disc pl-6 m-2 mx-8 pb-5">
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://docs.google.com/document/d/1OUGE37pjMVFHMaC10UmJ8daxuE1wUDbCU04rmCqaY4s/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terminos de Referencia
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://docs.google.com/document/d/1P7YjJzcUr7dGsoxH4hSmKT1p6kA0gBsMczXHTn-4EDs/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carta de Inicio del Proyecto
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diagramas BMWin
            </a>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
};

export default FaseInicio;
