"use client";

import React from "react";
import Image from "next/image";

const SystemLayers = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mt-4 mx-8">Capas del sistema</h2>
      <div className="w-full flex justify-center">
        <Image
          src={`/capas-sistema.png`}
          width={400}
          height={400}
          alt="imagen"
          className="m-5"
        />
      </div>
    </>
  );
};

export default SystemLayers;
