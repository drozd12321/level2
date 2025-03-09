"use client";
import { men } from "@/data/men";
import { MenuItem } from "@/interfaces/menu.interface";
import {
  Cnt,
  MenuAccordionProps,
  MenuGroupProps,
  MenuItemProps,
  MenuThirdLevelProps,
} from "@/interfaces/menuAccordion.interface";
import Link from "next/link";
import React, { createContext, useCallback, useContext, useState } from "react";

const MenuContext = createContext<Cnt>({
  activSecond: undefined,
  activeGroup: undefined,
  switchGroup: () => {},
  switchGroupSecond: () => {},
});
const MenuAccordion = ({ children }: MenuAccordionProps) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(
    men[0].name
  );
  const [activSecond, setActivSecond] = useState<string | undefined>("");
  const switchGroup = useCallback((title: string | undefined) => {
    setActiveGroup((activ) => (activ === title ? undefined : title));
  }, []);
  const switchGroupSecond = useCallback((title: string | undefined) => {
    setActivSecond((activ) => (activ === title ? undefined : title));
  }, []);
  return (
    <MenuContext.Provider
      value={{ activeGroup, switchGroup, activSecond, switchGroupSecond }}
    >
      <div className="grid grid-cols-1 gap-4 text-2xl shadow-lg rounded-lg mt-5 ">
        {children}
      </div>
    </MenuContext.Provider>
  );
};
MenuAccordion.Group = function MenuGroup({ children, title }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <div>
      <button
        className={`hover:text-[--primary] ${
          activeGroup === title && "text-[--primary]"
        }`}
        onClick={() => switchGroup(title)}
      >
        {title}
      </button>
      {activeGroup === title && (
        <div className="grid grid-cols-1 gap-3 text-xl ml-2.5 ">{children}</div>
      )}
    </div>
  );
};
MenuAccordion.Item = function MenuItem({ children, title }: MenuItemProps) {
  const { activSecond, switchGroupSecond } = useContext(MenuContext);
  return (
    <div>
      <button
        onClick={() => switchGroupSecond(title)}
        className={`hover:text-[--primary] border border-solid border-1 border-black mr-4 rounded-lg p-2 ${
          activSecond === title && "text-[--primary]"
        }`}
      >
        {title}
      </button>
      {activSecond === title && (
        <div className="grid  gap-3 text-lg ml-3 mt-2">{children}</div>
      )}
    </div>
  );
};
MenuAccordion.ThirdLevel = function MenuThirdLevel({
  page,
}: MenuThirdLevelProps) {
  return (
    <div className=" hover:text-[--primary] cursor-pointer grid grid-cols-1 gap-1 border border-solid border-1 border-black mr-4 rounded-lg p-2">
      <Link href={`/courses/${page}`}>{page}</Link>
    </div>
  );
};
const Menu = ({ menuIt }: { menuIt: MenuItem[] }) => {
  return (
    <div>
      <MenuAccordion>
        {men.map((item) => (
          <div key={item.id} className="flex gap-2 ">
            <span>
              <item.icon />
            </span>
            <MenuAccordion.Group title={item.name}>
              {item.name === "Курсы" &&
                menuIt.map((secondMen) => (
                  <MenuAccordion.Item
                    key={secondMen._id.secondCategory}
                    title={secondMen._id.secondCategory}
                  >
                    {secondMen.pages.map((pag) => (
                      <MenuAccordion.ThirdLevel
                        key={pag.alias}
                        page={pag.alias}
                      />
                    ))}
                  </MenuAccordion.Item>
                ))}
            </MenuAccordion.Group>
          </div>
        ))}
      </MenuAccordion>
    </div>
  );
};

export default Menu;
