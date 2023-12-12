"use client";

import React from "react";
import ListFigures from "./ListFigures";

interface Props {
  title: string;
  listImagesDesktop: string[];
  listImagesMobile: string[];
}

const ShowFigures = ({ title, listImagesDesktop, listImagesMobile }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold mt-4 mx-14">{title}</h2>
      <div className="flex flex-row flex-wrap justify-center">
        <ListFigures
          titleView={"Vista apartado Desktop"}
          listImages={listImagesDesktop}
        />
        <ListFigures
          titleView={"Vista apartado Mobile"}
          listImages={listImagesMobile}
        />
      </div>
    </>
  );
};

export default ShowFigures;
