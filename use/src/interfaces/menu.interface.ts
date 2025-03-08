import { IconType } from "react-icons";
import { TopLevelCategory } from "./page.interface";

export interface PadeItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
export interface MenuItem {
  group: number;
  _id: {
    secondCategory: string;
  };
  pages: PadeItem[];
}
export interface Men {
  route: string;
  name: string;
  icon: IconType;
  id: TopLevelCategory;
}
