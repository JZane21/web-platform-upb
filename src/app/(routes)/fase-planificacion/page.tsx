"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const FasePlanificacion = () => {
  return (
    <ContentPage>
      <div className="overflow-y-auto h-screen p-4">
        <h2 className="text-xl font-semibold mb-4">
          Planificación del Proyecto
        </h2>

         {/* Fase de Inicio */}
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Fase de Inicio (Duración: 1 Mes)</h2>
              <p>
                <strong>Definir la Problemática y Objetivos del Sistema Web</strong>
                <br />
                Descripción: Analizar y documentar la problemática a resolver y los objetivos del sistema web.
                <br />
                Responsable: Ignacio 
                <br />
                Tiempo: 1 semana
              </p>
              <p>
                <strong>Reuniones Iniciales con el Cliente</strong>
                <br />
                Descripción: Realizar reuniones para entender las necesidades y expectativas del cliente.
                <br />
                Responsable: Emanuel e Ignacio
                <br />
                Tiempo: 1 semana
              </p>
              <p>
                <strong>Desarrollo del Documento de Inicio del Proyecto</strong>
                <br />
                Descripción: Elaborar un documento que establezca los objetivos, alcance y requisitos iniciales del proyecto.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 1 semana
              </p>
              <p>
                <strong>Evaluación de Viabilidad y Riesgos Iniciales</strong>
                <br />
                Descripción: Analizar la viabilidad técnica y financiera, identificando posibles riesgos.
                <br />
                Responsable: Emanuel
                <br />
                Tiempo: 1 semana
              </p>
            </div>

          {/* Fase de Planificación */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Planificación (Duración: 2 Meses)</h2>
          <p><strong>Desarrollo del Plan de Proyecto</strong><br />
          Descripción: Crear un plan detallado del proyecto, incluyendo cronograma, recursos y presupuesto.<br />
          Responsable: Emanuel<br />
          Tiempo: 3 semanas</p>
          
          <p><strong>Asignación de Recursos y Tareas</strong><br />
          Descripción: Distribuir las tareas y asignar recursos a los miembros del equipo.<br />
          Responsable: Emanuel<br />
          Tiempo: 1 semana</p>
          
          <p><strong>Evaluación y Gestión de Riesgos</strong><br />
          Descripción: Identificar riesgos potenciales y desarrollar estrategias de mitigación.<br />
          Responsable: Emanuel<br />
          Tiempo: 2 semanas</p>
        </div>

            {/* Fase de Diseño */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Diseño (Duración: 3 Meses)</h2>
          <p><strong>Análisis de Requerimientos y Diseño Arquitectónico (UML y C4)</strong><br />
          Descripción: Definir requerimientos funcionales y no funcionales, y desarrollar la arquitectura del sistema.<br />
          Responsable: José y Nata<br />
          Tiempo: 1 mes</p>
          
          <p><strong>Creación de Wireframes y Prototipos</strong><br />
          Descripción: Diseñar wireframes y prototipos para la interfaz de usuario del sistema web.<br />
          Responsable: Nata<br />
          Tiempo: 1 mes</p>
          
          <p><strong>Revisión y Aprobación del Diseño con el Cliente</strong><br />
          Descripción: Presentar los diseños al cliente para su revisión y aprobación.<br />
          Responsable: Ignacio y Emanuel<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Desarrollo */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Desarrollo (Duración: 5 Meses)</h2>
          <p><strong>Desarrollo del Frontend y Backend</strong><br />
          Descripción: Codificar las funcionalidades del sistema según los diseños y requerimientos.<br />
          Responsable: José, Ander y Nata<br />
          Tiempo: 2 meses</p>
          
          <p><strong>Implementación de la Lógica de Negocio</strong><br />
          Descripción: Desarrollar la lógica del negocio y las reglas en el backend.<br />
          Responsable: Ander y Ignacio<br />
          Tiempo: 2 meses</p>
          
          <p><strong>Integración de Componentes y Sistemas</strong><br />
          Descripción: Integrar los diferentes componentes y sistemas del proyecto.<br />
          Responsable: Ander<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Pruebas y Control de Calidad */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Pruebas y Control de Calidad (Duración: 3 Meses)</h2>
          <p><strong>Pruebas Unitarias y de Integración</strong><br />
          Descripción: Realizar pruebas para verificar cada componente y su integración con otros.<br />
          Responsable: Ambar<br />
          Tiempo: 1 mes</p>
          
          <p><strong>Pruebas de Rendimiento y Seguridad</strong><br />
          Descripción: Evaluar el rendimiento y la seguridad del sistema.<br />
          Responsable: Ambar<br />
          Tiempo: 1 mes</p>
          
          <p><strong>Corrección de Errores y Ajustes</strong><br />
          Descripción: Identificar y corregir errores basados en los resultados de las pruebas.<br />
          Responsable: José y Nata<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Implementación */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Implementación (Duración: 1 Mes)</h2>
          <p><strong>Despliegue en Producción</strong><br />
          Descripción: Desplegar el sistema en un entorno de producción.<br />
          Responsable: Ander<br />
          Tiempo: 2 semanas</p>
          
          <p><strong>Configuración de Servidores y Bases de Datos</strong><br />
          Descripción: Configurar y optimizar servidores y bases de datos para el entorno de producción.<br />
          Responsable: Ander<br />
          Tiempo: 2 semanas</p>
        </div>

            {/* Fase de Evaluación y Retroalimentación */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Evaluación y Retroalimentación (Duración: 2 Semanas)</h2>
          <p><strong>Evaluación del Cliente y Usuarios Finales</strong><br />
          Descripción: Recoger y analizar comentarios y sugerencias de los usuarios reales.<br />
          Responsable: Ignacio<br />
          Tiempo: 2 semanas</p>
        </div>

        {/* Fase de Mantenimiento y Actualización */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Mantenimiento y Actualización (Duración: 4 Meses)</h2>
          <p><strong>Soporte y Resolución de Problemas Técnicos</strong><br />
          Descripción: Proporcionar asistencia técnica continua y resolver problemas emergentes.<br />
          Responsable: José<br />
          Tiempo: 2 meses</p>
          <p><strong>Actualizaciones y Mejoras</strong><br />
          Descripción: Implementar actualizaciones regulares, mejoras basadas en la retroalimentación del usuario y parches de seguridad.<br />
          Responsable: Ander y Ignacio<br />
          Tiempo: 2 meses</p>
        </div>

          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Planificación del Producto
        </h2>
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 1 (2 Semanas): Configuración Inicial y Arquitectura
              </h3>
              <p>
                <strong>Configuración de Vite + Vue3 + TypeScript</strong>
                <br />
                Descripción: Establecer el entorno de desarrollo usando Vite,
                integrando Vue3 y TypeScript.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>Introducción a Tailwind CSS</strong>
                <br />
                Descripción: Configurar Tailwind CSS para el desarrollo de la
                UI.
                <br />
                Responsable: Nata
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Configuración Inicial de PostgreSQL y ORM</strong>
                <br />
                Descripción: Instalar PostgreSQL y configurar un ORM.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Estructuración de la Capa de Datos en Backend</strong>
                <br />
                Descripción: Definir la estructura de la base de datos y los
                modelos.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 2 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 2 (2 Semanas): Diseño y Prototipado del Backend
              </h3>
              <p>
                <strong>Diseño de la Capa de Lógica de Negocio</strong>
                <br />
                Descripción: Desarrollar las reglas de negocio en Node.js y
                Express.js.
                <br />
                Responsable: José
                <br />
                Tiempo: 5 días
              </p>
              <p>
                <strong>Implementación de JWT para Autenticación</strong>
                <br />
                Descripción: Configurar JWT para la autenticación de sesiones.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>
                  Desarrollo de Controladores Node.js + Express.js
                </strong>
                <br />
                Descripción: Crear controladores en el backend.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Documentación Inicial de la API con Swagger</strong>
                <br />
                Descripción: Documentar los endpoints de la API con Swagger.
                <br />
                Responsable: Nata
                <br />
                Tiempo: 2 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 3 (2 Semanas): Diseño Frontend y Conexión Backend
              </h3>
              <p>
                <strong>Organización Modular de Componentes Vue.js</strong>
                <br />
                Descripción: Diseñar componentes Vue.js de manera modular.
                <br />
                Responsable: José
                <br />
                Tiempo: 5 días
              </p>
              <p>
                <strong>Configuración de Vuex para Gestión de Estado</strong>
                <br />
                Descripción: Implementar Vuex para la gestión del estado.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>Establecimiento de Peticiones HTTP con Axios</strong>
                <br />
                Descripción: Configurar Axios para las peticiones HTTP.
                <br />
                Responsable: Nata
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Diseño de la Capa de Presentación en Frontend</strong>
                <br />
                Descripción: Crear la interfaz de usuario con Vue.js.
                <br />
                Responsable: José
                <br />
                Tiempo: 2 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 4 (2 Semanas): Desarrollo Avanzado y Pruebas Unitarias
              </h3>
              <p>
                <strong>Implementación de Lógicas de Presentación</strong>
                <br />
                Descripción: Desarrollar lógicas para la interacción del
                usuario.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 5 días
              </p>
              <p>
                <strong>Configuración de Jest para Testing en Vue.js</strong>
                <br />
                Descripción: Configurar Jest para pruebas unitarias en Vue.js.
                <br />
                Responsable: Ambar
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>Integración de Eventos y Sockets en Frontend</strong>
                <br />
                Descripción: Implementar eventos y sockets para actualizaciones
                en tiempo real.
                <br />
                Responsable: José
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Optimización del Código Frontend y Backend</strong>
                <br />
                Descripción: Optimizar el código para mejorar rendimiento.
                <br />
                Responsables: Nata y Ander
                <br />
                Tiempo: 2 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 5 (2 Semanas): Preparación para el Despliegue y Seguridad
              </h3>
              <p>
                <strong>
                  Preparación del Despliegue con Render y Vercel/Netlify
                </strong>
                <br />
                Descripción: Configurar el despliegue del sitio web.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>Integración Continua con Jenkins</strong>
                <br />
                Descripción: Establecer integración continua con Jenkins.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 3 días
              </p>
              <p>
                <strong>Pruebas de Seguridad y Configuración HTTPS</strong>
                <br />
                Descripción: Realizar pruebas de seguridad y configurar HTTPS.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 4 días
              </p>
              <p>
                <strong>
                  Revisión y Optimización de la Arquitectura de la API
                </strong>
                <br />
                Descripción: Optimizar la arquitectura de la API.
                <br />
                Responsable: José
                <br />
                Tiempo: 3 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 6 y 7 (4 Semanas): Pruebas Intensivas y Optimización
              </h3>
              <p>
                <strong>Pruebas de Usabilidad y Rendimiento</strong>
                <br />
                Descripción: Realizar pruebas de usabilidad y rendimiento.
                <br />
                Responsable: Ambar
                <br />
                Tiempo: 7 días
              </p>
              <p>
                <strong>Pruebas de Transacciones y Pasarelas de Pago</strong>
                <br />
                Descripción: Probar las transacciones y pasarelas de pago.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 7 días
              </p>
              <p>
                <strong>Pruebas de Integración Frontend-Backend</strong>
                <br />
                Descripción: Realizar pruebas de integración entre frontend y
                backend.
                <br />
                Responsables: José y Nata
                <br />
                Tiempo: 7 días
              </p>
              <p>
                <strong>Optimización Final y Ajustes de Rendimiento</strong>
                <br />
                Descripción: Realizar ajustes finales para mejorar rendimiento.
                <br />
                Responsables: Ander y Ignacio
                <br />
                Tiempo: 7 días
              </p>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Sprint 8 (2 Semanas): Revisión Final, Lanzamiento y
                Documentación
              </h3>
              <p>
                <strong>Revisión Final y Ajustes Pre-Lanzamiento</strong>
                <br />
                Descripción: Realizar una revisión exhaustiva antes del
                lanzamiento.
                <br />
                Responsable: Todo el equipo
                <br />
                Tiempo: 5 días
              </p>
              <p>
                <strong>Lanzamiento Oficial del Sitio Web</strong>
                <br />
                Descripción: Lanzar el sitio web oficialmente.
                <br />
                Responsable: Ander
                <br />
                Tiempo: 2 días
              </p>
              <p>
                <strong>Documentación Final y Revisión de Proyecto</strong>
                <br />
                Descripción: Documentar el proyecto y revisar los resultados.
                <br />
                Responsable: Emanuel
                <br />
                Tiempo: 3 días
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          Plan de Gestión de Riesgos
        </h2>
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 rounded-lg mb-6">
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Plan de Gestión de Riesgos para el Sitio Web de EXPOHOGAR
            </h3>
            <p>
              Este plan de gestión de riesgos tiene como objetivo identificar,
              evaluar y mitigar los riesgos asociados al desarrollo y
              mantenimiento del sitio web de EXPOHOGAR. Se centra
              específicamente en los riesgos técnicos y de personal para
              garantizar la efectividad en la gestión de problemas durante el
              proyecto.
            </p>
            <h4 className="font-semibold">a.- Riesgos Técnicos:</h4>
            <ul>
              <li>Vulnerabilidades de seguridad en el sitio.</li>
              <li>
                Interrupciones del servicio debido a fallas en la
                infraestructura tecnológica.
              </li>
              <li>Incompatibilidad con navegadores y dispositivos.</li>
              <li>
                Pérdida de datos debido a fallos en las copias de seguridad.
              </li>
            </ul>
            <h4 className="font-semibold">b.- Riesgos de Personal:</h4>
            <ul>
              <li>
                Falta de habilidades específicas en el equipo, como se
                identifica en el Riesgo 5.
              </li>
              <li>
                Problemas de comunicación interna y con el cliente, relacionados
                con los Riesgos 1, 3, 7, 9 y 10.
              </li>
            </ul>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Estrategias de Mitigación
            </h3>
            <h4 className="font-semibold">
              Vulnerabilidades de seguridad en el sitio
            </h4>
            <p>
              Estrategia: Implementar configuraciones de seguridad y
              documentarlas para identificar problemas estructurados.
            </p>

            <h4 className="font-semibold">
              Interrupciones de servicio debido a fallas en la infraestructura
              tecnológica
            </h4>
            <p>
              Estrategia: Establecer un equipo de soporte y registrar
              detalladamente los fallos del sistema.
            </p>

            <h4 className="font-semibold">
              Incompatibilidad con navegadores y dispositivos
            </h4>
            <p>
              Estrategia: Evaluar y asegurar un diseño responsive para
              compatibilidad con todos los dispositivos.
            </p>

            <h4 className="font-semibold">
              Pérdida de datos debido a fallos en las copias de seguridad
            </h4>
            <p>
              Estrategia: Realizar seguimiento de respaldos de la información
              proporcionada por el cliente y generada por los usuarios.
            </p>

            <h4 className="font-semibold">
              Falta de habilidades específicas en el equipo
            </h4>
            <p>
              Estrategia: Implementar una estrategia colaborativa interna para
              abordar debilidades en el desarrollo.
            </p>

            <h4 className="font-semibold">
              Problemas de comunicación interna y con el cliente
            </h4>
            <p>
              Estrategia: Coordinar ceremonias importantes y establecer
              resoluciones efectivas para conflictos y decisiones cruciales.
            </p>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Plan de Contingencia</h3>
            <p>
              Respuesta a Fallas Técnicas: Equipo de soporte técnico y
              procedimientos de respaldo y recuperación para mitigar la pérdida
              de datos.
            </p>
            <p>
              Manejo de Retrasos o Cambios Inesperados: Recursos adicionales o
              flexibilidad en el cronograma, y técnicas de estimación como Poker
              Planning.
            </p>
            <p>
              Sobrecostos o Problemas Financieros: Fondo de reserva para gastos
              imprevistos y ajuste del alcance del proyecto.
            </p>
            <p>
              Problemas de Comunicación: Puntos de contacto alternativos y
              revisión de estrategias de comunicación.
            </p>
            <p>
              Resolución de conflictos y sesiones de aclaración para garantizar
              una comunicación efectiva dentro del equipo y con el cliente.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Herramientas</h2>
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Trello</h3>
              <p>
                Tras evaluar diferentes herramientas, se eligió Trello para la
                gestión del proyecto debido a:
              </p>
              <ul>
                <li>
                  Familiaridad del equipo con Trello en comparación con otras
                  herramientas.
                </li>
                <li>
                  Adecuación para equipos de desarrollo de tamaño reducido.
                </li>
                <li>
                  Facilidad de colaboración en tiempo real en tarjetas y
                  tableros, lo cual mejora la comunicación y coordinación.
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Figma</h3>
              <p>
                Después de evaluar diversas opciones, se eligió Figma para el
                diseño del proyecto debido a:
              </p>
              <ul>
                <li>
                  Amplia gama de herramientas para crear interfaces, prototipos
                  y colaborar en tiempo real.
                </li>
                <li>
                  Funcionamiento en el navegador, evitando la necesidad de
                  descargar software adicional.
                </li>
                <li>
                  Capacidad para crear prototipos interactivos y simular la
                  experiencia del usuario.
                </li>
                <li>
                  Prototipado para probar la navegación y funcionalidad antes de
                  la implementación.
                </li>
                <li>
                  Colaboración y retroalimentación en tiempo real entre los
                  miembros del equipo.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          Sobre las herramientas para la Planificación del Proyecto y el
          Producto
        </h2>
        <ul className="list-disc pl-6 m-2 mx-8">
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://trello.com/b/NDo5RIlb/gesti%C3%B3n-de-proyectos-inform%C3%A1ticos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello - Planificación del Proyecto
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://docs.google.com/document/d/1BrAdWcf2sbmt5mcbptMUI8ozEF_yth_pL_JyMH5Cb84/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documento - Fase de Planificación
            </a>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
};

export default FasePlanificacion;
