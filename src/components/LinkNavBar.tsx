"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

interface Props {
  refLink: string;
  text: string;
}

const LinkNavBar = ({ refLink, text }: Props) => {
  const context: any = useContext(StoreContext);

  const router = useRouter();

  const changePage = () => {
    context.setTitlePage(`${text}`);
    router.push(`${refLink}`);
  };

  return (
    <li>
      <label
        onClick={changePage}
        className="block p-3 text-white text-2xl  hover:font-extrabold hover:underline active:font-bold rounded cursor-pointer font-josefin"
        aria-current="page"
      >
        {text}
      </label>
    </li>
  );
};

export default LinkNavBar;
