"use client";

import React from "react";
import PrincipalLayoutStructure from "../../components/PrincipalLayoutStructure";
import StoreProvider from "../../store/StoreProvider";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <StoreProvider>
      <PrincipalLayoutStructure>{children}</PrincipalLayoutStructure>
    </StoreProvider>
  );
};

export default layout;
