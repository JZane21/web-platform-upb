"use client";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext({});

interface Props {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Props) => {
  const [titlePage, setTitlePage] = useState<string>("Grupo 2");

  return (
    <StoreContext.Provider
      value={{
        titlePage,
        setTitlePage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
