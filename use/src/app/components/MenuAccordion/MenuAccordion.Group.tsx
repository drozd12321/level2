"use client";
import { MenuGroupProps } from "@/interfaces/menuAccordion.interface";
import { useContext } from "react";
import { MenuContext } from "./MenuAccordion";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

export function MenuGroup({ children, title, link }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <div>
      <div className="flex text-center gap-3">
        <span
          className={`cursor-pointer hover:text-[--primary] ${
            activeGroup === title && "text-[--primary]"
          }`}
        >
          <Link href={`/${link}`}>{title}</Link>
        </span>
        <button
          onClick={() => switchGroup(title)}
          className="transition-all hover:translate-y-1.5"
        >
          <SlArrowDown />
        </button>
      </div>
      {activeGroup === title && (
        <div className="grid grid-cols-1 gap-0.5 text-xl ml-2.5 ">
          {children}
        </div>
      )}
    </div>
  );
}
