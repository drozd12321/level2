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
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

import React, { createContext, useCallback, useContext, useState } from "react";
import { MenuAccordion } from "../MenuAccordion/MenuAccordion";
import { MenuGroup } from "../MenuAccordion/MenuAccordion.Group";

// const MenuContext = createContext<Cnt>({
//   activSecond: undefined,
//   activeGroup: undefined,
//   activThird: undefined,
//   switchGroup: () => {},
//   switchGroupSecond: () => {},
//   switchGroupThird: () => {},
// });
// const MenuAccordion = ({ children }: MenuAccordionProps) => {
//   const [activeGroup, setActiveGroup] = useState<string | undefined>("");
//   const [activSecond, setActivSecond] = useState<string | undefined>("");
//   const [activThird, setActivThird] = useState<string | undefined>("");
//   const switchGroup = useCallback((title: string | undefined) => {
//     setActiveGroup((activ) => (activ === title ? undefined : title));
//   }, []);
//   const switchGroupSecond = useCallback((title: string | undefined) => {
//     setActivSecond((activ) => (activ === title ? undefined : title));
//   }, []);
//   const switchGroupThird = useCallback((title: string | undefined) => {
//     setActivThird((activ) => (activ === title ? undefined : title));
//   }, []);
//   return (
//     <MenuContext.Provider
//       value={{
//         activeGroup,
//         switchGroup,
//         activSecond,
//         switchGroupSecond,
//         activThird,
//         switchGroupThird,
//       }}
//     >
//       <div className="grid grid-cols-1 gap-4 text-2xl shadow-lg rounded-lg mt-5 ">
//         {children}
//       </div>
//     </MenuContext.Provider>
//   );
// };
// MenuAccordion.Group = function MenuGroup({
//   children,
//   title,
//   link,
// }: MenuGroupProps) {
//   const { activeGroup, switchGroup } = useContext(MenuContext);
//   return (
//     <div>
//       <div className="flex text-center gap-3">
//         <span
//           className={`cursor-pointer hover:text-[--primary] ${
//             activeGroup === title && "text-[--primary]"
//           }`}
//         >
//           <Link href={`/${link}`}>{title}</Link>
//         </span>
//         <button
//           onClick={() => switchGroup(title)}
//           className="transition-all hover:translate-y-1.5"
//         >
//           <SlArrowDown />
//         </button>
//       </div>
//       {activeGroup === title && (
//         <div className="grid grid-cols-1 gap-0.5 text-xl ml-2.5 ">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };
// MenuAccordion.Item = function MenuItem({ children, title }: MenuItemProps) {
//   const { activSecond, switchGroupSecond } = useContext(MenuContext);
//   return (
//     <div>
//       <button
//         onClick={() => switchGroupSecond(title)}
//         className={`hover:text-[--primary] border border-solid border-1 border-black mr-4 rounded-lg p-2 mt-2 ${
//           activSecond === title && "text-[--primary]"
//         }`}
//       >
//         {title}
//       </button>
//       {activSecond === title && (
//         <div className="grid  gap-1 text-lg ml-3 mt-2">{children}</div>
//       )}
//     </div>
//   );
// };
// MenuAccordion.ThirdLevel = function MenuThirdLevel({
//   page,
// }: MenuThirdLevelProps) {
//   const { activThird, switchGroupThird } = useContext(MenuContext);
//   return (
//     <button
//       onClick={() => switchGroupThird(page)}
//       className={` hover:text-[--primary] cursor-pointer grid grid-cols-1 gap-1 border border-solid border-1 border-black mr-4 rounded-lg p-2  `}
//     >
//       <Link
//         className={`${activThird === page && "text-[--primary]"}`}
//         href={`/courses/${page}`}
//       >
//         {page}
//       </Link>
//     </button>
//   );
// };
const Menu = ({ menuIt }: { menuIt: MenuItem[] }) => {
  return (
    <div>
      <MenuAccordion>
        {men.map((item) => (
          <div key={item.id} className="flex gap-2 ">
            <span>
              <item.icon />
            </span>
            <MenuGroup title={item.name} link={item.route}>
              {item.name === "Курсы" &&
                menuIt.map((secondMen) => (
                  <MenuItem
                    key={secondMen._id.secondCategory}
                    title={secondMen._id.secondCategory}
                  >
                    {secondMen.pages.map((pag) => (
                      <MenuAccordion.ThirdLevel
                        key={pag.alias}
                        page={pag.alias}
                      />
                    ))}
                  </MenuItem>
                ))}
              {item.name === "Сервисы" &&
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
            </MenuGroup>
          </div>
        ))}
      </MenuAccordion>
    </div>
  );
};

export default Menu;
