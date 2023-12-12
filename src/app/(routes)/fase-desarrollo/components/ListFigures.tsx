"use client";

import React from "react";
import Image from "next/image";

interface Props {
  titleView: string;
  listImages: string[];
}

const ListFigures = ({ listImages, titleView }: Props) => {
  return (
    <div className="flex flex-col items-center m-5">
      <h3 className="text-gray-500 text-xl">{titleView}</h3>
      <div className="flex flex-row flex-wrap items-center">
        {listImages.map((item, index) => (
          <Image
            key={index + 1}
            src={`/${item}`}
            width={275}
            height={275}
            alt="imagen"
            className="m-5"
          />
        ))}
      </div>
    </div>
  );
};

export default ListFigures;
