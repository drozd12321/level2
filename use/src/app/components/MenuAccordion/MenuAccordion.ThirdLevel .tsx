"use client";
import { MenuThirdLevelProps } from "@/interfaces/menuAccordion.interface";
import { MenuContext } from "./MenuAccordion";
import { useContext } from "react";
import Link from "next/link";

export function MenuThirdLevel({ page }: MenuThirdLevelProps) {
  const { activThird, switchGroupThird } = useContext(MenuContext);
  return (
    <button
      onClick={() => switchGroupThird(page)}
      className={` hover:text-[--primary] cursor-pointer grid grid-cols-1 gap-1 border border-solid border-1 border-black mr-4 rounded-lg p-2  `}
    >
      <Link
        className={`${activThird === page && "text-[--primary]"}`}
        href={`/courses/${page}`}
      >
        {page}
      </Link>
    </button>
  );
}
