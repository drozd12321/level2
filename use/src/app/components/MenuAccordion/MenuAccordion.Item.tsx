"use client";
import { MenuItemProps } from "@/interfaces/menuAccordion.interface";
import { useContext } from "react";
import { MenuContext } from "./MenuAccordion";

export default function MenuItem({ children, title }: MenuItemProps) {
  const { activSecond, switchGroupSecond } = useContext(MenuContext);
  return (
    <div>
      <button
        onClick={() => switchGroupSecond(title)}
        className={`hover:text-[--primary] border border-solid border-1 border-black mr-4 rounded-lg p-2 mt-2 ${
          activSecond === title && "text-[--primary]"
        }`}
      >
        {title}
      </button>
      {activSecond === title && (
        <div className="grid  gap-1 text-lg ml-3 mt-2">{children}</div>
      )}
    </div>
  );
}
