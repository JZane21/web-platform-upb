"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const FasePlanificacion = () => {
  return (
    <ContentPage>
      <div className="overflow-y-auto h-screen p-4">
      <h2 className=" text-4xl font-semibold mb-4 p-6">
          Planificación del Proyecto
        </h2>

         {/* Fase de Inicio */}
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 shadow-md bg-white p-4 rounded-lg mb-6 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Fase de Inicio (Duración: 1 Mes)</h2>
              <p className="font-light">
                <strong className="font-semibold">Definir la Problemática y Objetivos del Sistema Web</strong>
                <br />
                Descripción: Analizar y documentar la problemática a resolver y los objetivos del sistema web.
                <br />
                Responsable: Ignacio 
                <br />
                Tiempo: 1 semana
              </p>
              <p className="font-light">
                <strong className="font-semibold">Reuniones Iniciales con el Cliente</strong>
                <br />
                Descripción: Realizar reuniones para entender las necesidades y expectativas del cliente.
                <br />
                Responsable: Emanuel e Ignacio
                <br />
                Tiempo: 1 semana
              </p>
              <p className="font-light">
                <strong className="font-semibold">Desarrollo del Documento de Inicio del Proyecto</strong>
                <br />
                Descripción: Elaborar un documento que establezca los objetivos, alcance y requisitos iniciales del proyecto.
                <br />
                Responsable: Ignacio
                <br />
                Tiempo: 1 semana
              </p>
              <p className="font-light">
                <strong className="font-semibold">Evaluación de Viabilidad y Riesgos Iniciales</strong>
                <br />
                Descripción: Analizar la viabilidad técnica y financiera, identificando posibles riesgos.
                <br />
                Responsable: Emanuel
                <br />
                Tiempo: 1 semana
              </p>
            </div>

          {/* Fase de Planificación */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Planificación (Duración: 2 Meses)</h2>
          <p className="font-light"><strong className="font-semibold">Desarrollo del Plan de Proyecto</strong><br />
          Descripción: Crear un plan detallado del proyecto, incluyendo cronograma, recursos y presupuesto.<br />
          Responsable: Emanuel<br />
          Tiempo: 3 semanas</p>
          
          <p className="font-light"><strong className="font-semibold">Asignación de Recursos y Tareas</strong><br />
          Descripción: Distribuir las tareas y asignar recursos a los miembros del equipo.<br />
          Responsable: Emanuel<br />
          Tiempo: 1 semana</p>
          
          <p className="font-light"><strong className="font-semibold">Evaluación y Gestión de Riesgos</strong><br />
          Descripción: Identificar riesgos potenciales y desarrollar estrategias de mitigación.<br />
          Responsable: Emanuel<br />
          Tiempo: 2 semanas</p>
        </div>

            {/* Fase de Diseño */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Diseño (Duración: 3 Meses)</h2>
          <p className="font-light"><strong className="font-semibold">Análisis de Requerimientos y Diseño Arquitectónico (UML y C4)</strong><br />
          Descripción: Definir requerimientos funcionales y no funcionales, y desarrollar la arquitectura del sistema.<br />
          Responsable: José y Nata<br />
          Tiempo: 1 mes</p>
          
          <p className="font-light"><strong className="font-semibold">Creación de Wireframes y Prototipos</strong><br />
          Descripción: Diseñar wireframes y prototipos para la interfaz de usuario del sistema web.<br />
          Responsable: Nata<br />
          Tiempo: 1 mes</p>
          
          <p className="font-light"><strong className="font-semibold">Revisión y Aprobación del Diseño con el Cliente</strong><br />
          Descripción: Presentar los diseños al cliente para su revisión y aprobación.<br />
          Responsable: Ignacio y Emanuel<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Desarrollo */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Desarrollo (Duración: 5 Meses)</h2>
          <p className="font-light"><strong className="font-semibold">Desarrollo del Frontend y Backend</strong><br />
          Descripción: Codificar las funcionalidades del sistema según los diseños y requerimientos.<br />
          Responsable: José, Ander y Nata<br />
          Tiempo: 2 meses</p>
          
          <p className="font-light"><strong className="font-semibold">Implementación de la Lógica de Negocio</strong><br />
          Descripción: Desarrollar la lógica del negocio y las reglas en el backend.<br />
          Responsable: Ander y Ignacio<br />
          Tiempo: 2 meses</p>
          
          <p className="font-light"><strong className="font-semibold">Integración de Componentes y Sistemas</strong><br />
          Descripción: Integrar los diferentes componentes y sistemas del proyecto.<br />
          Responsable: Ander<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Pruebas y Control de Calidad */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Pruebas y Control de Calidad (Duración: 3 Meses)</h2>
          <p className="font-light"><strong className="font-semibold">Pruebas Unitarias y de Integración</strong><br />
          Descripción: Realizar pruebas para verificar cada componente y su integración con otros.<br />
          Responsable: Ambar<br />
          Tiempo: 1 mes</p>
          
          <p className="font-light"><strong className="font-semibold">Pruebas de Rendimiento y Seguridad</strong><br />
          Descripción: Evaluar el rendimiento y la seguridad del sistema.<br />
          Responsable: Ambar<br />
          Tiempo: 1 mes</p>
          
          <p className="font-light"><strong className="font-semibold">Corrección de Errores y Ajustes</strong><br />
          Descripción: Identificar y corregir errores basados en los resultados de las pruebas.<br />
          Responsable: José y Nata<br />
          Tiempo: 1 mes</p>
        </div>

            {/* Fase de Implementación */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Implementación (Duración: 1 Mes)</h2>
          <p className="font-light"><strong className="font-semibold">Despliegue en Producción</strong><br />
          Descripción: Desplegar el sistema en un entorno de producción.<br />
          Responsable: Ander<br />
          Tiempo: 2 semanas</p>
          
          <p className="font-light"><strong className="font-semibold">Configuración de Servidores y Bases de Datos</strong><br />
          Descripción: Configurar y optimizar servidores y bases de datos para el entorno de producción.<br />
          Responsable: Ander<br />
          Tiempo: 2 semanas</p>
        </div>

            {/* Fase de Evaluación y Retroalimentación */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Evaluación y Retroalimentación (Duración: 2 Semanas)</h2>
          <p className="font-light"><strong className="font-semibold">Evaluación del Cliente y Usuarios Finales</strong><br />
          Descripción: Recoger y analizar comentarios y sugerencias de los usuarios reales.<br />
          Responsable: Ignacio<br />
          Tiempo: 2 semanas</p>
        </div>

        {/* Fase de Mantenimiento y Actualización */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Fase de Mantenimiento y Actualización (Duración: 4 Meses)</h2>
          <p className="font-light"><strong className="font-semibold">Soporte y Resolución de Problemas Técnicos</strong><br />
          Descripción: Proporcionar asistencia técnica continua y resolver problemas emergentes.<br />
          Responsable: José<br />
          Tiempo: 2 meses</p>
          <p className="font-light"><strong className="font-semibold">Actualizaciones y Mejoras</strong><br />
          Descripción: Implementar actualizaciones regulares, mejoras basadas en la retroalimentación del usuario y parches de seguridad.<br />
          Responsable: Ander y Ignacio<br />
          Tiempo: 2 meses</p>
        </div>

          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Planificación del Producto
        </h2>
        <div className="overflow-y-auto max-h-96 p-4 border border border-gray-300 shadow-md bg-white p-4 rounded-lg mx-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Sprint 1: Configuración y Planificación */}
            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sprint 1: Configuración y Planificación (2 Semanas)</h3>
              
              <p className="font-light">
                <strong className="font-semibold">Configuración de Entorno NextJS y TypeScript</strong><br />
                Descripción: Instalación y configuración de NextJS con TypeScript.<br />
                Responsable: José<br />
                Tiempo: 3 días
              </p>
              
              <p className="font-light">
                <strong className="font-semibold">Planificación Inicial y Creación del Backlog</strong><br />
                Descripción: Elaboración del backlog y planificación de sprints.<br />
                Responsable: Emanuel<br />
                Tiempo: 4 días
              </p>
              
              <p className="font-light">
                <strong className="font-semibold">Configuración Inicial de Herramientas de Desarrollo</strong><br />
                Descripción: Configurar herramientas como Git, DBeaver y entornos de desarrollo local.<br />
                Responsable: Ander<br />
                Tiempo: 3 días
              </p>
              
              <p className="font-light">
                <strong className="font-semibold">Análisis de Requisitos del Portal</strong><br />
                Descripción: Reuniones con stakeholders para definir requisitos del portal.<br />
                Responsable: Ignacio<br />
                Tiempo: 2 días
              </p>
            </div>

            {/* Sprint 2: Diseño Arquitectónico y Frontend */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 2: Diseño Arquitectónico y Frontend (2 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Diseño Arquitectónico del Backend</strong><br />
            Descripción: Diseñar la arquitectura del backend con NestJS.<br />
            Responsable: Ander<br />
            Tiempo: 1 semana
          </p>

          <p className="font-light">
            <strong className="font-semibold">Desarrollo de Prototipos de UI/UX</strong><br />
            Descripción: Crear prototipos iniciales de UI/UX con herramientas de diseño.<br />
            Responsable: Nata<br />
            Tiempo: 1 semana
          </p>
        </div>


            {/* Sprint 3 y 4: Módulo de Gestión de Usuarios */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 3 y 4: Módulo de Gestión de Usuarios (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Estructura de Autenticación y Seguridad</strong><br />
            Descripción: Desarrollo de la autenticación y seguridad en el backend.<br />
            Responsable: Ignacio<br />
            Tiempo: 1 semana
          </p>

          <p className="font-light">
            <strong className="font-semibold">Interfaz de Inicio de Sesión y Recuperación de Contraseña</strong><br />
            Descripción: Implementación de interfaces de usuario para inicio de sesión y recuperación de contraseña.<br />
            Responsable: José<br />
            Tiempo: 1 semana
          </p>

          <p className="font-light">
            <strong className="font-semibold">Integración de Backend y Frontend para Autenticación</strong><br />
            Descripción: Conectar la lógica de autenticación del backend con el frontend.<br />
            Responsable: Ander<br />
            Tiempo: 2 semanas
          </p>
        </div>

            {/* Sprint 5 y 6: Módulo de Vistas de Información */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 5 y 6: Módulo de Vistas de Información (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Desarrollo de Vistas para Público General</strong><br />
            Descripción: Implementación de interfaces para usuarios generales.<br />
            Responsable: Nata<br />
            Tiempo: 2 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Desarrollo de Vistas para Personal y Administradores</strong><br />
            Descripción: Crear interfaces específicas para el personal y los administradores.<br />
            Responsable: José<br />
            Tiempo: 2 semanas
          </p>
        </div>

            {/* Sprint 7 y 8: Módulo de Procesos de Selección de Personal */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 7 y 8: Módulo de Procesos de Selección de Personal (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Implementación de Gestión de Recursos/Selección de Personal</strong><br />
            Descripción: Desarrollar funcionalidades para la gestión de recursos y selección de personal.<br />
            Responsable: Ignacio<br />
            Tiempo: 2 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Interfaz de Formularios de Registro y Seguimiento</strong><br />
            Descripción: Implementar formularios y seguimiento para nuevos empleados y pasantes.<br />
            Responsable: Nata<br />
            Tiempo: 2 semanas
          </p>
        </div>

           {/* Sprint 9: Módulo de Comunicación Interna */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 9: Módulo de Comunicación Interna (2 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Desarrollo de Herramientas de Comunicación Interna</strong><br />
            Descripción: Crear foros y sistemas de mensajería interna.<br />
            Responsable: José<br />
            Tiempo: 2 semanas
          </p>
        </div>

            {/* Sprint 10 y 11: Módulo de Desarrollo de Contenidos */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 10 y 11: Módulo de Desarrollo de Contenidos (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Implementación de Funciones de Desarrollo de Contenidos</strong><br />
            Descripción: Desarrollar herramientas para la creación y gestión de contenidos.<br />
            Responsable: Ignacio<br />
            Tiempo: 2 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Interfaz de Administración de Contenidos</strong><br />
            Descripción: Crear interfaces para la publicación y verificación de contenidos.<br />
            Responsable: Nata<br />
            Tiempo: 2 semanas
          </p>
        </div>

        {/* Sprint 12 y 13: Integración y Pruebas Iniciales */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 12 y 13: Integración y Pruebas Iniciales (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Integración Completa del Sistema</strong><br />
            Descripción: Integrar todos los módulos y funcionalidades desarrolladas.<br />
            Responsable: Ander<br />
            Tiempo: 2 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Pruebas Funcionales Iniciales</strong><br />
            Descripción: Realizar pruebas funcionales del sistema integrado.<br />
            Responsable: Ambar<br />
            Tiempo: 2 semanas
          </p>
        </div>

        {/* Sprint 14 y 15: Optimización y Preparación para el Despliegue */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 14 y 15: Optimización y Preparación para el Despliegue (4 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Preparación y Configuración del Despliegue</strong><br />
            Descripción: Configurar el portal para el despliegue en Render y Vercel, asegurando que el entorno de producción esté listo.<br />
            Responsable: Ander<br />
            Tiempo: 2 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Pruebas de Carga y Estrés</strong><br />
            Descripción: Realizar pruebas de carga para garantizar la escalabilidad y estabilidad del portal bajo diferentes condiciones de uso.<br />
            Responsable: Ambar<br />
            Tiempo: 2 semanas
          </p>
        </div>
        
        {/* Sprint 16 al 21: Fase de Pruebas y Control de Calidad */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 16 al 21: Fase de Pruebas y Control de Calidad (12 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Pruebas Unitarias y de Integración</strong><br />
            Descripción: Ejecutar pruebas unitarias y de integración para asegurar la funcionalidad y la integración de los diferentes componentes.<br />
            Responsable: Ambar<br />
            Tiempo: 4 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Pruebas de Usabilidad y Experiencia de Usuario</strong><br />
            Descripción: Realizar pruebas de usabilidad para garantizar una experiencia de usuario intuitiva y accesible.<br />
            Responsable: Ambar<br />
            Tiempo: 4 semanas
          </p>

          <p className="font-light">
            <strong className="font-semibold">Pruebas de Seguridad y Cumplimiento de Estándares</strong><br />
            Descripción: Llevar a cabo pruebas de seguridad para identificar y solucionar vulnerabilidades, y asegurar el cumplimiento de los estándares de seguridad web.<br />
            Responsable: Ambar<br />
            Tiempo: 4 semanas
          </p>
        </div>

        {/* Sprint 22: Despliegue Final y Evaluación */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Sprint 22: Despliegue Final y Evaluación (2 Semanas)</h3>

          <p className="font-light">
            <strong className="font-semibold">Despliegue Final en el Entorno de Producción</strong><br />
            Descripción: Realizar el despliegue final del portal web en el entorno de producción, asegurándose de que todos los aspectos funcionen según lo previsto.<br />
            Responsable: Ander<br />
            Tiempo: 1 semana
          </p>

          <p className="font-light">
            <strong className="font-semibold">Evaluación Final y Recopilación de Feedback</strong><br />
            Descripción: Evaluar el desempeño del portal en el entorno de producción y recopilar feedback para futuras mejoras.<br />
            Responsable: Emanuel<br />
            Tiempo: 1 semana
          </p>
        </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Plan de Gestión de Riesgos
        </h2>
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 shadow-md bg-white p-4 rounded-lg mb-6 mx-6">
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Plan de Gestión de Riesgos para el Portal Web Caso Universidad Privada Boliviana
            </h3>
            <p className="font-light">
              Este plan de gestión de riesgos tiene como objetivo identificar,
              evaluar y mitigar los riesgos asociados al desarrollo y
              mantenimiento del Portal Web Caso Universidad Privada Boliviana. Se centra
              específicamente en los riesgos técnicos y de personal para
              garantizar la efectividad en la gestión de problemas durante el
              proyecto.
            </p>
            <h4 className="font-semibold">a.- Riesgos Técnicos:</h4>
            <ul>
               <li><strong className="font-semibold">Retrasos en el Desarrollo:</strong> Causas posibles incluyen subestimación de la complejidad, falta de recursos y problemas técnicos imprevistos. Impacto potencial en el lanzamiento y costos.</li>
              <li><strong className="font-semibold">Inconsistencias en los Requerimientos:</strong> Causas posibles son comunicación ineficiente con las partes interesadas y cambios frecuentes en los requerimientos. Impacto potencial en el desarrollo de funcionalidades no alineadas.</li>
              <li><strong className="font-semibold">Problemas de Integración Tecnológica:</strong> Causas posibles son incompatibilidades entre tecnologías y herramientas. Impacto potencial en la integración del frontend y backend.</li>
              <li><strong className="font-semibold">Fallas de Seguridad y Privacidad de Datos:</strong> Causas posibles incluyen vulnerabilidades en el código y la infraestructura de hosting. Impacto potencial en la seguridad de datos.</li>
              <li><strong className="font-semibold">Dificultades en la Adopción del Usuario:</strong> Causas posibles son diseño de interfaz poco intuitivo y falta de capacitación. Impacto potencial en la adopción del portal.</li>
            </ul>
          </div>

          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
             Plan de Contingencia y Estrategias de Mitigación
            </h3>
            <ul className="list-disc pl-6 m-2">
              <li><strong className="font-semibold">Retrasos en el Desarrollo:</strong> Estrategia de Mitigación incluye un cronograma realista y seguimientos periódicos. Plan de Contingencia para reajustar el cronograma si es necesario.</li>
              <li><strong className="font-semibold">Inconsistencias en los Requerimientos:</strong> Estrategia de Mitigación con comunicación constante y documentación de cambios. Plan de Contingencia para revisar y ajustar el alcance del proyecto.</li>
              <li><strong className="font-semibold">Problemas de Integración Tecnológica:</strong> Estrategia de Mitigación con pruebas de integración tempranas y elección de tecnologías compatibles. Plan de contingencia para rediseñar componentes si es necesario.</li>
              <li><strong className="font-semibold">Fallas de Seguridad y Privacidad de Datos:</strong> Estrategia de Mitigación con prácticas de codificación segura y auditorías. Plan de Contingencia con protocolo de respuesta a incidentes de seguridad.</li>
              <li><strong className="font-semibold">Dificultades en la Adopción del Usuario:</strong> Estrategia de Mitigación involucrando a usuarios en el diseño y pruebas, con capacitación y materiales de ayuda. Plan de Contingencia para recopilar feedback y realizar mejoras iterativas.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Herramientas</h2>
        <div className="overflow-y-auto max-h-96 p-4 border border-gray-300 shadow-md bg-white p-4 rounded-lg mx-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Trello</h3>
              <p className="font-light">
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

            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Figma</h3>
              <p className="font-light">
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

            <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Draw.io</h3>
              <p className="font-light">
                La elección de la herramienta Draw.io para la creación de diagramas UML se fundamenta en su accesibilidad, versatilidad y funcionalidad intuitiva. Draw.io proporciona una plataforma en línea que elimina la necesidad de instalaciones locales, permitiendo un acceso fácil y colaborativo para el equipo de desarrollo. Su amplia gama de elementos UML predefinidos y la capacidad de exportar en varios formatos hacen que sea una herramienta completa para expresar visualmente conceptos y procesos. La interfaz amigable facilita la creación rápida y eficiente de diagramas, convirtiéndola en una elección ideal para representar de manera clara y concisa la arquitectura y el flujo de trabajo del proyecto.
              </p>
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
              href="https://trello.com/b/XjXYeDaF/gesti%C3%B3n-de-proyecto-sistema-de-comunicaci%C3%B3n-e-integraci%C3%B3n-de-nuevos-empleados"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello - Planificación del Proyecto
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://trello.com/b/5puCy3wW/portal-web-caso-universidad-privada-boliviana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello - Planificación del Producto
            </a>
          </li>
          <li>
            <a
              className="text-blue-400 hover:font-semibold hover:text-blue-800"
              href="https://docs.google.com/document/d/14jEt0jRJ90NfAIigzfjJ32ixbhZsee5N6BYTOzFjzfc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documento - Gestión de riesgos
            </a>
          </li>
        </ul>
      </div>
    </ContentPage>
  );
};

export default FasePlanificacion;
