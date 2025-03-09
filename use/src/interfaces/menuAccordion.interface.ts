import { ReactNode } from "react";

export interface MenuAccordionProps {
  children: ReactNode;
}
export interface MenuGroupProps {
  children: ReactNode;
  title: string;
  link: string;
}
export interface MenuItemProps {
  children: ReactNode;
  title: string;
}
export interface MenuThirdLevelProps {
  page: string;
}
export interface Cnt {
  activSecond: string | undefined;
  activThird: string | undefined;
  activeGroup: string | undefined;
  switchGroup: (value: string | undefined) => void;
  switchGroupSecond: (value: string | undefined) => void;
  switchGroupThird: (value: string | undefined) => void;
}
