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
        className="block py-2 px-3 text-white hover:bg-purple-400
        active:bg-purple-600 active:text-blue-500 rounded cursor-pointer"
        aria-current="page"
      >
        {text}
      </label>
    </li>
  );
};

export default LinkNavBar;
