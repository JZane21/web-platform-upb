"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const page = () => {
  return (
    <ContentPage>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-purple-600">
          University Portal
        </h1>

        {/* Funcionalidades */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Funcionalidades
          </h2>
          <ul className="list-disc list-inside">
            {/* ... (Funcionalidades detalladas) */}
            <li>
              Diseño adaptativo para una óptima visualización en diversos
              dispositivos.
            </li>
            <li>
              Tres niveles de usuarios: Público general, Personal y
              Administradores de la universidad.
            </li>
            {/* ... (Otras funcionalidades) */}
          </ul>
        </div>

        {/* Requisitos no funcionales */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">
            Requisitos no funcionales
          </h2>
          <ul className="list-disc list-inside">
            {/* ... (Requisitos no funcionales detallados) */}
            <li>
              Tipo: Requerimiento de Seguridad - Inicio de Sesión de usuario.
            </li>
            <li>Tipo: Producto - Datos guardados en el servidor.</li>
            {/* ... (Otros requisitos no funcionales) */}
          </ul>
        </div>

        {/* Otra información */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-purple-600">
            Otra información relevante
          </h2>
          <p className="text-blue-600">
            Aquí se incluiría información detallada sobre el diseño, las
            secciones informativas, herramientas de comunicación, etc.
          </p>
        </div>
      </div>
    </ContentPage>
  );
};

export default page;
