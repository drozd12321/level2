"useClient";
import { Cnt, MenuAccordionProps } from "@/interfaces/menuAccordion.interface";
import { useCallback, useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext<Cnt>({
  activSecond: undefined,
  activeGroup: undefined,
  activThird: undefined,
  switchGroup: () => {},
  switchGroupSecond: () => {},
  switchGroupThird: () => {},
});
export const MenuAccordion = ({ children }: MenuAccordionProps) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>("");
  const [activSecond, setActivSecond] = useState<string | undefined>("");
  const [activThird, setActivThird] = useState<string | undefined>("");
  const switchGroup = useCallback((title: string | undefined) => {
    setActiveGroup((activ) => (activ === title ? undefined : title));
  }, []);
  const switchGroupSecond = useCallback((title: string | undefined) => {
    setActivSecond((activ) => (activ === title ? undefined : title));
  }, []);
  const switchGroupThird = useCallback((title: string | undefined) => {
    setActivThird((activ) => (activ === title ? undefined : title));
  }, []);
  return (
    <MenuContext.Provider
      value={{
        activeGroup,
        switchGroup,
        activSecond,
        switchGroupSecond,
        activThird,
        switchGroupThird,
      }}
    >
      <div className="grid grid-cols-1 gap-4 text-2xl shadow-lg rounded-lg mt-5 ">
        {children}
      </div>
    </MenuContext.Provider>
  );
};
