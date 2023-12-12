"use client";

import React from "react";
import RequirementsList from "./RequirementsList";

const Requirements = () => {
  const requisitosFuncionalidades: {
    title: string;
    items: string[];
  }[] = [
    {
      title: "Diseño Adaptativo",
      items: [
        "Diseño de manual o reglas",
        "Descripción y Diseño de publicaciones",
      ],
    },
    {
      title: "Niveles de Usuarios",
      items: [
        "Vista para el público general",
        "Flujo de trabajo para el personal",
        "Gestión de personal para los administradores",
      ],
    },
    {
      title: "Secciones informativas",
      items: [
        "Recepción de eventos y Noticias",
        "Gestión de Recursos / Selección de Personal",
        "Elaboración de Reporte detallado",
        "Publicación de anuncios",
      ],
    },
    {
      title: "Registro y Seguimiento de empleados y pasantes",
      items: [
        "Recepción de solicitudes",
        "Evaluación de solicitudes",
        "Selección y documentación sobre el puesto",
        "Comunicación de Resultados",
      ],
    },
    {
      title: "Herramientas de comunicación interna",
      items: ["Desarrollo de Contenidos", "Publicación de la  documentación"],
    },
    {
      title: "Controles de versión y bases de datos",
      items: [
        "Adjuntar información sobre inventarios/personal/reglamentos",
        "Actualización de los documentos",
        "Verificación de la documentación",
        "Publicación de modificaciones",
      ],
    },
  ];

  const requisitosNoFuncionales: {
    title: string;
    items: string[];
  }[] = [
    {
      title: "Requerimiento de Seguridad",
      items: ["Inicio de Sesión de usuario", "Recuperar contraseña"],
    },
    {
      title: "Producto",
      items: ["Inicio de Sesión de usuario", "Recuperar contraseña"],
    },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mt-4 mx-8">Requerimientos</h2>
      <div className="max-w-5xl mx-auto">
        <RequirementsList
          generalTitle={"Funcionales"}
          requisitos={requisitosFuncionalidades}
        />
        <RequirementsList
          generalTitle={"No Funcionales"}
          requisitos={requisitosNoFuncionales}
        />
      </div>
    </div>
  );
};

export default Requirements;
