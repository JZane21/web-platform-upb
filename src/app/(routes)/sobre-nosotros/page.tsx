"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";

const SobreNosotros = () => {
  return (
    <ContentPage>
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Sobre Expohogar</h2>
          <p>
            EXPOHOGAR, un evento líder en la exposición de productos y servicios
            para el hogar, se ha consolidado como una plataforma clave para
            empresas, artistas y emprendedores. Con una exitosa trayectoria en
            eventos físicos, EXPOHOGAR ahora se enfoca en fortalecer su
            presencia digital, complementando sus eventos con una sólida
            plataforma web para ampliar su alcance y establecer conexiones
            comerciales.
          </p>
        </div>

        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Sobre Nuestro Team</h2>
          <p>
            Nuestro equipo de desarrollo está compuesto por profesionales
            dedicados, incluyendo a Ambar (QA), José y Nata (Developers), Ander
            (DevOps y Developer), Emanuel (Scrum Master) e Ignacio (PO y
            Developer). Comprometidos con la excelencia en desarrollo de
            software, trabajamos juntos para ofrecer soluciones innovadoras y
            eficientes.
          </p>
        </div>
      </div>
    </ContentPage>
  );
};

export default SobreNosotros;
