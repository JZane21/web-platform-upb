"use client";

import React from "react";
import Image from "next/image";

const InitPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-yellow-400 min-h-screen flex justify-center items-center">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-purple-600 mb-6">
            Red Labotal UPB
          </h1>
          <div className="text-lg mb-4">
            <h2 className="font-bold mb-2">Integrantes:</h2>
            <ul>
              <li>Ander Cayllan</li>
              <li>José Carrasco</li>
              <li>Ambar Rojas</li>
              <li>Emmanuel Lozano</li>
              <li>Natalia Bilbao</li>
              <li>Ignacio Lizarazu</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InitPage;
