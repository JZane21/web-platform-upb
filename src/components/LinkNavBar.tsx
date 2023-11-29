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
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent
        md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent
        cursor-pointer"
        aria-current="page"
      >
        {text}
      </label>
    </li>
  );
};

export default LinkNavBar;
