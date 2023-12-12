import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentPage = ({ children }: Props) => {
  return <section className="w-full">{children}</section>;
};

export default ContentPage;
