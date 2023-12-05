import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentPage = ({ children }: Props) => {
  return <section className="w-full h-max bg-slate-100">{children}</section>;
};

export default ContentPage;
