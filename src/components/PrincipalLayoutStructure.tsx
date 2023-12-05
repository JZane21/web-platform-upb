"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { NavbarOptions } from "../data/navbarOptions";
import LinkNavBar from "./LinkNavBar";
import { StoreContext } from "../store/StoreProvider";

interface Props {
  children: React.ReactNode;
}

const PrincipalLayoutStructure = ({ children }: Props) => {
  const context: any = useContext(StoreContext);

  return (
    <>
      <nav
        className="bg-white border-gray-200 dark:bg-purple-500 dark:border-gray-700 fixed w-full
      z-10"
      >
        <div className="max-w-screen-xl flex flex-col flex-wrap justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse mb-5">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {context.titlePage}
            </span>
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
          bg-purple-500 dark:border-gray-700"
            >
              {NavbarOptions.map((item, index) => (
                <LinkNavBar key={index} refLink={item.ref} text={item.text} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main className="absolute mt-[125px] p-[25px] w-full h-full bg-slate-100">
        {children}
      </main>
    </>
  );
};

export default PrincipalLayoutStructure;
