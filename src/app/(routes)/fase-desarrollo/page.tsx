"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";
import ShowFigures from "./components/ShowFigures";
import ListFigures from "./components/ListFigures";
import Requirements from "./components/Requirements";
import Diagrams from "./components/Diagrams";
import ScrumMethodology from "./components/ScrumMethodology";
import MaterialList from "./components/MaterialList";
import SystemLayers from "./components/SystemLayers";

const FaseDesarrolloDesign = () => {
  const commonUserMobile: string[] = ["usuario-mobile.png"];

  const commonUserDesktop: string[] = ["usuario-desktop.png"];

  const employeeMobile: string[] = ["empleado-mobile.png"];

  const employeeDesktop: string[] = ["empleado-desktop.png"];

  const adminMobile: string[] = [
    "admin-first-mobile.png",
    "admin-aprobar-publicar-anuncios-mobile.png",
    "admin-seguimiento-empleados-pasantes-mobile.png",
    "admin-gestion-inventario-mobile.png",
    "admin-gestion-personal-mobile.png",
    "admin-gestion-reglamentos-mobile.png",
    "admin-gestion-resultados-mobile.png",
  ];

  const adminDesktop: string[] = [
    "admin-first-desktop.png",
    "admin-aprobar-publicar-anuncios-desktop.png",
    "admin-seguimiento-empleados-pasantes-desktop.png",
    "admin-gestion-inventario-desktop.png",
    "admin-gestion-personal-desktop.png",
    "admin-gestion-reglamentos-desktop.png",
    "admin-gestion-resultados-desktop.png",
  ];

  return (
    <ContentPage>
      <div className="bg-slate-100 w-full min-h-screen p-10 flex flex-col">
        <h1 className="text-3xl font-bold">Fase de Diseño y Desarrollo</h1>

        <Requirements />

        <Diagrams />

        <ScrumMethodology />

        <h2 className="text-2xl font-bold mx-8">Herramientas</h2>
        <div className="flex flex-row justify-center">
          <ListFigures
            titleView={"Gestión de la Organización del proyecto"}
            listImages={["trello.png"]}
          />
          <ListFigures
            titleView={"Diseño de la estructura del proyecto"}
            listImages={["figma.png"]}
          />
        </div>

        <h2 className="text-2xl font-bold mt-4 mx-8">
          Diseño de las pantallas
        </h2>

        <ShowFigures
          title={"Vista usuario común"}
          listImagesDesktop={commonUserDesktop}
          listImagesMobile={commonUserMobile}
        />

        <ShowFigures
          title={"Vista empleado"}
          listImagesDesktop={employeeDesktop}
          listImagesMobile={employeeMobile}
        />

        <ShowFigures
          title={"Vista administrador"}
          listImagesDesktop={adminDesktop}
          listImagesMobile={adminMobile}
        />

        <SystemLayers />

        <MaterialList />
      </div>
    </ContentPage>
  );
};

export default FaseDesarrolloDesign;
