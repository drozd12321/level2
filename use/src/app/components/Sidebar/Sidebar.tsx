import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Menu from "../Menu/Menu";
import getMenu from "@/data/getMenu";
// import styles from "./Sidebar.module.css";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}

const Sidebar = async ({ ...props }: SidebarProps) => {
  const menu = await getMenu();
  return (
    <div {...props}>
      <Menu menuIt={menu} />
    </div>
  );
};

export default Sidebar;
