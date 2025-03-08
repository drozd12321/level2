"use client";
import getMenu from "@/data/getMenu";
import { men } from "@/data/men";
import { MenuItem } from "@/interfaces/menu.interface";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
interface Cnt {
  activeGroup: string | undefined;
  switchGroup: (value: string | undefined) => void;
}
interface MenuAccordionProps {
  children: ReactNode;
}
interface MenuGroupProps {
  children: ReactNode;
  title: string;
}
interface MenuItemProps {
  title: string;
}
const MenuContext = createContext<Cnt>({
  activeGroup: undefined,
  switchGroup: () => {},
});
const MenuAccordion = ({ children }: MenuAccordionProps) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(
    men[0].name
  );
  const switchGroup = useCallback((title: string | undefined) => {
    setActiveGroup((activ) => (activ === title ? undefined : title));
  }, []);
  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};
MenuAccordion.Group = function MenuGroup({ children, title }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <div>
      <button onClick={() => switchGroup(title)}>{title}</button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};
MenuAccordion.Item = function MenuItem({ title }: MenuItemProps) {
  return <div>{title}</div>;
};
const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMenu();
        setMenuItems(data);
        setLoad(true);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {load && (
        <MenuAccordion>
          {men.map((item, i) => (
            <MenuAccordion.Group title={item.name} key={item.id}>
              {menuItems.map(
                (menuItem) =>
                  i === 0 && (
                    <MenuAccordion.Item
                      title={menuItem._id.secondCategory}
                      key={menuItem._id.secondCategory}
                    />
                  )
              )}
            </MenuAccordion.Group>
          ))}
        </MenuAccordion>
      )}
    </div>
  );
};

export default Menu;
